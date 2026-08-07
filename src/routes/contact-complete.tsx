import { Breadcrumb } from '../components/details/breadcrumb';
import { DetailsHeader } from '../components/details/details-header';

export function ContactCompletePage() {
  return (
    <>
      <DetailsHeader title="送信完了" />
      <Breadcrumb items={[{ url: '/contact', name: 'お問い合わせ' }]} />
      <div class="contentWrap">
        <main class="contactPage" id="top">
          <p class="paragraph">
            お問い合わせありがとうございました。
            <br />
            <br />
            確認メールを送付させて頂きました。
            <br />
            届いていない場合は迷惑メールフォルダに振り分けられている可能性がありますので、お手数をおかけますがご覧ください。
            <br />
            <br />
            <a href="/">ホームへ戻る</a>
          </p>
        </main>
      </div>
    </>
  );
}
