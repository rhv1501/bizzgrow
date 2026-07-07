import type { Metadata } from "next";
import { siteConfig } from "../utils/site";

export const metadata: Metadata = {
  title: "Our Work | BizzGrowLabs Portfolio",
  description:
    "Discover how BizzGrowLabs has transformed the digital presence of small businesses through premium web design, branding, and conversion-focused marketing.",
  alternates: {
    canonical: `${siteConfig.url}/portfolio`,
  },
  openGraph: {
    title: "Our Work | BizzGrowLabs Portfolio",
    description:
      "Discover how BizzGrowLabs has transformed the digital presence of small businesses through premium web design, branding, and conversion-focused marketing.",
    url: `${siteConfig.url}/portfolio`,
  },
};

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
