import { Breadcrumb } from '../components/details/breadcrumb';
import { DetailsHeader } from '../components/details/details-header';
import { MenuCardList } from '../components/details/menu-card-list';
import { Timeline } from '../components/details/timeline';
import { ContactCta } from '../components/home/contact-cta';

const FLOW = [
  {
    number: 1,
    title: 'ヒアリング(問診)',
    description: `問診表にご記入頂いた内容をもとに、症状や原因、どのような時に痛みを強く感じるか、どこが痛むのか、などなるべく詳しくお話を聞かせていただきます。<br />
        また、安全に施術を行うために、お身体の事を把握する必要があるため、過去の大きなケガや病気の有無などをお聞きします。<br />
        ご希望や不安がありましたら遠慮なくお伝えください。`
  },
  {
    number: 2,
    title: '検査(視診・触診)',
    description: `ヒアリングに基づき、痛みのある部位やその他の部位、全身のバランスチェックをさせていただきます。<br />
        姿勢・歩行・腫れ・筋肉の硬さ・関節の可動域など、様々な情報から「痛みの原因」を見つけ出していきます。<br />
        その後施術の内容の説明やアドバイスをさせて頂きます。`
  },
  {
    number: 3,
    title: '施術',
    description: `手技(ストレッチやマッサージ)や電気による施術・はり灸などを行い「痛みの原因」である筋肉や関節、神経に対してアプローチをしていきます。<br />
        「この痛みには何が効くの？」「どのくらい通えば良いの？」など施術を行う上で気になることは何でもご相談ください。`
  },
  {
    number: 4,
    title: '説明',
    description: `施術後には今のお身体の状態を説明させていただきます。<br />
        継続して通院・施術が必要な場合は一緒に回復に向け計画を立てていきましょう。<br />
        ご自宅でできる体操やストレッチ、早期回復に向けてのアドバイスもさせていただきます。`
  }
];

export function ContentPage() {
  return (
    <>
      <DetailsHeader title="施術について" />
      <Breadcrumb items={[{ url: '/content', name: '施術について' }]} />
      <div class="contentWrap">
        <div class="sectionNormal" data-reveal-section>
          <h2 class="sectionTitle effect">
            主な施術内容一覧
            <span class="sectionSubTitle">DETAILS</span>
          </h2>
          <p class="detailsText effect d_02">
            どんな症状でお困りですか？気になるメニューを押してください。
            <br />
            当院では、各種保険・労災・交通事故の対応もしております。詳しくは各ページをご覧ください。
          </p>
          <MenuCardList />
        </div>

        <div data-reveal-section>
          <div class="sectionBorderOrange">
            <h2 class="sectionTitle effect">
              施術の流れ
              <span class="sectionSubTitle">FLOW</span>
            </h2>
            <Timeline items={FLOW} />
          </div>
          <div class="sectionBorderOrangeBottom" />
        </div>

        <div class="sectionNormal" data-reveal-section>
          <h2 class="sectionTitle effect">
            料金・施術時間
            <span class="sectionSubTitle">PRICE/TIME</span>
          </h2>
          <p class="detailsText effect d_04">
            ぶつけた・捻った・スポーツをして痛めてしまった等、ケガ(急性期)に対し健康保険が適応となり、
            <br />
            一回の料金は概ね
            <span class="bold">500〜1000円前後</span>
            となります。
            <br />
            また、保険適応外の自費施術もあります。詳しくは
            <a href="/content/own-expense">自費施術のページ</a>
            をご覧ください。
            <br />
            <br />
            施術時間は概ね<span class="bold">30分程度</span>
            となります。症状や混雑状況（ご予約優先）で前後する事があります。
            <br />
            ご理解のほど、よろしくお願い申し上げます。
          </p>
        </div>

        <ContactCta />
      </div>
    </>
  );
}
