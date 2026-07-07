import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getServiceBySlug, services } from "../catalog";
import ServicePageClient from "./ServicePageClient";
import { buildBreadcrumbSchema, toJsonLd } from "../../utils/seo";

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
    title: service.title,
    description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.title,
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
      title: service.title,
      description,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const breadcrumbJsonLd = toJsonLd(
    buildBreadcrumbSchema([
      { name: "Home", url: "https://bizzgrowlabs.com" },
      { name: "Services", url: "https://bizzgrowlabs.com/services" },
      {
        name: service.title,
        url: `https://bizzgrowlabs.com/services/${service.slug}`,
      },
    ]),
  );

  const serviceSchema = toJsonLd({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.title,
    provider: {
      "@type": "Organization",
      name: "BizzGrowLabs",
      url: "https://bizzgrowlabs.com",
    },
    areaServed: "Global",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Offerings`,
      itemListElement: service.subServices.map((subService) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: subService.name,
          description: subService.description,
        },
      })),
    },
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serviceSchema }}
      />
      <ServicePageClient service={service} />
    </>
  );
}
