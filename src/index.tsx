import { Hono } from 'hono';
import { Layout } from './components/layout';
import { HomePage } from './routes/home';
import type { AppEnv } from './types';

const app = new Hono<AppEnv>();

app.get('/api/health', (c) => {
  return c.json({
    ok: true,
    service: 'rurikara-homepage-v2',
    timestamp: new Date().toISOString()
  });
});

app.get('/', (c) => {
  return c.html(
    <Layout>
      <HomePage />
    </Layout>
  );
});

app.notFound((c) => {
  return c.html(
    <Layout title="404 | るりから鍼灸・接骨院">
      <section class="mx-auto max-w-3xl px-6 py-24">
        <h1 class="text-2xl font-bold text-brand">ページが見つかりません</h1>
        <p class="mt-4">
          <a class="text-accent underline" href="/">
            トップへ戻る
          </a>
        </p>
      </section>
    </Layout>,
    404
  );
});

export default app;
