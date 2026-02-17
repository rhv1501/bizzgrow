import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getServiceBySlug, services } from "../catalog";

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
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href="/services"
              className="text-blue-600 hover:text-blue-700"
            >
              Back to Services
            </Link>
          </div>

          <header className="mb-10">
            <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
            <p
              className="text-xl font-semibold mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              {service.headline}
            </p>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              {service.description}
            </p>
          </header>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="card card-premium lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">
                How this boosts your business
              </h2>
              <ul className="space-y-3">
                {service.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                    <span style={{ color: "var(--text-secondary)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-4">
                How we keep everything aligned
              </h3>
              <ul className="space-y-3">
                {service.alignment.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                    <span style={{ color: "var(--text-secondary)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="card card-premium">
              <h2 className="text-2xl font-bold mb-4">How we deliver</h2>
              <ul className="space-y-2">
                {[
                  "A clear discovery call to understand goals and constraints",
                  "A strategy-first plan aligned to your audience and offer",
                  "Professional execution with milestones and updates",
                  "Quality checks (UX, mobile, speed, and consistency)",
                  "Best-practice setup for SEO, tracking, and performance",
                  "Clean handover and guidance so you can move fast after launch",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                    <span style={{ color: "var(--text-secondary)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p
                className="text-sm mt-4"
                style={{ color: "var(--text-secondary)" }}
              >
                Deliverables vary based on what you choose — we’ll recommend the
                best mix after understanding your goals.
              </p>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <p
                  className="text-sm mb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Want a plan tailored to your business? Tell us your goals and
                  we&apos;ll recommend the best approach.
                </p>
                <Link href="/contact" className="btn btn-primary w-full">
                  Contact us
                </Link>
              </div>
            </aside>
          </section>

          <section className="mt-8">
            <div className="card card-premium">
              <h2 className="text-2xl font-bold mb-2">Choose a service</h2>
              <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
                Pick the exact service you need under {service.title}. Click
                “Get quote” and your message will be prefilled.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.subServices.map((sub) => (
                  <div
                    key={sub.name}
                    className="p-6 rounded-2xl border border-gray-100 bg-white "
                  >
                    <h3 className="text-xl font-bold mb-2 !text-[#0f1b25]">
                      {sub.name}
                    </h3>
                    <p className="mb-4 leading-relaxed !text-[#004c80]">
                      {sub.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {sub.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/contact?service=${encodeURIComponent(
                        service.title,
                      )}&sub=${encodeURIComponent(sub.name)}`}
                      className="btn btn-primary"
                    >
                      Get quote
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="card card-premium mt-8">
            <h2 className="text-2xl font-bold mb-4">How it works</h2>
            <ol className="space-y-3">
              {service.howItWorks.map((step, idx) => (
                <li key={step} className="flex items-start gap-3">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                    style={{ backgroundColor: "var(--brand-primary)" }}
                  >
                    {idx + 1}
                  </span>
                  <span style={{ color: "var(--text-secondary)" }}>{step}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </main>
  );
}
