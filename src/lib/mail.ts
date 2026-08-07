export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

const EMAIL_RE =
  /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;

const ALLOWED_ORIGINS = [
  'https://ruri-kara.com',
  'https://www.ruri-kara.com'
];

function isLocalDevOrigin(value: string) {
  try {
    const url = new URL(value);
    return url.hostname === 'localhost' || url.hostname === '127.0.0.1';
  } catch {
    return false;
  }
}

export function isAllowedOrigin(origin: string | undefined, referer: string | undefined) {
  const candidates = [origin, referer].filter(Boolean) as string[];
  return candidates.some(
    (value) =>
      isLocalDevOrigin(value) ||
      ALLOWED_ORIGINS.some((allowed) => value === allowed || value.startsWith(`${allowed}/`))
  );
}

export function validateContactPayload(input: unknown): {
  ok: true;
  data: ContactPayload;
} | {
  ok: false;
  error: string;
} {
  if (!input || typeof input !== 'object') {
    return { ok: false, error: '不正なリクエストです。' };
  }

  const body = input as Record<string, unknown>;
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!name) return { ok: false, error: 'お名前を入力してください。' };
  if (name.length > 20) return { ok: false, error: 'お名前は20文字以下で入力してください。' };
  if (!email) return { ok: false, error: 'メールアドレスを入力してください。' };
  if (email.length > 50) {
    return { ok: false, error: 'メールアドレスは50文字以下で入力してください。' };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: '正しいメールアドレスを入力してください。' };
  }
  if (!message) return { ok: false, error: 'メッセージを入力してください。' };
  if (message.length > 1000) {
    return { ok: false, error: 'メッセージは1000文字以下で入力してください。' };
  }

  return { ok: true, data: { name, email, message } };
}

async function sendResendEmail(params: {
  apiKey: string;
  from: string;
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
}) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${params.apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: params.from,
      to: [params.to],
      subject: params.subject,
      text: params.text,
      ...(params.replyTo ? { reply_to: params.replyTo } : {})
    })
  });

  if (!response.ok) {
    let detail = await response.text();
    try {
      const parsed = JSON.parse(detail) as { message?: string };
      if (parsed.message) detail = parsed.message;
    } catch {
      // keep raw text
    }
    throw new Error(detail);
  }
}

export async function sendContactMails(params: {
  apiKey: string;
  from: string;
  to: string;
  data: ContactPayload;
}) {
  const { name, email, message } = params.data;

  await sendResendEmail({
    apiKey: params.apiKey,
    from: params.from,
    to: params.to,
    replyTo: email,
    subject: 'ホームページよりお問合せがありました',
    text: [
      'ホームページより以下のお問い合わせがありました',
      '',
      `お名前：${name}`,
      `メールアドレス：${email}`,
      '',
      message
    ].join('\n')
  });

  await sendResendEmail({
    apiKey: params.apiKey,
    from: params.from,
    to: email,
    subject: 'お問い合わせありがとうございました',
    text: [
      `${name} 様`,
      'お問い合わせいただきありがとうございました。',
      '以下の内容でお問い合わせを受け付けました。',
      '',
      `お名前：${name}`,
      `メールアドレス：${email}`,
      '',
      message,
      '追ってご連絡いたします。'
    ].join('\n')
  });
}
