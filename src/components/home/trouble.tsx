const MENUS = [
  {
    href: '/content/shoulder',
    label: '首の痛み・肩こり',
    img: '/img/kata.svg',
    special: false
  },
  {
    href: '/content/lumbar',
    label: '背中・腰の痛み',
    img: '/img/back.svg',
    special: false
  },
  {
    href: '/content/knees-ankles',
    label: 'ひざ・太もも・足首の痛み',
    img: '/img/hiza.svg',
    special: true
  },
  {
    href: '/content/sports',
    label: 'スポーツ障害',
    img: '/img/sports.svg',
    special: false
  },
  {
    href: '/content/accident',
    label: '交通事故・労災',
    img: '/img/jiko.svg',
    special: false
  },
  {
    href: '/content/own-expense',
    label: '自費施術',
    img: '/img/jihi.svg',
    special: false
  }
] as const;

export function Trouble() {
  return (
    <>
      <div class="sectionBorderOrangeBottom" />
      <div class="sectionNormal" data-reveal-section>
        <h2 class="sectionTitle effect">
          主な施術内容
          <span class="sectionSubTitle">MENU</span>
        </h2>
        <p class="troubleText effect d_02">
          どんな症状でお困りですか？気になるメニューを押してください。
          <br />
          当院では、各種保険・労災・交通事故の対応もしております。詳しくは各ページをご覧ください。
        </p>
        <div class="cardLists effect d_04">
          {MENUS.map((menu) => (
            <div class="card">
              <a class="cardLink" href={menu.href}>
                <span class="cardLinkMessage">VIEW MORE</span>
                <img class="cardImg" src={menu.img} alt="" loading="lazy" decoding="async" />
                <p class={menu.special ? 'specialDescription' : 'description'}>
                  {menu.label}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
