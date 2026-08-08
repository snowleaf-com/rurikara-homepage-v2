import { Hono } from 'hono';
import { Layout } from './components/layout';
import { getContentPage } from './data/content-pages';
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildRobotsTxt,
  buildSitemapXml,
  DEFAULT_DESCRIPTION
} from './lib/seo';
import insta from './routes/api/insta';
import mail from './routes/api/mail';
import { AboutPage } from './routes/about';
import { AccidentPage } from './routes/accident';
import { ContactCompletePage } from './routes/contact-complete';
import { ContactErrorPage } from './routes/contact-error';
import { ContactPage } from './routes/contact';
import { ContentPage } from './routes/content';
import { ContentDetailPage } from './routes/content-detail';
import { FAQ_ITEMS, FaqPage } from './routes/faq';
import { HomePage } from './routes/home';
import { NewsPage } from './routes/news';
import { OwnExpensePage } from './routes/own-expense';
import type { AppEnv } from './types';

const app = new Hono<AppEnv>();

app.use('*', async (c, next) => {
  const url = new URL(c.req.url);
  // 本番ホストの www を apex へ正規化（SEOの重複回避）
  if (url.hostname === 'www.ruri-kara.com') {
    url.hostname = 'ruri-kara.com';
    url.protocol = 'https:';
    return c.redirect(url.toString(), 301);
  }

  await next();
  c.header('X-Content-Type-Options', 'nosniff');
  c.header('Referrer-Policy', 'strict-origin-when-cross-origin');
  c.header('X-Frame-Options', 'SAMEORIGIN');
  const path = url.pathname;
  if (path.startsWith('/api/')) {
    // /api/insta はルート側で短時間キャッシュを付与する
    if (!path.startsWith('/api/insta')) {
      c.header('Cache-Control', 'no-store');
    }
  } else if (
    path === '/' ||
    path.startsWith('/contact') ||
    !path.includes('.')
  ) {
    c.header('Cache-Control', 'public, max-age=0, must-revalidate');
  }
});

app.get('/api/health', (c) => {
  return c.json({
    ok: true,
    service: 'rurikara-homepage-v2',
    timestamp: new Date().toISOString()
  });
});

app.get('/robots.txt', (c) => {
  c.header('Content-Type', 'text/plain; charset=utf-8');
  c.header('Cache-Control', 'public, max-age=3600');
  return c.body(buildRobotsTxt());
});

app.get('/sitemap.xml', (c) => {
  c.header('Content-Type', 'application/xml; charset=utf-8');
  c.header('Cache-Control', 'public, max-age=3600');
  return c.body(buildSitemapXml());
});

app.route('/api/mail', mail);
app.route('/api/insta', insta);

app.get('/', (c) => {
  return c.html(
    <Layout
      path="/"
      title={`るりから鍼灸・接骨院｜沼津市井出の鍼灸接骨院`}
      description={DEFAULT_DESCRIPTION}
      preloadImage="/img/slide1-800.webp"
    >
      <HomePage />
    </Layout>
  );
});

app.get('/news', (c) => {
  return c.html(
    <Layout
      path="/news"
      title="お知らせ｜るりから鍼灸・接骨院"
      description="沼津市井出のるりから鍼灸・接骨院からのお知らせ。Instagramの最新投稿や休診情報をご案内します。"
      jsonLd={[
        buildBreadcrumbJsonLd([{ name: 'お知らせ', path: '/news' }])
      ]}
    >
      <NewsPage />
    </Layout>
  );
});

app.get('/about', (c) => {
  return c.html(
    <Layout
      path="/about"
      title="当院について｜るりから鍼灸・接骨院"
      description="沼津市井出のるりから鍼灸・接骨院の院概要。住所・受付時間・電話番号・駐車場など、初めての方へ向けた基本情報です。"
      hideFooter
      jsonLd={[
        buildBreadcrumbJsonLd([{ name: '当院について', path: '/about' }])
      ]}
    >
      <AboutPage />
    </Layout>
  );
});

app.get('/faq', (c) => {
  return c.html(
    <Layout
      path="/faq"
      title="よくある質問｜るりから鍼灸・接骨院"
      description="るりから鍼灸・接骨院のよくある質問。初めての来院、保険適用、予約、施術内容など患者様から多い疑問にお答えします。"
      jsonLd={[
        buildBreadcrumbJsonLd([{ name: 'よくある質問', path: '/faq' }]),
        buildFaqJsonLd(FAQ_ITEMS)
      ]}
    >
      <FaqPage />
    </Layout>
  );
});

app.get('/content', (c) => {
  return c.html(
    <Layout
      path="/content"
      title="施術について｜るりから鍼灸・接骨院"
      description="るりから鍼灸・接骨院の施術案内。肩こり・腰痛・ひざの痛み・スポーツ障害・交通事故・自費施術など症状別の対応をご紹介します。"
      jsonLd={[
        buildBreadcrumbJsonLd([{ name: '施術について', path: '/content' }])
      ]}
    >
      <ContentPage />
    </Layout>
  );
});

app.get('/content/accident', (c) => {
  return c.html(
    <Layout
      path="/content/accident"
      title="交通事故・労災｜るりから鍼灸・接骨院"
      description="沼津市井出のるりから鍼灸・接骨院。交通事故・労災によるケガの施術と、受診までの流れをご案内します。"
      jsonLd={[
        buildBreadcrumbJsonLd([
          { name: '施術について', path: '/content' },
          { name: '交通事故・労災', path: '/content/accident' }
        ])
      ]}
    >
      <AccidentPage />
    </Layout>
  );
});

app.get('/content/own-expense', (c) => {
  return c.html(
    <Layout
      path="/content/own-expense"
      title="自費施術について｜るりから鍼灸・接骨院"
      description="るりから鍼灸・接骨院の自費施術のご案内。保険適用外のケアや、お身体の状態に合わせた施術についてご紹介します。"
      jsonLd={[
        buildBreadcrumbJsonLd([
          { name: '施術について', path: '/content' },
          { name: '自費施術について', path: '/content/own-expense' }
        ])
      ]}
    >
      <OwnExpensePage />
    </Layout>
  );
});

app.get('/content/:slug', (c) => {
  const page = getContentPage(c.req.param('slug'));
  if (!page) return c.notFound();
  return c.html(
    <Layout
      path={`/content/${page.slug}`}
      title={page.pageTitle}
      description={page.description}
      jsonLd={[
        buildBreadcrumbJsonLd(
          page.breadcrumbs.map((crumb) => ({
            name: crumb.name,
            path: crumb.url
          }))
        )
      ]}
    >
      <ContentDetailPage page={page} />
    </Layout>
  );
});

app.get('/contact', (c) => {
  return c.html(
    <Layout
      path="/contact"
      title="お問い合わせ｜るりから鍼灸・接骨院"
      description="るりから鍼灸・接骨院へのお問い合わせフォーム。ご質問・ご相談はこちらからどうぞ。お急ぎの場合はお電話でも受け付けています。"
      hideFooter
      jsonLd={[
        buildBreadcrumbJsonLd([{ name: 'お問い合わせ', path: '/contact' }])
      ]}
    >
      <ContactPage />
    </Layout>
  );
});

app.get('/contact/complete', (c) => {
  return c.html(
    <Layout
      path="/contact/complete"
      title="送信完了｜るりから鍼灸・接骨院"
      description="お問い合わせの送信が完了しました。"
      hideFooter
      noindex
    >
      <ContactCompletePage />
    </Layout>
  );
});

app.get('/contact/error', (c) => {
  return c.html(
    <Layout
      path="/contact/error"
      title="送信エラー｜るりから鍼灸・接骨院"
      description="お問い合わせの送信に失敗しました。"
      hideFooter
      noindex
    >
      <ContactErrorPage />
    </Layout>
  );
});

app.notFound((c) => {
  return c.html(
    <Layout
      path="/404"
      title="404 | るりから鍼灸・接骨院"
      description="お探しのページは見つかりませんでした。"
      noindex
    >
      <main class="contactPage" id="top">
        <div class="sectionNormal" style="text-align:center;padding-bottom:80px">
          <h1 class="sectionTitle">ページが見つかりません</h1>
          <div class="btn">
            <a href="/">
              <span class="arrow">›</span>
              トップへ戻る
            </a>
          </div>
        </div>
      </main>
    </Layout>,
    404
  );
});

export default app;
