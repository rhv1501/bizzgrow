import type { Metadata } from "next";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import HomeServices from "./components/HomeServices";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import MobileStickyCTA from "./components/MobileStickyCTA";
import { siteConfig } from "./utils/site";

export const metadata: Metadata = {
  title: "BizzGrowLabs | Digital Agency for Small Business Growth",
  description: "Transform your online presence with BizzGrowLabs. We offer end-to-end web design, branding, and digital marketing strategies tailored for ambitious SMBs.",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "BizzGrowLabs | Digital Agency for Small Business Growth",
    description: "Transform your online presence with BizzGrowLabs. We offer end-to-end web design, branding, and digital marketing strategies tailored for ambitious SMBs.",
    url: siteConfig.url,
  },
};

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Clients />
      <HomeServices />
      <Process />
      <Portfolio />
      <Team />
      <Testimonials />
      <Faq />
      <Cta />

      {/* Mobile Sticky CTA */}
      <MobileStickyCTA />
    </main>
  );
}
