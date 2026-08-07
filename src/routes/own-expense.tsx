import { raw } from 'hono/html';
import { Breadcrumb } from '../components/details/breadcrumb';
import { DetailsHeader } from '../components/details/details-header';
import { Picture } from '../components/details/picture';
import { ContactCta } from '../components/home/contact-cta';

const ITEMS = [
  {
    imgUrl: '/img/kata1.jpg',
    title: '鍼灸',
    expense: '1,500円〜',
    detail:
      '首・肩・背中・腰のコリに最適！<br/>自律神経も整えリラックス、身体もポカポカ。<br/>血流も改善し免疫力もアップ！！ 運動後のケアにもいかがですか？？'
  },
  {
    imgUrl: '/img/junbi.png',
    title: 'HV(ハイボルテージ)',
    expense: '500円〜',
    detail:
      '通常よりも強い電圧で組織を刺激し、筋肉の張り、出力を元に戻し、炎症を抑えます。'
  },
  {
    imgUrl: '/img/kapping.jpg',
    title: 'カッピング',
    expense: '1,500円〜',
    detail:
      '「たこつぼ」のようなもので患部を吸います。<br/>１〜２週間ほど丸いあとが残りますが、血流改善効果は抜群！！<br/>デトックスしてみませんか？？'
  },
  {
    imgUrl: '/img/asi2.jpg',
    title: 'プチマッサージ',
    expense: '2,000円',
    detail:
      '20分コースのマッサージコースです。<br/>ゆっくり身体をほぐしてプチ贅沢をしてみませんか？？'
  }
];

export function OwnExpensePage() {
  return (
    <>
      <DetailsHeader title="自費施術について" />
      <Breadcrumb
        items={[
          { url: '/content', name: '施術について' },
          { url: '/content/own-expense', name: '自費施術について' }
        ]}
      />
      <div class="contentWrap">
        <div class="ownExpense" data-reveal-section>
          <p class="paragraph effect d_02">
            当院の自費施術は以下のようなメニューがございます。
            <br />
            ご予約無しでも承りますので、お気軽にお伝えください。
          </p>
          <div>
            {ITEMS.map((item) => (
              <div
                class="detailsColumn2"
                style="margin-bottom:32px"
                data-reveal-section
              >
                <div class="left reverse2 effect d_02">
                  <Picture
                    src={item.imgUrl}
                    alt={item.title}
                    className="treatImg"
                  />
                </div>
                <div class="right reverse effect d_04">
                  <h4>{item.title}</h4>
                  <h4 class="bold">{item.expense}</h4>
                  <span>{raw(item.detail)}</span>
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
