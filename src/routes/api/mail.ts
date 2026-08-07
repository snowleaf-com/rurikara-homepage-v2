import { Hono } from 'hono';
import {
  isAllowedOrigin,
  sendContactMails,
  validateContactPayload
} from '../../lib/mail';
import type { AppEnv } from '../../types';

const mail = new Hono<AppEnv>();

mail.options('/', (c) => {
  c.header('Access-Control-Allow-Origin', '*');
  c.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  c.header('Access-Control-Allow-Headers', 'Content-Type');
  return c.body(null, 204);
});

mail.post('/', async (c) => {
  c.header('Access-Control-Allow-Origin', '*');

  const origin = c.req.header('Origin');
  const referer = c.req.header('Referer');
  if (!isAllowedOrigin(origin, referer)) {
    return c.json({ status: 'forbidden', error: '許可されていないリクエスト元です。' }, 403);
  }

  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ status: 'invalid', error: 'JSON を解析できません。' }, 400);
  }

  const validated = validateContactPayload(body);
  if (!validated.ok) {
    return c.json({ status: 'invalid', error: validated.error }, 400);
  }

  const apiKey = c.env.RESEND_API_KEY;
  const mailFrom = c.env.MAIL_FROM;
  const mailTo = c.env.MAIL_TO;

  if (!apiKey || !mailFrom || !mailTo) {
    console.error('Missing mail env: RESEND_API_KEY / MAIL_FROM / MAIL_TO');
    return c.json(
      {
        status: 'sendError',
        error:
          'メール設定が不足しています。.dev.vars の RESEND_API_KEY / MAIL_FROM / MAIL_TO を確認してください。'
      },
      500
    );
  }

  try {
    await sendContactMails({
      apiKey,
      from: mailFrom,
      to: mailTo,
      data: validated.data
    });
    return c.json({ status: 'sendOk' });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'メール送信に失敗しました。';
    console.error('Resend send failed:', message);
    return c.json({ status: 'sendError', error: message }, 500);
  }
});

export default mail;
