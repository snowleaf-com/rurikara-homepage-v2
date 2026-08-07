import { raw } from 'hono/html';
import { Breadcrumb } from '../components/details/breadcrumb';
import { DetailsHeader } from '../components/details/details-header';
import { Timeline } from '../components/details/timeline';
import { ContactCta } from '../components/home/contact-cta';

const TIMELINE = [
  {
    number: 1,
    title: '警察に連絡',
    description:
      '事故に遭ったら、必ず警察に届けて事故証明をいただいてください。<br/>事故証明が無いと自賠責保険が使えません。示談に応じてしまうと後々問題が生じやすいので、必ず警察に連絡して事故証明をいただきましょう。'
  },
  {
    number: 2,
    title: '保険会社に連絡',
    description: 'ご自身が加入されている保険会社に連絡をしましょう。'
  },
  {
    number: 3,
    title: '当院に連絡',
    description:
      '<a href="tel:09042159695">090-4215-9695</a>までご連絡ください！その後の流れをご説明いたします。'
  },
  {
    number: 4,
    title: '病院にて受診',
    description: '当院にご連絡いただければ、病院をご紹介します。'
  },
  {
    number: 5,
    title: '当院にて施術',
    description:
      '保険会社より当院に交通事故の施術依頼の連絡が入り、施術開始となります。<br/>自賠責保険が使えますので、窓口料金の患者様負担はありません。'
  }
];

const FAQ_ITEMS = [
  {
    q: '費用はかかる？',
    a: '自賠責保険が使えますので、窓口料金の患者様負担はありません。'
  },
  {
    q: '治るまでの期間は？',
    a: '程度によりますので、一概に言えませんが、基本的には症状が改善・治癒するまで施術をされることを勧めております。 むち打ち症（頸部捻挫）は３ヶ月〜６ヶ月は見たほうがいいと思います。'
  },
  {
    q: '接骨院ではなく、病院へ行けと保険会社に言われた',
    a: '症状を改善するためにどの医療機関にかかるかは、ご本人の自由です。保険会社が決めることではありません。'
  }
];

export function AccidentPage() {
  return (
    <>
      <DetailsHeader title="交通事故・労災" />
      <Breadcrumb
        items={[
          { url: '/content', name: '施術について' },
          { url: '/content/accident', name: '交通事故・労災' }
        ]}
      />
      <div class="contentWrap">
        <div class="sectionNormal" data-reveal-section>
          <h2 class="detailSectionTitle effect">交通事故・労災の際は当院へ</h2>
          <p class="detailsText effect d_02">
            <a href="tel:09042159695">090-4215-9695</a>
            までご連絡いただければ、すぐに対応させて頂きます。
          </p>
          <p class="detailsText effect d_04">
            尚、費用は一切かかりません。症状が良くなるまで何度でも通院して頂けます！
          </p>
        </div>

        <div data-reveal-section>
          <div class="sectionBubble">
            <h2 class="detailSectionTitle effect">事故後の流れ</h2>
            <Timeline items={TIMELINE} />
          </div>
          <div class="sectionBubbleBottom" />
        </div>

        <div class="sectionNormal" data-reveal-section>
          <h2 class="detailSectionTitle effect">よくあるご質問</h2>
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
