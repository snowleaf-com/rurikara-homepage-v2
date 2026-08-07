import { ContactCta } from '../components/home/contact-cta';
import { Faq } from '../components/home/faq';
import { Hero } from '../components/home/hero';
import { Message } from '../components/home/message';
import { News } from '../components/home/news';
import { Strength } from '../components/home/strength';
import { Trouble } from '../components/home/trouble';

export function HomePage() {
  return (
    <main>
      <Hero />
      <div class="contentWrap">
        <News />
        <Strength />
        <Trouble />
        <Faq />
        <Message />
        <ContactCta />
      </div>
    </main>
  );
}
