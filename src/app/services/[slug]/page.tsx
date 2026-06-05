import Link from "next/link";
import Image from "next/image";
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

  return (
    <main className="pt-32 pb-16 md:pb-32 bg-white relative selection:bg-brand-primary selection:text-white">
      <div className="absolute inset-0 bg-pattern opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="mb-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm md:text-lg font-black text-gray-900 hover:text-brand-primary transition-colors border-2 border-gray-900 bg-white px-4 py-2 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wider"
          >
            Back to Services
          </Link>
        </div>

        <header className="mb-16 md:mb-24 bg-brand-mint rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="relative z-10 flex-1">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-4 md:mb-6 tracking-tight leading-[1.1] uppercase break-words">
              {service.title}
            </h1>
            <p className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 max-w-4xl leading-tight">
              {service.headline}
            </p>
            <p className="text-lg md:text-xl font-medium text-gray-800 max-w-3xl leading-relaxed">
              {service.description}
            </p>
          </div>
          <div className="relative w-full max-w-md lg:w-1/3 aspect-square shrink-0 rounded-[2rem] border-4 border-gray-900 overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white group hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
            <Image
              src={`/services/${service.slug}.png`}
              alt={`${service.title} Illustration`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              unoptimized
            />
          </div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight uppercase">
                How this boosts your business
              </h2>
              <ul className="space-y-6">
                {service.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#FFD500] border-2 border-gray-900 shrink-0 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
                    <span className="text-lg md:text-2xl font-bold text-gray-800 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="my-12 border-t-4 border-gray-900" />

              <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight uppercase">
                How we keep everything aligned
              </h3>
              <ul className="space-y-6">
                {service.alignment.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-brand-primary border-2 border-gray-900 shrink-0 mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
                    <span className="text-lg md:text-2xl font-bold text-gray-800 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Choose a subservice block */}
            <div className="bg-gray-100 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mt-12 md:mt-16">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight uppercase">
                Choose Your Arsenal
              </h2>
              <p className="text-lg md:text-xl font-bold text-gray-600 mb-10">
                Pick the exact service you need under {service.title}. Click "Get quote" to start the conversation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {service.subServices.map((sub) => (
                  <div
                    key={sub.name}
                    className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border-4 border-gray-900 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300"
                  >
                    <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900 uppercase">
                      {sub.name}
                    </h3>
                    <p className="mb-6 leading-relaxed text-gray-700 font-medium">
                      {sub.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                      {sub.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="text-xs md:text-sm font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-white border-2 border-gray-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-gray-900"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/contact?service=${encodeURIComponent(
                        service.title,
                      )}&sub=${encodeURIComponent(sub.name)}`}
                      className="btn-primary text-center py-4 text-sm md:text-base"
                    >
                      Get quote
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            
          </div>

          <aside className="space-y-12">
            <div className="bg-brand-accent rounded-[2rem] p-8 md:p-10 border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-3xl font-black text-gray-900 mb-8 uppercase tracking-tight">How we deliver</h2>
              <ul className="space-y-4">
                {[
                  "A clear discovery call to understand goals and constraints",
                  "A strategy-first plan aligned to your audience and offer",
                  "Professional execution with milestones and updates",
                  "Quality checks (UX, mobile, speed, and consistency)",
                  "Best-practice setup for SEO, tracking, and performance",
                  "Clean handover and guidance so you can move fast after launch",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 bg-white p-4 rounded-xl border-2 border-gray-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-sm md:text-base font-bold text-gray-900">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-sm md:text-base font-bold mt-8 text-gray-800 bg-white/50 p-4 rounded-xl border-2 border-gray-900 border-dashed">
                Deliverables vary based on what you choose — we’ll recommend the best mix after understanding your goals.
              </p>

              <div className="mt-10 pt-8 border-t-4 border-gray-900">
                <p className="text-lg font-black text-gray-900 mb-6 uppercase">
                  Want a plan tailored to your business? Let's talk.
                </p>
                <Link href="/contact" className="btn-primary w-full text-center py-4 bg-white text-gray-900 hover:bg-gray-100 border-2">
                  Contact us
                </Link>
              </div>
            </div>

            <div className="bg-gray-900 rounded-[2rem] p-8 md:p-10 border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-3xl font-black text-white mb-8 uppercase tracking-tight">How it works</h2>
              <ol className="space-y-6">
                {service.howItWorks.map((step, idx) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-black text-gray-900 bg-[#00E5FF] border-2 border-gray-900 shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      {idx + 1}
                    </span>
                    <span className="text-lg md:text-xl font-bold text-gray-100 mt-1 leading-snug">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
