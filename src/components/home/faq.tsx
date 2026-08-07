const FAQS = [
  {
    q: 'はりって痛い？',
    a: (
      <>
        はりは髪の毛と同じくらいの細さのもの（0.16mm）を使用します。一瞬チクっとする事もありますが、ほぼ痛みはありません。
        <br />
        ※一部ズーンとした、はり特有の『響き』が起こる事はあります。
      </>
    )
  },
  {
    q: 'お灸って熱い？',
    a: (
      <>
        お灸は皮ふの上で直接艾(もぐさ)が燃えるものではなく、お灸の周りの空気が温まる『輻射熱』でポカポカと感じます。
      </>
    )
  },
  {
    q: '保険は使える？お金はどのくらいかかる？',
    a: (
      <>
        ぶつけた・捻った・スポーツをして痛めてしまった等の、急性期のケガが健康保険の適応となります。
        <br />
        保険適応の場合の料金は、概ね500〜1000円前後となります。
        <br />
        また、自費施術も行っております。よろしければ一度ご相談ください。
      </>
    )
  },
  {
    q: '一回あたりの施術時間は？',
    a: (
      <>
        30分程度となります。症状や自費施術等で前後する事があります。
        <br />
        ご理解いただきます様、よろしくお願いします。
      </>
    )
  }
];

export function Faq() {
  return (
    <div class="sectionBorderPink" data-reveal-section>
      <h2 class="sectionTitleWithBorder effect">
        初めてご来院の方へ
        <span class="sectionSubTitle">FAQ</span>
      </h2>
      <p class="faqText effect d_02">
        初めて鍼灸接骨院へご来院される方の不安を少しでも取り除けるよう、
        <br />
        よく寄せられるご質問をご紹介します。
        <br />
        その他、気になる事がございましたらお気軽にご相談ください。
      </p>
      <div class="accordion effect d_04">
        {FAQS.map((item) => (
          <div class="accordionItem">
            <button class="accordionTitle" type="button" data-accordion-toggle>
              <span>{item.q}</span>
              <span class="icon nonActiveIcon size" aria-hidden="true">
                +
              </span>
            </button>
            <div class="accordionContent" data-accordion-content>
              <p class="contentp">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
      <div class="btn effect d_06">
        <a href="/faq">
          <span class="arrow">›</span>
          もっと見る
        </a>
      </div>
    </div>
  );
}
