export type InstagramMediaItem = {
  media: string;
  permalink: string;
  postTime: string;
  caption: string;
};

export type InstagramFeed = {
  name: string;
  media: InstagramMediaItem[];
};

type GraphMediaItem = {
  caption?: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink?: string;
  media_type?: string;
  timestamp?: string;
};

type GraphUserResponse = {
  name?: string;
  media?: { data?: GraphMediaItem[] };
  error?: { message?: string; type?: string; code?: number };
};

export const INSTAGRAM_DEFAULT_LIMIT = 2;
export const INSTAGRAM_MAX_LIMIT = 24;
const GRAPH_VERSION = 'v21.0';

export function clampInstagramLimit(value: unknown, fallback = INSTAGRAM_DEFAULT_LIMIT) {
  const n = typeof value === 'number' ? value : Number.parseInt(String(value ?? ''), 10);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(INSTAGRAM_MAX_LIMIT, Math.max(1, Math.floor(n)));
}

function formatPostTime(timestamp: string | undefined) {
  if (!timestamp) return '';
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) return '';
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}/${m}/${d}`;
}

function pickMediaUrl(item: GraphMediaItem) {
  // VIDEO は media_url が動画になることがあるのでサムネ優先
  if (item.media_type === 'VIDEO' && item.thumbnail_url) {
    return item.thumbnail_url;
  }
  return item.media_url || item.thumbnail_url || '';
}

export async function fetchInstagramFeed(options: {
  accessToken: string;
  userId: string;
  limit?: number;
}): Promise<
  | { ok: true; data: InstagramFeed }
  | { ok: false; status: number; error: string; details?: unknown }
> {
  const limit = clampInstagramLimit(options.limit ?? INSTAGRAM_DEFAULT_LIMIT);
  const fields = [
    'name',
    `media.limit(${limit}){caption,media_url,thumbnail_url,permalink,media_type,timestamp}`
  ].join(',');
  const url = new URL(
    `https://graph.facebook.com/${GRAPH_VERSION}/${options.userId}`
  );
  url.searchParams.set('fields', fields);
  url.searchParams.set('access_token', options.accessToken);

  let response: Response;
  try {
    response = await fetch(url.toString(), {
      headers: { Accept: 'application/json' }
    });
  } catch {
    return {
      ok: false,
      status: 502,
      error: 'Instagram API への接続に失敗しました。'
    };
  }

  let payload: GraphUserResponse;
  try {
    payload = (await response.json()) as GraphUserResponse;
  } catch {
    return {
      ok: false,
      status: 502,
      error: 'Instagram API の応答を解析できませんでした。'
    };
  }

  if (!response.ok || payload.error) {
    return {
      ok: false,
      status: 502,
      error: 'Instagram API error',
      details: payload.error ?? { status: response.status }
    };
  }

  const items = payload.media?.data;
  if (!Array.isArray(items)) {
    return {
      ok: false,
      status: 502,
      error: 'Invalid media data format',
      details: payload
    };
  }

  return {
    ok: true,
    data: {
      name: payload.name ?? 'Unknown',
      media: items.map((item) => ({
        media: pickMediaUrl(item),
        permalink: item.permalink ?? '',
        postTime: formatPostTime(item.timestamp),
        caption: item.caption ?? ''
      }))
    }
  };
}
