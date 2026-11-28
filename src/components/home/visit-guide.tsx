const YOUTUBE_ID = 'DxEjQuFDKKc';

export function VisitGuide() {
  return (
    <section class="sectionNormal homeVisitSection" aria-labelledby="visit-title" data-reveal-section>
      <h2 class="sectionTitle effect" id="visit-title">
        来院案内
        <span class="sectionSubTitle">VISIT GUIDE</span>
      </h2>
      <div class="homeVisitPanel effect">
        <div class="homeVisitIntro">
          <p class="homeVisitEyebrow">はじめてご来院の方へ</p>
          <h3>入口は建物の<span>北東側</span>にございます</h3>
          <p>駐車場と入口の位置を案内図でご確認いただけます。<br class="brPcOnly" />入口までの道順は、動画でもご案内しています。</p>
        </div>
        <div class="homeVisitGrid">
          <figure class="homeVisitDirections">
            <svg class="homeVisitMap" viewBox="0 0 420 300" role="img" aria-labelledby="visit-map-title visit-map-desc">
              <title id="visit-map-title">駐車場と建物北東側の入口の案内図</title>
              <desc id="visit-map-desc">建物の左側と下側に道路があります。駐車場は建物の上側にあり、入口は建物右上の北東側です。</desc>
              <rect width="420" height="300" rx="16" fill="#fff" />
              <path d="M62 0V264M0 264H420" fill="none" stroke="#e0e7e9" stroke-width="38" />
              <path d="M62 0V264M0 264H420" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="8 9" />
              <rect x="121" y="86" width="202" height="135" fill="none" stroke="#bacbd0" stroke-width="2" />
              <text x="222" y="150" text-anchor="middle" fill="#423332" font-size="19" font-weight="700">るりから</text>
              <text x="222" y="178" text-anchor="middle" fill="#586a70" font-size="14">鍼灸・接骨院</text>
              <rect x="122" y="17" width="201" height="45" rx="8" fill="#ffeccd" />
              <text x="222" y="46" text-anchor="middle" fill="#60431d" font-size="18" font-weight="700">駐車場</text>
              <path d="M264 71H352V100H327M122 239H352V123H327" fill="none" stroke="#d76c28" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M333 94L326 100L333 106M333 117L326 123L333 129" fill="none" stroke="#d76c28" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M323 96V128" stroke="#f7b133" stroke-width="7" />
              <rect x="258" y="187" width="124" height="35" rx="17" fill="#fff2dd" />
              <text x="320" y="210" text-anchor="middle" fill="#854419" font-size="15" font-weight="700">入口（北東側）</text>
            </svg>
            <figcaption>駐車場・入口の案内図</figcaption>
          </figure>
          <div class="homeVisitVideo">
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
            <p class="homeVisitVideoCaption">入口までの道順を動画で見る</p>
          </div>
        </div>
      </div>
    </section>
  );
}
