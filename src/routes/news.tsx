import { Breadcrumb } from '../components/details/breadcrumb';
import { DetailsHeader } from '../components/details/details-header';
import { InstaFeed } from '../components/home/insta-feed';
import { ContactCta } from '../components/home/contact-cta';

/** Instagram お知らせ一覧（今後拡張しやすい土台） */
export function NewsPage() {
  return (
    <>
      <DetailsHeader title="お知らせ" />
      <Breadcrumb items={[{ url: '/news', name: 'お知らせ' }]} />
      <div class="contentWrap">
        <div class="newsPage">
          <p class="newsPageLead">
            Instagram の最新投稿をご紹介します。
            <br />
            詳細は各投稿から Instagram をご覧ください。
          </p>
          <InstaFeed limit={12} />
        </div>
        <ContactCta />
      </div>
    </>
  );
}
