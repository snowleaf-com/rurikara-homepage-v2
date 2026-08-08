import { html, raw } from 'hono/html';
import type { Child } from 'hono/jsx';
import { CRITICAL_CSS } from '../critical-css';
import {
  absoluteUrl,
  buildLocalBusinessJsonLd,
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  DEFAULT_TITLE,
  escapeJsonForHtml,
  OG_IMAGE_PATH,
  SITE_NAME
} from '../lib/seo';
import { Footer } from './footer';
import { Header } from './header';

type LayoutProps = {
  title?: string;
  description?: string;
  /** 正規URL用のパス（例: /about）。省略時はトップ扱い */
  path?: string;
  children: Child;
  scripts?: string[];
  preloadImage?: string;
  hideFooter?: boolean;
  /** true のとき noindex,nofollow */
  noindex?: boolean;
  /** 追加の JSON-LD（BreadcrumbList など） */
  jsonLd?: unknown[];
};

export function Layout({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  children,
  scripts = [],
  preloadImage,
  hideFooter = false,
  noindex = false,
  jsonLd = []
}: LayoutProps) {
  const pageScripts = ['/js/site.js', ...scripts];
  const canonical = absoluteUrl(path);
  const ogImage = absoluteUrl(OG_IMAGE_PATH);
  const robots = noindex ? 'noindex, nofollow' : 'index, follow';
  const structuredData = [buildLocalBusinessJsonLd(), ...jsonLd];
  /** トップのみ CSS 非同期（下位ページは .cardImg FOUC 回避のため同期） */
  const deferStylesheet = Boolean(preloadImage);

  return (
    <>
      {html`<!DOCTYPE html>`}
      <html lang="ja">
        <head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover"
          />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={DEFAULT_KEYWORDS} />
          <meta name="robots" content={robots} />
          <link rel="canonical" href={canonical} />

          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={canonical} />
          <meta property="og:image" content={ogImage} />
          <meta property="og:locale" content="ja_JP" />
          <meta property="og:site_name" content={SITE_NAME} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={ogImage} />

          <link rel="icon" href="/img/favicon.ico" sizes="any" />
          <link rel="icon" href="/img/icon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />
          <link rel="dns-prefetch" href="https://i.ytimg.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin="anonymous"
          />
          {preloadImage
            ? html`<link
                rel="preload"
                as="image"
                href="${preloadImage}"
                type="image/webp"
                imagesrcset="/img/slide1-800.webp 800w, /img/slide1-1280.webp 1280w, /img/slide1.webp 1920w"
                imagesizes="100vw"
                fetchpriority="high"
              />`
            : null}
          <link rel="preload" as="image" href="/img/top_logo.svg" />
          {html`<style>${CRITICAL_CSS}</style>`}
          {deferStylesheet ? (
            <>
              {html`<link
                rel="stylesheet"
                href="/styles.css"
                media="print"
                onload="this.media='all'"
              />`}
              <noscript>
                <link rel="stylesheet" href="/styles.css" />
              </noscript>
            </>
          ) : (
            <link rel="stylesheet" href="/styles.css" />
          )}
          {/* 日本語は unicode-range 分割のため Google Fonts のまま（自前フルは数MB） */}
          {html`<link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@500;700&display=swap"
            media="print"
            onload="this.media='all'"
          />`}
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@500;700&display=swap"
            />
          </noscript>
          {structuredData.map((data) =>
            html`<script type="application/ld+json">${raw(
              escapeJsonForHtml(data)
            )}</script>`
          )}
        </head>
        <body>
          <Header />
          {children}
          {hideFooter ? null : <Footer />}
          {pageScripts.map((src) => (
            <script key={src} src={src} defer />
          ))}
        </body>
      </html>
    </>
  );
}
