import { InstaFeed } from './insta-feed';

export function News() {
  return (
    <div class="sectionNormal" data-reveal-section>
      <h2 class="sectionTitle effect">
        お知らせ
        <span class="sectionSubTitle">NEWS</span>
      </h2>
      <div class="effect d_08">
        <InstaFeed limit={2} showMoreLink moreHref="/news" />
      </div>
    </div>
  );
}
