"use client";

import type { RefObject } from "react";
import { Monitor, TrendingUp, Palette, Code, Search, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  useScrollAnimation,
  useStaggerAnimation,
} from "../hooks/useScrollAnimation";
import { services } from "../services/catalog";

const Services = () => {
  const router = useRouter();
  const pathname = usePathname();
  const titleRef = useScrollAnimation();
  const gridRef = useStaggerAnimation(".service-card");

  const iconsBySlug = {
    website: Monitor,
    marketing: TrendingUp,
    branding: Palette,
    development: Code,
    seo: Search,
    automation: Zap,
  } as const;

  return (
    <section
      id="services"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div
        className="absolute bottom-20 left-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className="max-w-4xl mx-auto text-center mb-20"
          ref={titleRef as RefObject<HTMLDivElement>}
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 text-sm font-medium text-blue-600 mb-6">
            <Zap className="w-4 h-4" />
            Our Services
          </div>

          <h2
            className="text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Comprehensive Solutions for{" "}
            <span style={{ color: "var(--text-accent)" }}>Digital Success</span>
          </h2>

          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Everything your business needs to thrive in the digital landscape.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={gridRef as RefObject<HTMLDivElement>}
        >
          {services.map((service) => {
            const IconComponent =
              iconsBySlug[service.slug as keyof typeof iconsBySlug] ?? Zap;
            const topOutcomes = service.outcomes.slice(0, 3);
            const topSubs = service.subServices.slice(0, 3);

            return (
              <div
                key={service.slug}
                role="link"
                tabIndex={0}
                aria-label={`View ${service.title} service`}
                onClick={() => router.push(`/services/${service.slug}`)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    router.push(`/services/${service.slug}`);
                  }
                }}
                className="card card-hover card-premium service-card group block cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ outlineColor: "var(--brand-primary)" }}
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-blue-600 to-blue-500">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {service.title}
                  </h3>

                  <p
                    className="font-semibold mb-4"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {service.headline}
                  </p>

                  <ul className="space-y-2">
                    {topOutcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-3 text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <div
                          className="w-2 h-2 rounded-full mt-2"
                          style={{ backgroundColor: "var(--brand-primary)" }}
                        ></div>
                        {outcome}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {topSubs.map((sub) => (
                      <span
                        key={sub.name}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {sub.name}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 text-blue-600 font-semibold transition-colors duration-200 group-hover:gap-3">
                      View details
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>

                    <Link
                      href={`/contact?service=${encodeURIComponent(
                        service.title,
                      )}`}
                      onClick={(e) => e.stopPropagation()}
                      className="btn btn-primary px-4 py-2 text-sm"
                    >
                      Get quote
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          {pathname === "/services" ? (
            <Link href="/contact" className="btn btn-primary px-8 py-4 text-lg">
              Not sure what to pick? Get a quote
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <Link
              href="/services"
              className="btn btn-primary px-8 py-4 text-lg"
            >
              Explore All Services
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
