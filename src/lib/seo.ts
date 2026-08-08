export const SITE_ORIGIN = 'https://ruri-kara.com';
export const SITE_NAME = 'るりから鍼灸・接骨院';

export const DEFAULT_TITLE = `${SITE_NAME}｜沼津市井出の鍼灸接骨院`;
export const DEFAULT_DESCRIPTION =
  '静岡県沼津市井出にある、るりから鍼灸・接骨院です。幅広い施術を通じて痛みを改善し、あなたの健康をサポートします。';

export const DEFAULT_KEYWORDS =
  '沼津市, 接骨院, 鍼灸院, 静岡県, 骨折, 脱臼, ねんざ, 捻挫, 肩こり, 腰痛, 膝痛, 鍼灸治療';

export const OG_IMAGE_PATH = '/img/yuai_ogp.jpg';

/** 公開インデックス対象のパス（sitemap用） */
export const INDEXABLE_PATHS = [
  '/',
  '/about',
  '/faq',
  '/news',
  '/content',
  '/content/shoulder',
  '/content/lumbar',
  '/content/knees-ankles',
  '/content/sports',
  '/content/accident',
  '/content/own-expense',
  '/contact'
] as const;

export function absoluteUrl(path = '/') {
  if (!path || path === '/') return `${SITE_ORIGIN}/`;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}

export function escapeJsonForHtml(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

export function buildLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `${SITE_ORIGIN}/#clinic`,
    name: SITE_NAME,
    url: `${SITE_ORIGIN}/`,
    image: absoluteUrl(OG_IMAGE_PATH),
    telephone: '+81-90-4215-9695',
    address: {
      '@type': 'PostalAddress',
      postalCode: '410-0319',
      addressRegion: '静岡県',
      addressLocality: '沼津市',
      streetAddress: '井出28-3',
      addressCountry: 'JP'
    },
    geo: {
      '@type': 'GeoCoordinates',
      // フッター Google Maps 埋め込みの中心座標
      latitude: 35.141943672760384,
      longitude: 138.79881067643745
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
        opens: '08:00',
        closes: '11:30'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
        opens: '14:30',
        closes: '19:30'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Thursday',
        opens: '08:00',
        closes: '11:30'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '12:30'
      }
    ],
    sameAs: [
      'https://www.instagram.com/raoc.0601/',
      'https://www.youtube.com/@%E3%82%8B%E3%82%8A%E3%81%8B%E3%82%89%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB'
    ]
  };
}

export function buildBreadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: absoluteUrl('/')
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: absoluteUrl(item.path)
      }))
    ]
  };
}

function stripHtml(value: string) {
  return value.replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, '').trim();
}

export function buildFaqJsonLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: stripHtml(item.a)
      }
    }))
  };
}

export function buildSitemapXml(lastmod = new Date()) {
  const stamp = lastmod.toISOString().slice(0, 10);
  const urls = INDEXABLE_PATHS.map((path) => {
    const loc = absoluteUrl(path);
    const priority =
      path === '/' ? '1.0' : path.startsWith('/content/') ? '0.8' : '0.7';
    const changefreq = path === '/' || path === '/news' ? 'weekly' : 'monthly';
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${stamp}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function buildRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${absoluteUrl('/sitemap.xml')}
`;
}
