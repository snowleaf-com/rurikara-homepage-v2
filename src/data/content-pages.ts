import type { Crumb } from '../components/details/breadcrumb';

export type ContentPageData = {
  slug: string;
  title: string;
  pageTitle: string;
  description: string;
  breadcrumbs: Crumb[];
  symptoms: string[];
  symptomImg: string;
  causes: string;
  treatImgUrls: string[];
};

const TREAT_TITLES = ['鍼灸施術', '手技施術（マッサージ）', '電気による施術'];
const TREAT_DETAILS = [
  'はり・灸の施術では目的の筋肉への直接的なアプローチができます。<br />免疫力の向上、血流の改善、ホルモンバランスや自律神経を整え、心身をリラックスさせるなど、様々な効果が期待できます。<br />東洋医学・西洋医学それぞれの視点から患者様一人一人にあった最適な施術を勧めさせて頂きます。',
  '手技施術とは鍼などを使わず、手で行う施術の方法です。<br />硬くなった筋肉をほぐし、血流を改善させ、身体の痛みやコリの原因となる老廃物の排出を促します。<br />合わせてストレッチや軽度の運動・体操を行うことで、筋肉や各関節の柔軟性が向上し、疲れにくくケガをしにくい身体を目指すことができます。',
  '電気による施術とは、ケガや病気などで痛みがある・うまく動かない・硬くなってしまい柔軟性がない等の部位に、様々な種類・周波数の電気刺激を与え、症状の改善を目的としたものです。<br />ピリピリと感じるため、少し苦手な方もいらっしゃるかもしれませんが、とても効果のある施術のひとつです。'
];

export const TREAT_CARDS = TREAT_TITLES.map((title, i) => ({
  title,
  detail: TREAT_DETAILS[i]
}));

export const CONTENT_PAGES: ContentPageData[] = [
  {
    slug: 'shoulder',
    title: '首の痛み・肩こり',
    pageTitle: '首の痛み・肩こり｜るりから鍼灸・接骨院',
    description:
      '沼津市井出のるりから鍼灸・接骨院。首の痛み・肩こり・頭痛・寝違えなど、はり灸・手技・電気施術で改善を目指します。',
    breadcrumbs: [
      { url: '/content', name: '施術について' },
      { url: '/content/shoulder', name: '首の痛み・肩こり' }
    ],
    symptoms: [
      '首や肩が痛い、重だるい',
      '肩こりを感じやすい',
      '頭痛がする',
      '肩が動かしにくい',
      '同じ姿勢が長時間続く',
      'マッサージをしても良くならない',
      '寝違えてしまった'
    ],
    symptomImg: '/img/kata.svg',
    causes:
      '首や肩の痛みの原因の多くは、血行が悪く、節肉が縮んでしまい「コリ」になっていることがあげられます。<br />特に首や肩は頭を支えているため、常に負担がかかっています。<br />痛みをそのままにしておくと頭痛などにも繋がってしまうため、おかしいなと感じたら、なるべく早い段階での施術がオススメです。',
    treatImgUrls: ['/img/kata1.jpg', '/img/kata2.jpg', '/img/kata3.jpg']
  },
  {
    slug: 'lumbar',
    title: '背中・腰の痛み',
    pageTitle: '背中・腰の痛み｜るりから鍼灸・接骨院',
    description:
      '沼津市井出のるりから鍼灸・接骨院。背中・腰痛、ギックリ腰、姿勢のつらさに対し、はり灸・手技・電気施術でアプローチします。',
    breadcrumbs: [
      { url: '/content', name: '施術について' },
      { url: '/content/lumbar', name: '背中・腰の痛み' }
    ],
    symptoms: [
      '寝返りがつらい',
      '猫背・姿勢が悪いと言われている',
      '背中が張る',
      '朝起きたときに背中・腰が痛む',
      'ギックリ腰をしたことがある',
      '同じ姿勢が長時間続く',
      'マッサージをしても良くならない'
    ],
    symptomImg: '/img/back.svg',
    causes:
      '背中から腰にかけて、身体の中でも大きな筋肉がたくさんあります。<br/>人は姿勢を維持するためにそれらの筋肉を、常日頃から使っているため、背中や腰に強い痛みがでると日常の生活を送ることが難しくなってしまいます。<br/>そうなる前に、痛みや筋肉の硬さを取り除き、身体のメンテナンスを心掛けることが大切です。<br/>背中や腰の筋肉を正常な状態へ戻し、姿勢を正す事がストレスの軽減、疲労回復への近道かもしれません。',
    treatImgUrls: ['/img/kosi1.jpg', '/img/kosi2.jpg', '/img/kosi3.jpg']
  },
  {
    slug: 'knees-ankles',
    title: 'ひざ・太もも・足首の痛み',
    pageTitle: 'ひざ・太もも・足首の痛み｜るりから鍼灸・接骨院',
    description:
      '沼津市井出のるりから鍼灸・接骨院。ひざ・太もも・足首の痛み、捻挫後の不安、歩行時のつらさに施術で対応します。',
    breadcrumbs: [
      { url: '/content', name: '施術について' },
      { url: '/content/knees-ankles', name: 'ひざ・太もも・足首の痛み' }
    ],
    symptoms: [
      '歩いていると痛む',
      '立ち上がり、階段がつらい',
      '足首を捻挫したことがある',
      '足が疲れやすい',
      'ガクッと力が抜けてしまうことがある',
      'X脚、O脚が気になる',
      '足がつる、むくみがある'
    ],
    symptomImg: '/img/hiza.svg',
    causes:
      '歩く、走る、階段の上り下りなどで、膝や足首に日々大きな負担がかかってます。<br/>また、太ももの筋肉（大腿四頭筋）・すねの筋肉（前脛骨筋）・ふくらはぎの筋肉（腓腹筋、ヒラメ筋）が硬くなると、<br/>膝や足首に痛みが出やすく、それがケガに繋がることもあります。<br/>日常生活を気持ち良く送るためにも、足に少しでも痛みや不安を抱えている方はぜひ施術を受けてみてください。',
    treatImgUrls: ['/img/asi1.jpg', '/img/asi2.jpg', '/img/asi3.jpg']
  },
  {
    slug: 'sports',
    title: 'スポーツ障害について',
    pageTitle: 'スポーツ障害｜るりから鍼灸・接骨院',
    description:
      '沼津市井出のるりから鍼灸・接骨院。スポーツ障害のケア、ケガ後の復帰、ケガをしにくい身体づくりをサポートします。',
    breadcrumbs: [
      { url: '/content', name: '施術について' },
      { url: '/content/sports', name: 'スポーツ障害について' }
    ],
    symptoms: [
      '運動やトレーニングをしていてケガをした',
      '過去に運動でケガをし、痛みがある',
      'スポーツで活躍したい・結果を残したい',
      '思うように身体が動かない、動かせない',
      'ストレッチやダウンのやり方がわからない'
    ],
    symptomImg: '/img/sports.svg',
    causes:
      '身体を動かすことはとても素晴らしい事です。心身の健康のためにも、連動は欠かせないとされてます。<br/>スポーツを楽しく続けていくためには、ボディメンテナンスやセルフケアがとても大切です。痛みや不安を抱えていると思うように力が発揮できません。<br/>運動を続けていきたい方、全力でスポーツに取り組む方、ケガから復帰したい方、ケガをしにくい身体作りをしたい方、ぜひ一度ご相談ください。<br/>その日の痛みは、その日のうちに！',
    treatImgUrls: ['/img/asi1.jpg', '/img/asi2.jpg', '/img/asi3.jpg']
  }
];

export function getContentPage(slug: string) {
  return CONTENT_PAGES.find((p) => p.slug === slug);
}
