import { Breadcrumb } from '../components/details/breadcrumb';
import { DetailsHeader } from '../components/details/details-header';

export function AboutPage() {
  return (
    <>
      <DetailsHeader title="当院について" />
      <Breadcrumb items={[{ url: '/about', name: '当院について' }]} />
      <div class="contentWrap">
        <div class="aboutPage">
          <table class="aboutTable">
            <tbody>
              <tr>
                <th>商号</th>
                <td>るりから鍼灸・接骨院</td>
              </tr>
              <tr>
                <th>住所</th>
                <td>
                  〒410-0319
                  <br />
                  静岡県沼津市井出28-3
                </td>
              </tr>
              <tr>
                <th>代表</th>
                <td>
                  院長・柔道整復師・鍼灸師
                  <br />
                  杉山智哉
                </td>
              </tr>
              <tr>
                <th>受付時間</th>
                <td>
                  月火水金 : 8:00-11:30　14:30-19:30
                  <br />
                  木 : 8:00-11:30
                  <br />土 : 8:00-12:30
                </td>
              </tr>
              <tr>
                <th>休日</th>
                <td>
                  日曜日・祝日
                  <br />
                  （お盆・年末年始等あり、トップページのお知らせをご覧ください）
                </td>
              </tr>
              <tr>
                <th>電話</th>
                <td>
                  <a href="tel:09042159695">090-4215-9695</a>
                </td>
              </tr>
              <tr>
                <th>駐車場</th>
                <td>建物北側に5台分の駐車スペースがあります。</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
