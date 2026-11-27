const YOUTUBE_CHANNEL =
  'https://www.youtube.com/@%E3%82%8B%E3%82%8A%E3%81%8B%E3%82%89%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB';

export function Social() {
  return (
    <>
    <section class="sectionBorderPink" aria-labelledby="social-title" data-reveal-section>
      <h2 class="sectionTitleWithBorder effect" id="social-title">
        動画・SNS
        <span class="sectionSubTitle">SOCIAL</span>
      </h2>
      <div class="homeSocialBanner effect">
          <a href={YOUTUBE_CHANNEL} target="_blank" rel="noreferrer">
            <picture>
              <source srcset="/img/youtube_rurikara.webp" type="image/webp" />
              <img
                class="youtubeBanner"
                src="/img/youtube_rurikara.png"
                alt="るりから鍼灸・接骨院 YouTubeチャンネル"
                width="960"
                height="320"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </a>
      </div>
    </section>
    <div class="sectionBorderPinkBottom" aria-hidden="true" />
    </>
  );
}
