import { MenuCardList } from '../details/menu-card-list';

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
        <MenuCardList />
      </div>
    </>
  );
}
