import { raw } from 'hono/html';
import { Picture } from './picture';

type TreatCardProps = {
  imgUrl: string;
  treatTitle: string;
  treatDetail: string;
};

export function TreatCard({ imgUrl, treatTitle, treatDetail }: TreatCardProps) {
  return (
    <div class="detailsColumn2" style="margin-bottom:32px" data-reveal-section>
      <div class="left reverse2 effect d_02">
        <Picture src={imgUrl} alt={treatTitle} className="treatImg" />
      </div>
      <div class="right reverse effect d_04">
        <h4>{treatTitle}</h4>
        <span>{raw(treatDetail)}</span>
      </div>
    </div>
  );
}
