import { html } from 'hono/html';
import type { Child } from 'hono/jsx';
import { CRITICAL_CSS } from '../critical-css';
import { Footer } from './footer';
import { Header } from './header';

type LayoutProps = {
  title?: string;
  description?: string;
  children: Child;
  scripts?: string[];
  preloadImage?: string;
  hideFooter?: boolean;
};

const DEFAULT_TITLE = 'るりから鍼灸・接骨院｜沼津市井出の鍼灸接骨院';
const DEFAULT_DESCRIPTION =
  '静岡県沼津市井出にある、るりから鍼灸・接骨院です。幅広い施術を通じて痛みを改善し、あなたの健康をサポートします。';

export function Layout({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  children,
  scripts = [],
  preloadImage,
  hideFooter = false
}: LayoutProps) {
  const pageScripts = ['/js/site.js', ...scripts];

  return (
    <>
      {html`<!DOCTYPE html>`}
      <html lang="ja">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta
            name="keywords"
            content="沼津市, 接骨院, 鍼灸院, 静岡県, 骨折, 脱臼, ねんざ, 捻挫, 肩こり, 腰痛, 膝痛, 鍼灸治療"
          />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ruri-kara.com/" />
          <meta
            property="og:image"
            content="https://ruri-kara.com/img/yuai_ogp.jpg"
          />
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
          {/*
            styles.css を非同期(media=print→all)にすると、critical に無い
            .cardImg 等が後から当たり「大きい→通常」のFOUCが起きるため同期読込にする
          */}
          <link rel="stylesheet" href="/styles.css" />
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
