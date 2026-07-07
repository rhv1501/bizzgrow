import type { Metadata } from "next";
import { siteConfig } from "../utils/site";

export const metadata: Metadata = {
  title: "Our Services | Web Design, Branding & Marketing",
  description:
    "Explore our comprehensive digital solutions for SMBs. From responsive web design to performance marketing and automation, we engineer measurable growth.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: "Our Services | Web Design, Branding & Marketing",
    description:
      "Explore our comprehensive digital solutions for SMBs. From responsive web design to performance marketing and automation, we engineer measurable growth.",
    url: `${siteConfig.url}/services`,
  },
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
