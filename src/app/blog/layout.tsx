import type { Metadata } from "next";
import { siteConfig } from "../utils/site";

export const metadata: Metadata = {
  title: "Insights & Strategies | BizzGrowLabs Blog",
  description:
    "Actionable insights on digital marketing, web design, and business automation. Learn how to optimize your digital identity and drive sustainable growth.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: "Insights & Strategies | BizzGrowLabs Blog",
    description:
      "Actionable insights on digital marketing, web design, and business automation. Learn how to optimize your digital identity and drive sustainable growth.",
    url: `${siteConfig.url}/blog`,
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
