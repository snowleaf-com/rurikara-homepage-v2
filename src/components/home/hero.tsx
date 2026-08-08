const SLIDE_META = [
  {
    sources: [
      { srcset: '/img/slide1-800.webp', w: 800 },
      { srcset: '/img/slide1-1280.webp', w: 1280 },
      { srcset: '/img/slide1.webp', w: 1920 }
    ],
    jpg: '/img/slide1.jpg',
    w: 1920,
    h: 1280
  },
  {
    sources: [
      { srcset: '/img/slide2-800.webp', w: 800 },
      { srcset: '/img/slide2-1280.webp', w: 1280 },
      { srcset: '/img/slide2.webp', w: 1920 }
    ],
    jpg: '/img/slide2.jpg',
    w: 1920,
    h: 1341
  },
  {
    sources: [
      { srcset: '/img/slide3-800.webp', w: 800 },
      { srcset: '/img/slide3-1280.webp', w: 1280 },
      { srcset: '/img/slide3.webp', w: 1920 }
    ],
    jpg: '/img/slide3.jpg',
    w: 1920,
    h: 1075
  }
] as const;

function slideSrcSet(sources: readonly { srcset: string; w: number }[]) {
  return sources.map((s) => `${s.srcset} ${s.w}w`).join(', ');
}

export function Hero() {
  return (
    <>
      <div class="background" id="hero-slides" aria-hidden="true">
        <div class="swiper" id="hero-swiper">
          {SLIDE_META.map((slide, index) => (
            <div
              class={index === 0 ? 'slide is-active' : 'slide'}
              data-slide
              key={slide.jpg}
            >
              <picture>
                <source
                  type="image/webp"
                  srcset={slideSrcSet(slide.sources)}
                  sizes="100vw"
                />
                <img
                  src={slide.jpg}
                  alt=""
                  width={slide.w}
                  height={slide.h}
                  decoding="async"
                  fetchpriority={index === 0 ? 'high' : 'low'}
                  loading={index === 0 ? undefined : 'lazy'}
                />
              </picture>
            </div>
          ))}
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
