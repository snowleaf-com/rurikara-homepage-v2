export function ContactErrorPage() {
  return (
    <main class="contactPage" id="top">
      <div class="sectionNormal" style="text-align:center;padding-bottom:80px">
        <h1 class="sectionTitle">送信エラー</h1>
        <p class="paragraph">
          送信に失敗しました。
          <br />
          お手数ですが時間をおいて再度お試しいただくか、お電話ください。
          <br />
          <a href="tel:09042159695">090-4215-9695</a>
        </p>
        <div class="btn">
          <a href="/contact">
            <span class="arrow">›</span>
            お問い合わせへ戻る
          </a>
        </div>
      </div>
    </main>
  );
}
