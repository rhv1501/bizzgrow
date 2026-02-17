import Hero from "./components/Hero";
import Features from "./components/Features";
import Process from "./components/Process";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import MobileStickyCTA from "./components/MobileStickyCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Process />
      <Services />
      <Portfolio />
      <Team />
      <Testimonials />
      <Newsletter />
      <Faq />
      <Cta />

      {/* Mobile Sticky CTA */}
      <MobileStickyCTA />
    </main>
  );
}
