import { DetailsTemplate } from '../components/details/details-template';
import type { ContentPageData } from '../data/content-pages';

export function ContentDetailPage({ page }: { page: ContentPageData }) {
  return (
    <DetailsTemplate
      title={page.title}
      breadcrumbs={page.breadcrumbs}
      symptoms={page.symptoms}
      symptomImg={page.symptomImg}
      causes={page.causes}
      treatImgUrls={page.treatImgUrls}
    />
  );
}
