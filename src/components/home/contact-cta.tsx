export function ContactCta() {
  return (
    <>
      <div class="sectionBorderToContactForm" />
      <div class="contactWithFooter">
        <div class="sectionNormal" data-reveal-section>
          <h2 class="sectionTitle effect">
            ご相談・お問い合わせ
            <span class="sectionSubTitle">CONTACT</span>
          </h2>
          <div class="topContactColumn">
            <div
              class="topContactLeft topContactReverse2 effect"
              data-reveal-zoom
            >
              <div class="imgArea">
                <div class="imgArea4 imgShell" style="width:35%">
                  <img
                    src="/img/img_area_04.svg"
                    alt="電話をかける女性アイコン"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div class="imgArea5 imgShell" style="width:50%">
                  <img
                    src="/img/img_area_05.svg"
                    alt="スマートフォンアイコン"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
            <div class="topContactRight topContactReverse1 effect d_02">
              <h3 class="h3">
                不安な事や痛みについてなど、 なんでもご相談ください！
              </h3>
              <p class="paragraph">
                当院では鍼灸の施術も行います。鍼灸についてのご質問もこちらよりお寄せください。なんでもお答えします！
              </p>
              <div class="btn effect d_06">
                <a href="/contact">
                  <span class="arrow">›</span>
                  ご相談・お問い合わせ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
