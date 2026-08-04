import { html } from 'hono/html';
import type { Child } from 'hono/jsx';

type LayoutProps = {
  title?: string;
  description?: string;
  children: Child;
};

export function Layout({
  title = 'るりから鍼灸・接骨院',
  description = '沼津市井出の鍼灸・接骨院「るりから」の公式サイトです。',
  children
}: LayoutProps) {
  return (
    <>
      {html`<!DOCTYPE html>`}
      <html lang="ja">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/styles.css" />
        </head>
        <body class="font-sans antialiased">
          <main>{children}</main>
        </body>
      </html>
    </>
  );
}
