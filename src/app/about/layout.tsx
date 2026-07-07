import type { Metadata } from "next";
import { toJsonLd, buildWebPageSchema } from "../utils/seo";
import { siteConfig } from "../utils/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about BizzGrowLabs, a digital transformation startup dedicated to empowering SMBs with modern web development, branding, and growth strategies.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About BizzGrowLabs | Our Mission & Approach",
    description:
      "Learn about BizzGrowLabs, a digital transformation startup dedicated to empowering SMBs with modern web development, branding, and growth strategies.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const aboutJsonLd = toJsonLd(
    buildWebPageSchema(
      "AboutPage",
      "About BizzGrowLabs",
      "Learn how BizzGrowLabs helps small businesses build stronger websites and a better online presence.",
      `${siteConfig.url}/about`,
    ),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: aboutJsonLd }}
      />
      {children}
    </>
  );
}
