# rurikara-homepage-v2

Cloudflare 向けリプレイス。

旧構成（Next.js + PHP）を、Hono + Cloudflare Workers に置き換えます。

## 開発

```bash
npm install
cp .dev.vars.example .dev.vars
npm run dev
```

- トップ: http://localhost:8787/
- Health: http://localhost:8787/api/health

## デプロイ

```bash
npm run deploy
```

Secrets は Cloudflare Dashboard または `wrangler secret put` で設定してください。
