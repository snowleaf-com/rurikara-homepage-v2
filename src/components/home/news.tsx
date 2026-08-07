const YOUTUBE_CHANNEL =
  'https://www.youtube.com/@%E3%82%8B%E3%82%8A%E3%81%8B%E3%82%89%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB';
const YOUTUBE_ID = 'DxEjQuFDKKc';

export function News() {
  return (
    <div class="sectionNormal" data-reveal-section>
      <h2 class="sectionTitle effect">
        お知らせ
        <span class="sectionSubTitle">NEWS</span>
      </h2>
      <div class="insta effect d_08">
        <p style="text-align:center;margin-bottom:1.5em">
          Instagram 投稿の表示は今後接続予定です。
          <a
            href="https://www.instagram.com/yaoc.0601/"
            target="_blank"
            rel="noreferrer"
          >
            @yaoc.0601
          </a>
        </p>
      </div>
      <hr class="youtubeDivider" />
      <div class="youtubeSection effect d_10">
        <div class="youtubeBannerBlock youtubeBannerLink">
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
          aria-label="YouTube動画を再生"
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
    </div>
  );
}
