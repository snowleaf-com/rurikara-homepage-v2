import { ContactCta } from '../components/home/contact-cta';
import { Faq } from '../components/home/faq';
import { Hero } from '../components/home/hero';
import { Message } from '../components/home/message';
import { News } from '../components/home/news';
import { Social } from '../components/home/social';
import { VisitGuide } from '../components/home/visit-guide';
import { Strength } from '../components/home/strength';
import { Trouble } from '../components/home/trouble';

export function HomePage() {
  return (
    <main>
      <Hero />
      <div class="contentWrap">
        <News />
        <Social />
        <VisitGuide />
        <Strength />
        <Trouble />
        <Faq />
        <Message />
        <ContactCta />
      </div>
    </main>
  );
}
