import { Breadcrumb } from '../components/details/breadcrumb';
import { DetailsHeader } from '../components/details/details-header';

export function ContactPage() {
  return (
    <>
      <DetailsHeader title="お問い合わせ" />
      <Breadcrumb items={[{ url: '/contact', name: 'お問い合わせ' }]} />
      <div class="contentWrap">
        <main class="contactPage" id="top">
          <p class="paragraph">
            お急ぎの方はお手数おかけいたしますが、
            <a href="tel:09042159695">090-4215-9695</a>
            までお電話ください。
            <br />
            ２日経過しても返信がない場合も恐れ入りますが、上記電話番号までお電話ください。
          </p>
          <div class="apiErrorBox" id="api-error" />
          <div class="inquiry">
            <div class="inner">
              <form id="contact-form">
                <div class="column2">
                  <label for="name">
                    <span class="required">必須</span>
                    お名前
                  </label>
                  <div class="inputWrap">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      maxlength={20}
                      placeholder="お名前"
                      required
                    />
                    <p class="errorMessage" data-error="name" hidden />
                  </div>
                </div>
                <div class="column2">
                  <label for="email">
                    <span class="required">必須</span>
                    メール
                  </label>
                  <div class="inputWrap">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      maxlength={50}
                      placeholder="メールアドレス"
                      required
                    />
                    <p class="errorMessage" data-error="email" hidden />
                  </div>
                </div>
                <div class="column2">
                  <label for="message">
                    <span class="required">必須</span>
                    メッセージ
                  </label>
                  <div class="inputWrap">
                    <textarea
                      id="message"
                      name="message"
                      rows={10}
                      maxlength={1000}
                      placeholder="お問い合わせ内容"
                      required
                    />
                    <p class="errorMessage" data-error="message" hidden />
                  </div>
                </div>
                <button type="submit" id="contact-submit">
                  内容を確認する
                </button>
              </form>
            </div>
          </div>

          <div
            class="contactModal"
            id="contact-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
          >
            <div class="contactModalPanel">
              <h2 id="contact-modal-title">送信内容の確認</h2>
              <dl>
                <div>
                  <dt>
                    <strong>お名前</strong>
                  </dt>
                  <dd id="confirm-name" />
                </div>
                <div>
                  <dt>
                    <strong>メール</strong>
                  </dt>
                  <dd id="confirm-email" />
                </div>
                <div>
                  <dt>
                    <strong>メッセージ</strong>
                  </dt>
                  <dd id="confirm-message" style="white-space:pre-wrap" />
                </div>
              </dl>
              <div class="contactModalActions">
                <button type="button" id="contact-modal-cancel">
                  戻る
                </button>
                <button class="primary" type="button" id="contact-modal-send">
                  送信する
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
