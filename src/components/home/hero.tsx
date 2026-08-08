/** 初期HTMLは1枚のみ。2枚目以降は site.js が idle 後に差し込む */
const FIRST_SLIDE = {
  sources: [
    { srcset: '/img/slide1-800.webp', w: 800 },
    { srcset: '/img/slide1-1280.webp', w: 1280 },
    { srcset: '/img/slide1.webp', w: 1920 }
  ],
  jpg: '/img/slide1.jpg',
  w: 1920,
  h: 1280
} as const;

function slideSrcSet(sources: readonly { srcset: string; w: number }[]) {
  return sources.map((s) => `${s.srcset} ${s.w}w`).join(', ');
}

export function Hero() {
  return (
    <>
      <div class="background" id="hero-slides" aria-hidden="true">
        <div class="swiper" id="hero-swiper">
          <div class="slide is-active" data-slide>
            <picture>
              <source
                type="image/webp"
                srcset={slideSrcSet(FIRST_SLIDE.sources)}
                sizes="100vw"
              />
              <img
                src={FIRST_SLIDE.jpg}
                alt=""
                width={FIRST_SLIDE.w}
                height={FIRST_SLIDE.h}
                decoding="async"
                fetchpriority="high"
              />
            </picture>
          </div>
        </div>
      </div>
      <div class="indexTop" id="top">
        <div class="topCatch">
          <h2 class="heading">
            幅広い施術で
            <br />
            つらさに寄り添う
          </h2>
          <p class="text">
            地域に根ざした鍼灸接骨院として、
            <br />
            患者様ひとりひとりに合わせた
            <br />
            幅広い施術で寛解を目指します。
          </p>
        </div>
        <div class="scrolldown scrollHidden" id="scroll-down">
          <span>scroll</span>
        </div>
      </div>
    </>
  );
}
