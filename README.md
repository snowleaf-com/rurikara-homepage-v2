# rurikara-homepage-v2

るりから鍼灸・接骨院（https://ruri-kara.com）の Cloudflare 向けリプレイス。

旧構成（Next.js + PHP）を、Hono + Cloudflare Workers に置き換えます。

## 開発

```bash
npm install
cp .dev.vars.example .dev.vars
# .dev.vars を編集してから起動
npm run dev
```

- トップ: http://localhost:8787/
- お問い合わせ: http://localhost:8787/contact
- Health: http://localhost:8787/api/health
- メール API: `POST /api/mail`

## メール（Resend）

| 変数 | 用途 |
|------|------|
| `RESEND_API_KEY` | Resend API キー |
| `MAIL_FROM` | 差出人（**必ずダブルクォートで囲む**） |
| `MAIL_TO` | 管理者への通知先 |

```env
MAIL_FROM="るりから鍼灸・接骨院 <ruri-kara@ruri-kara.com>"
```

**重要:** `ruri-kara.com` を [Resend Domains](https://resend.com/domains) で DNS 認証しないと送信できません。
未認証のまま試す場合は、一時的に次を使えます（宛先は Resend 登録メールのみ）。

```env
MAIL_FROM="るりから鍼灸・接骨院 <beth.t@example.com>"
```

失敗時はお問い合わせ画面に Resend のエラーメッセージが表示されます。

## デプロイ

```bash
npm run deploy
```

Secrets は Cloudflare Dashboard または `wrangler secret put` で設定してください。

## パフォーマンス

画像 WebP 化・クリティカル CSS インライン・遅延フォント・YouTube/Map ファサード・アセット minify/キャッシュを入れています。
ローカル Lighthouse（参考）: Desktop **100** / Mobile **94**（Slow 4G シミュレーション）。
