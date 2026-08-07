export function Message() {
  return (
    <>
      <div class="sectionBorderPinkBottom" />
      <div class="sectionNormal" data-reveal-section>
        <h2 class="sectionTitle effect">
          院長からご挨拶
          <span class="sectionSubTitle">MESSAGE</span>
        </h2>
        <div class="messageColumn">
          <div class="messageLeft effect d_02">
            <h3 class="h3">『支える存在でありたい』</h3>
            <p class="paragraph">
              るりから鍼灸・接骨院 院長の杉山です。
              <br />
              ホームページをご覧いただき、ありがとうございます。
            </p>
            <p class="paragraph">
              当院では、患者様お一人おひとりのお悩みに丁寧に向き合い、
              身体の不調の根本から整えていくことを大切にしています。
              鍼灸と接骨の両方の視点から、あなたらしい毎日を支えるお手伝いができれば幸いです。
            </p>
            <p class="paragraph">
              どうぞお気軽にご来院ください。スタッフ一同、心よりお待ちしております。
            </p>
            <p class="paragraph">院長 杉山</p>
          </div>
          <div class="messageRight effect" data-reveal-zoom>
            <div class="imgArea">
              <div class="imgArea1 imgShell" style="width:28%">
                <img src="/img/img_area_01.svg" alt="病院アイコン" loading="lazy" decoding="async" />
              </div>
              <div class="imgArea2 imgShell" style="width:45%">
                <img src="/img/img_area_02.svg" alt="院長アイコン" loading="lazy" decoding="async" />
              </div>
              <div class="imgArea3 imgShell" style="width:30%">
                <img src="/img/img_area_03.svg" alt="ヒアリングアイコン" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
