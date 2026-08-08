const INSTAGRAM_PROFILE = 'https://www.instagram.com/raoc.0105/';

type InstaFeedProps = {
  /** Graph API 取得件数（トップは2、一覧は多め） */
  limit?: number;
  /** 将来の一覧ページなど、もっと見る導線を出すか */
  showMoreLink?: boolean;
  moreHref?: string;
};

export function InstaFeed({
  limit = 2,
  showMoreLink = false,
  moreHref = '/news'
}: InstaFeedProps) {
  return (
    <div
      class="insta"
      data-insta-feed
      data-limit={String(limit)}
      data-profile-url={INSTAGRAM_PROFILE}
      data-profile-handle="raoc.0105"
    >
      <div class="loadingElement" data-insta-loading>
        <div class="loader" aria-label="読み込み中" />
      </div>
      <p class="instaStatus" data-insta-status hidden></p>
      <div data-insta-results hidden></div>
      {showMoreLink ? (
        <div class="btn instaMoreBtn" data-insta-more hidden>
          <a href={moreHref}>
            <span class="arrow">›</span>
            もっと見る
          </a>
        </div>
      ) : null}
    </div>
  );
}
