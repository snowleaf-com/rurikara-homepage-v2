import { raw } from 'hono/html';
import { Breadcrumb } from '../components/details/breadcrumb';
import { DetailsHeader } from '../components/details/details-header';
import { ContactCta } from '../components/home/contact-cta';

const FAQ_ITEMS = [
  {
    q: 'はりって痛い？',
    a: 'はりは髪の毛と同じくらいの細さのもの（0.16mm）を使用します。<br/>一瞬チクっとする事もありますが、ほぼ痛みはありません。<br/>※一部ズーンとした、はり特有の【響き】が起こる事はあります。'
  },
  {
    q: 'お灸って熱い？',
    a: 'お灸は皮ふの上で直接艾(もぐさ)が燃えるものではなく、お灸の周りの空気が温まる【輻射熱】でポカポカと感じます。'
  },
  {
    q: '保険は使える？お金はどのくらいかかる？',
    a: 'ぶつけた・捻った・スポーツをして痛めてしまった等、ケガ(急性期)に対し健康保険が適応となります。一回の料金は概ね500〜1000円前後となります(自費施術別)。よろしければ一度ご相談ください。'
  },
  {
    q: '一回あたりの施術時間は？',
    a: '概ね30分程度となります。症状や自費施術等で前後する事があります。<br/>ご理解いただきますようよろしくお願いします。'
  },
  {
    q: 'どんな服装でいけばいい？',
    a: 'どんな服装でも構いません！！<br/>が、ゆったりとしたTシャツやスウェット・ジャージなどリラックスできる服装でご来院いただけるとよりリラックス効果を得られます。'
  },
  {
    q: '妊娠中でも大丈夫？',
    a: '一般的には妊娠16週目以降の安定期をすぎてから8カ月目までを目安に施術を行うことが可能です。<br/>16週目以前の妊娠初期や臨月の期間はリスクが高いため、避けるようにしてください。<br/>当院も腰痛やストレス緩和などを目的とした施術をおこなっています。<br/>※施術を希望される際は事前にかかりつけの医師にご相談ください。'
  },
  {
    q: '何回通えばいい？',
    a: '受傷直後は筋肉に硬さや炎症があるため、なるべく高頻度のご来院をお勧めします。<br/>痛みは少し楽になったがまだ痛み違和感がある場合は毎日〜週数回のご来院をお勧めします。<br/>また、「日々のメンテナンスを行いたい」、「痛くならない様な身体作りをしたい」等の方々にも各種メニューorプログラムを用意しています。<br/>ご気軽にご相談ください。'
  }
];

export function FaqPage() {
  return (
    <>
      <DetailsHeader title="よくある質問" />
      <Breadcrumb items={[{ url: '/faq', name: 'よくある質問' }]} />
      <div class="contentWrap">
        <div class="faqPageIntro" data-reveal-section>
          <p class="paragraph effect">
            よく寄せられるご質問を掲載します。
            <br />
            その他、気になる事がございましたらお気軽にご相談ください。
          </p>
        </div>
        <div data-reveal-section>
          <div class="faqPageAccordion accordion effect d_04">
            {FAQ_ITEMS.map((item) => (
              <div class="accordionItem">
                <button
                  class="accordionTitle"
                  type="button"
                  data-accordion-toggle
                >
                  <span>{item.q}</span>
                  <span class="icon nonActiveIcon size" aria-hidden="true">
                    +
                  </span>
                </button>
                <div class="accordionContent" data-accordion-content>
                  <p class="contentp">{raw(item.a)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ContactCta />
      </div>
    </>
  );
}
