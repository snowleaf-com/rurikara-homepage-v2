import { Hono } from 'hono';
import {
  clampInstagramLimit,
  fetchInstagramFeed,
  INSTAGRAM_DEFAULT_LIMIT
} from '../../lib/instagram';
import type { AppEnv } from '../../types';

const insta = new Hono<AppEnv>();

insta.options('/', (c) => {
  c.header('Access-Control-Allow-Origin', '*');
  c.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  c.header('Access-Control-Allow-Headers', 'Content-Type');
  return c.body(null, 204);
});

insta.get('/', async (c) => {
  // 公開投稿の読み取りのみ。トークンはサーバ側に閉じるので Origin 制限はしない
  // （LAN IP やプレビュー URL からのローカル確認も通す）
  c.header('Access-Control-Allow-Origin', '*');

  const accessToken = c.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = c.env.INSTAGRAM_USER_ID;
  if (!accessToken || !userId) {
    return c.json(
      {
        error: 'Instagram API not configured',
        detail:
          '.dev.vars に INSTAGRAM_ACCESS_TOKEN と INSTAGRAM_USER_ID を設定してください。'
      },
      500
    );
  }

  const limit = clampInstagramLimit(
    c.req.query('limit'),
    INSTAGRAM_DEFAULT_LIMIT
  );
  const result = await fetchInstagramFeed({ accessToken, userId, limit });
  if (!result.ok) {
    c.header('Cache-Control', 'no-store');
    return c.json(
      {
        error: result.error,
        ...(result.details ? { details: result.details } : {})
      },
      result.status as 502
    );
  }

  // Graph API のレート制限緩和のため短時間キャッシュ
  c.header('Cache-Control', 'public, max-age=300, stale-while-revalidate=60');
  return c.json(result.data);
});

export default insta;
