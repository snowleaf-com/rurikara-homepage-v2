const YOUTUBE_ID = 'DxEjQuFDKKc';

export function VisitGuide() {
  return (
    <section class="sectionNormal homeVisitSection" aria-labelledby="visit-title" data-reveal-section>
      <h2 class="sectionTitle effect" id="visit-title">
        来院案内
        <span class="sectionSubTitle">VISIT GUIDE</span>
      </h2>
      <div class="homeVisitGrid effect">
        <div class="homeVisitDirections">
          <picture>
            <source srcset="/img/enter.webp" type="image/webp" />
            <img
              class="enterImage"
              src="/img/enter.png"
              alt="初めてご来院の方へ。入口は建物北東側にございます。詳しくは動画をご覧ください。"
              width="960"
              height="320"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
        <button
          class="youtubeLite"
          type="button"
          data-youtube-id={YOUTUBE_ID}
          aria-label="入口案内のYouTube動画を再生"
        >
          <img
            class="youtubeLite__thumb"
            src={`https://i.ytimg.com/vi/${YOUTUBE_ID}/hqdefault.jpg`}
            alt=""
            width="480"
            height="360"
            loading="lazy"
            decoding="async"
          />
          <span class="youtubeLite__play" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
