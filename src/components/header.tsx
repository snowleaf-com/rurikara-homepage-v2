const NAV = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: '当院について' },
  { href: '/content', label: '施術内容' },
  { href: '/content/accident', label: '交通事故' },
  { href: '/contact', label: 'お問い合わせ' }
] as const;

const LINE_URL =
  'https://line.me/R/ti/p/@728lkset?from=page&accountId=728lkset';

function PhoneIcon({ shadow = false }: { shadow?: boolean }) {
  const filter = shadow
    ? 'drop-shadow(-1px -1px 0 rgba(242,246,247,0.9)) drop-shadow(1px -1px 0 rgba(242,246,247,0.9)) drop-shadow(-1px 1px 0 rgba(242,246,247,0.9)) drop-shadow(1px 1px 0 rgba(242,246,247,0.9))'
    : undefined;
  return (
    <svg
      class="phoneIcon"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      aria-hidden="true"
      style={filter ? `filter:${filter}` : undefined}
    >
      <path
        fill="currentColor"
        d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.26 207.75 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
      />
    </svg>
  );
}

export function Header() {
  return (
    <header class="header" id="site-header">
      <div class="bgBl" />
      <p class="headerTxt">沼津市井出の鍼灸・接骨院</p>
      <a class="topLogo" href="/">
        <img
          src="/img/top_logo.svg"
          alt="るりから鍼灸・接骨院（沼津市）"
          width="200"
          height="60"
          decoding="async"
          fetchpriority="high"
        />
      </a>

      {/* SP: 電話アイコン（≤959px で表示） */}
      <a class="telBtn" href="tel:09042159695" aria-label="電話する">
        <PhoneIcon shadow />
      </a>

      <button
        class="menu_btn"
        id="menu-toggle"
        type="button"
        aria-label="メニューを開く"
        aria-expanded="false"
        aria-controls="site-nav"
      >
        <span class="top" />
        <span class="middle" />
        <span class="bottom" />
      </button>

      <nav class="gNavi navHidden" id="site-nav" aria-label="メインメニュー">
        <ul>
          {NAV.map((item) => (
            <li>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* PC: 電話番号ボタン（≤959px で非表示） */}
      <div class="headerContact">
        <a href="tel:09042159695">
          <PhoneIcon />
          <strong>090-4215-9695</strong>
        </a>
      </div>

      {/* PC: 縦LINE / SP: 横LINE（スクロール後） */}
      <ul class="hSns" id="social-links">
        <li>
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
            <div class="default-img">
              <img
                src="/img/line_tate.svg"
                alt="LINEでお問い合わせ"
                width="90"
                height="280"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div class="mobileImg" id="line-mobile">
              <img
                src="/img/line_yoko.svg"
                alt="LINEでお問い合わせ"
                width="200"
                height="50"
                loading="lazy"
                decoding="async"
              />
            </div>
          </a>
        </li>
      </ul>

      <div class="toTop toTopHidden" id="to-top">
        <a href="#top" id="to-top-btn" aria-label="ページトップへ戻る">
          <svg
            class="toTopIcon"
            viewBox="0 0 512 512"
            width="1em"
            height="1em"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}
