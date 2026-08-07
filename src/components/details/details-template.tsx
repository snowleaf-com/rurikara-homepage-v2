import { raw } from 'hono/html';
import { ContactCta } from '../home/contact-cta';
import { Breadcrumb, type Crumb } from './breadcrumb';
import { DetailsHeader } from './details-header';
import { TreatCard } from './treat-card';
import { TREAT_CARDS } from '../../data/content-pages';

type DetailsTemplateProps = {
  title: string;
  breadcrumbs: Crumb[];
  symptoms: string[];
  symptomImg: string;
  causes: string;
  treatImgUrls: string[];
};

export function DetailsTemplate({
  title,
  breadcrumbs,
  symptoms,
  symptomImg,
  causes,
  treatImgUrls
}: DetailsTemplateProps) {
  return (
    <>
      <DetailsHeader title={title} />
      <Breadcrumb items={breadcrumbs} />
      <div class="contentWrap">
        <div class="sectionNormal" data-reveal-section>
          <h2 class="detailSectionTitle effect">こんなお悩みありませんか？</h2>
          <div class="detailsColumn2">
            <div class="left reverse2 effect d_04">
              <ul>
                {symptoms.map((symptom) => (
                  <li>
                    <span class="detailsCheckMark" aria-hidden="true">
                      ✓
                    </span>
                    {symptom}
                  </li>
                ))}
              </ul>
            </div>
            <div class="right reverse effect d_02">
              <div class="symptomImg">
                <img
                  src={symptomImg}
                  alt={title}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>

        <div data-reveal-section>
          <div class="sectionBubble">
            <h2 class="detailSectionTitle effect">
              そのおつらい症状を根本から取り除きませんか？
            </h2>
            <p class="bubbleSectionParagraph effect d_02">{raw(causes)}</p>
            <p class="bubbleSectionParagraph effect d_04">
              当院では鍼灸の施術やストレッチ体操、姿勢改善運動など、様々なアドバイスをさせていただいております。
              <br />
              一緒に悩みを改善しましょう！
            </p>
          </div>
          <div class="sectionBubbleBottom" />
        </div>

        <div class="sectionNormal detailSectionDiv" data-reveal-section>
          <h2 class="detailSectionTitle effect">具体的な施術</h2>
          {treatImgUrls.map((imgUrl, index) => (
            <TreatCard
              imgUrl={imgUrl}
              treatTitle={TREAT_CARDS[index].title}
              treatDetail={TREAT_CARDS[index].detail}
            />
          ))}
        </div>

        <ContactCta />
      </div>
    </>
  );
}
