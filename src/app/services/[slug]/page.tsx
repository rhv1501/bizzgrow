import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getServiceBySlug, services } from "../catalog";
import ServicePageClient from "./ServicePageClient";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
      robots: { index: false, follow: false },
    };
  }

  const topSubServices = service.subServices
    .slice(0, 4)
    .map((s) => s.name)
    .join(", ");

  const description = `${service.headline} ${service.description} Services include: ${topSubServices}.`;

  return {
    title: `${service.title} | BizzGrow`,
    description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | BizzGrow Services`,
      description,
      url: `https://bizzgrowlabs.com/services/${service.slug}`,
      images: [
        {
          url: "/logo.png",
          width: 800,
          height: 800,
          alt: service.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | BizzGrow Services`,
      description,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return <ServicePageClient service={service} />;
}
