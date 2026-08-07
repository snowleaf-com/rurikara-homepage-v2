import { Hono } from 'hono';
import { Layout } from './components/layout';
import { getContentPage } from './data/content-pages';
import mail from './routes/api/mail';
import { AboutPage } from './routes/about';
import { AccidentPage } from './routes/accident';
import { ContactCompletePage } from './routes/contact-complete';
import { ContactErrorPage } from './routes/contact-error';
import { ContactPage } from './routes/contact';
import { ContentPage } from './routes/content';
import { ContentDetailPage } from './routes/content-detail';
import { FaqPage } from './routes/faq';
import { HomePage } from './routes/home';
import { OwnExpensePage } from './routes/own-expense';
import type { AppEnv } from './types';

const app = new Hono<AppEnv>();

app.use('*', async (c, next) => {
  await next();
  c.header('X-Content-Type-Options', 'nosniff');
  c.header('Referrer-Policy', 'strict-origin-when-cross-origin');
  c.header('X-Frame-Options', 'SAMEORIGIN');
  const path = new URL(c.req.url).pathname;
  if (path.startsWith('/api/')) {
    c.header('Cache-Control', 'no-store');
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

app.route('/api/mail', mail);

app.get('/', (c) => {
  return c.html(
    <Layout preloadImage="/img/slide1.webp">
      <HomePage />
    </Layout>
  );
});

app.get('/about', (c) => {
  return c.html(
    <Layout title="当院について｜るりから鍼灸・接骨院" hideFooter>
      <AboutPage />
    </Layout>
  );
});

app.get('/faq', (c) => {
  return c.html(
    <Layout title="よくある質問｜るりから鍼灸・接骨院">
      <FaqPage />
    </Layout>
  );
});

app.get('/content', (c) => {
  return c.html(
    <Layout title="施術について｜るりから鍼灸・接骨院">
      <ContentPage />
    </Layout>
  );
});

app.get('/content/accident', (c) => {
  return c.html(
    <Layout title="交通事故・労災｜るりから鍼灸・接骨院">
      <AccidentPage />
    </Layout>
  );
});

app.get('/content/own-expense', (c) => {
  return c.html(
    <Layout title="自費施術について｜るりから鍼灸・接骨院">
      <OwnExpensePage />
    </Layout>
  );
});

app.get('/content/:slug', (c) => {
  const page = getContentPage(c.req.param('slug'));
  if (!page) return c.notFound();
  return c.html(
    <Layout title={page.pageTitle}>
      <ContentDetailPage page={page} />
    </Layout>
  );
});

app.get('/contact', (c) => {
  return c.html(
    <Layout title="お問い合わせ｜るりから鍼灸・接骨院" hideFooter>
      <ContactPage />
    </Layout>
  );
});

app.get('/contact/complete', (c) => {
  return c.html(
    <Layout
      title="送信完了｜るりから鍼灸・接骨院"
      description="お問い合わせの送信が完了しました。"
      hideFooter
    >
      <ContactCompletePage />
    </Layout>
  );
});

app.get('/contact/error', (c) => {
  return c.html(
    <Layout
      title="送信エラー｜るりから鍼灸・接骨院"
      description="お問い合わせの送信に失敗しました。"
      hideFooter
    >
      <ContactErrorPage />
    </Layout>
  );
});

app.notFound((c) => {
  return c.html(
    <Layout title="404 | るりから鍼灸・接骨院">
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
