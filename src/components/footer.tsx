const FOOTER_NAV = [
  { href: '/about', label: '当院について' },
  { href: '/content', label: '施術内容' },
  { href: '/content/shoulder', label: '首の痛み・肩こり', indent: true },
  { href: '/content/lumbar', label: '背中・腰の痛み', indent: true },
  {
    href: '/content/knees-ankles',
    label: 'ひざ・太もも・足首の痛み',
    indent: true
  },
  { href: '/content/sports', label: 'スポーツ障害', indent: true },
  { href: '/content/accident', label: '交通事故・労災', indent: true },
  { href: '/content/own-expense', label: '自費施術について', indent: true },
  { href: '/faq', label: 'よくあるご質問' },
  { href: '/contact', label: 'お問い合わせ' }
] as const;

const LINE_URL =
  'https://line.me/R/ti/p/@728lkset?from=page&accountId=728lkset';

const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.8759938793337!2d138.79881067643745!3d35.141943672760384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601985059efa899b%3A0x525439cdc941d32c!2z44KL44KK44GL44KJ6Y2854G444O75o6l6aqo6Zmi!5e0!3m2!1sja!2sjp!4v1763970793723!5m2!1sja!2sjp';

export function Footer() {
  return (
    <footer class="footer">
      <div class="footerWrap">
        <div class="inner">
          <div class="footerTop">
            <div class="footerLogo">
              <img
                src="/img/footer-logo.svg"
                alt="フッターロゴ"
                width="300"
                height="90"
              />
            </div>
            <p class="footerTxt">沼津市井出28-3</p>
            <ul class="footerTelLine">
              <li class="footerTel">
                <a class="footerPhoneFlex" href="tel:090-4215-9695">
                  <svg
                    class="phoneIcon"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.26 207.75 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                    />
                  </svg>
                  <p class="footerPhoneNum">090-4215-9695</p>
                </a>
              </li>
              <li class="footerLine">
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
                  <div class="linePc">
                    <img
                      src="/img/line_pc.svg"
                      alt="LINEパソコン用"
                      width="600"
                      height="172"
                    />
                  </div>
                  <div class="lineSp">
                    <img
                      src="/img/line_sp.svg"
                      alt="LINEスマホ用"
                      width="294"
                      height="118"
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <div class="footerMd">
            <div class="footerMdLeft">
              <div class="footerMdSchedule">
                <table class="scheduleTable">
                  <tbody>
                    <tr>
                      <th>受付時間</th>
                      <th>月</th>
                      <th>火</th>
                      <th>水</th>
                      <th>木</th>
                      <th>金</th>
                      <th>土</th>
                      <th class="holiday">日祝</th>
                    </tr>
                    <tr>
                      <td>08:00〜11:30</td>
                      <td class="txtMain">●</td>
                      <td class="txtMain">●</td>
                      <td class="txtMain">●</td>
                      <td class="txtMain">●</td>
                      <td class="txtMain">●</td>
                      <td class="txtMain">◎</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>14:30〜19:30</td>
                      <td class="txtMain">●</td>
                      <td class="txtMain">●</td>
                      <td class="txtMain">●</td>
                      <td>-</td>
                      <td class="txtMain">●</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
                <p class="scheduleIntroduce">
                  <span class="txtMain">※</span>お休み：日祝
                  <span class="txtMain" style="margin-left:25px">
                    ◎
                  </span>
                  土曜日は12:30まで
                </p>
              </div>
              <nav>
                <ul>
                  {FOOTER_NAV.map((item) => (
                    <li
                      class={
                        'indent' in item && item.indent
                          ? 'indentedList'
                          : undefined
                      }
                    >
                      <a href={item.href}>
                        <svg
                          class="footerChevron"
                          viewBox="0 0 320 512"
                          width="12"
                          height="12"
                          aria-hidden="true"
                        >
                          <path
                            fill="currentColor"
                            d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                          />
                        </svg>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div style="height:100%">
              <iframe
                class="mapStyle"
                id="footer-map"
                title="るりから鍼灸・接骨院の地図"
                data-src={MAP_EMBED}
                src="about:blank"
                width="350"
                height="350"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowfullscreen
              />
            </div>
          </div>

          <div class="footerCopyright">
            <p>© 2025 るりから鍼灸・接骨院 ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
