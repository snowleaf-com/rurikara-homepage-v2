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

export function MenuCardList() {
  return (
    <div class="cardLists effect d_04">
      {MENUS.map((menu) => (
        <div class="card">
          <a class="cardLink" href={menu.href}>
            <span class="cardLinkMessage">VIEW MORE</span>
            <img
              class="cardImg"
              src={menu.img}
              alt=""
              width="240"
              height="180"
              loading="lazy"
              decoding="async"
            />
            <p class={menu.special ? 'specialDescription' : 'description'}>
              {menu.label}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
}
