import { Breadcrumb } from '../components/details/breadcrumb';
import { DetailsHeader } from '../components/details/details-header';

export function ContactErrorPage() {
  return (
    <>
      <DetailsHeader title="エラー" />
      <Breadcrumb items={[{ url: '/contact', name: 'お問い合わせ' }]} />
      <div class="contentWrap">
        <main class="contactPage" id="top">
          <p class="paragraph">
            メール送信エラーが発生しました。
            <br />
            <br />
            大変お手数ですが、お電話かLINEかInstagramでお問い合わせください。
            <br />
            <br />
            <a href="/">ホームへ戻る</a>
          </p>
        </main>
      </div>
    </>
  );
}
