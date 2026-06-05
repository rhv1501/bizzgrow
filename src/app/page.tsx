import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Manifesto from "./components/Manifesto";
import VideoShowcase from "./components/VideoShowcase";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Process from "./components/Process";
import RealityCheck from "./components/RealityCheck";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import MobileStickyCTA from "./components/MobileStickyCTA";

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <Marquee />
      <Manifesto />
      <Features />
      <Stats />
      <VideoShowcase />
      <RealityCheck />
      <Services />
      <Process />
      <Clients />
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
