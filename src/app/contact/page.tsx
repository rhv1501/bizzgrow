import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "./ContactForm";
import { toJsonLd, buildWebPageSchema } from "../utils/seo";
import { siteConfig } from "../utils/site";

export const metadata: Metadata = {
  title: "Contact Us | Start Your Project with BizzGrowLabs",
  description:
    "Ready to scale your business? Get in touch with BizzGrowLabs to discuss your web design, digital marketing, or automation needs.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact Us | Start Your Project with BizzGrowLabs",
    description:
      "Ready to scale your business? Get in touch with BizzGrowLabs to discuss your web design, digital marketing, or automation needs.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  const contactJsonLd = toJsonLd(
    buildWebPageSchema(
      "ContactPage",
      "Contact BizzGrowLabs",
      "Start a project with BizzGrowLabs for a new website, brand refresh, marketing help, or automation.",
      `${siteConfig.url}/contact`,
    ),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: contactJsonLd }}
      />
      <Suspense fallback={<div className="py-20" />}>
        <ContactForm />
      </Suspense>
    </>
  );
}
