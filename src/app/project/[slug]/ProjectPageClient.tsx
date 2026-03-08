"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  TrendingUp,
  Users,
  DollarSign,
  Sparkles,
} from "lucide-react";
import {
  useScrollAnimation,
  useStaggerAnimation,
} from "../../hooks/useScrollAnimation";

export type ProjectResultSerialized = {
  label: string;
  value: string;
  iconKey: "trendingUp" | "users" | "dollarSign";
};

export type ProjectSerialized = {
  slug: string;
  title: string;
  category: string;
  description: string;
  overview?: string;
  whatWeDid?: string[];
  results: ProjectResultSerialized[];
  technologies: string[];
  image: string;
  websiteUrl?: string;
  linkMeta?: {
    url: string;
    hostname: string;
    title?: string;
    description?: string;
    image?: string;
    siteName?: string;
    favicon?: string;
  };
};

const iconsByKey = {
  trendingUp: TrendingUp,
  users: Users,
  dollarSign: DollarSign,
} as const;

export default function ProjectPageClient({
  project,
}: {
  project: ProjectSerialized;
}) {
  const heroRef = useScrollAnimation<HTMLElement>();
  const resultsRef = useStaggerAnimation<HTMLElement>(".result-card");
  const contentRef = useScrollAnimation<HTMLDivElement>();
  const whatWeDidRef = useStaggerAnimation<HTMLUListElement>(".whatwedid-item");
  const techRef = useStaggerAnimation<HTMLDivElement>(".tech-pill");
  const ctaRef = useScrollAnimation<HTMLElement>();
  const liveRef = useScrollAnimation<HTMLAnchorElement>();

  return (
    <main className="py-20 relative overflow-hidden">
      {/* Background accents (uses existing Tailwind tokens already used elsewhere) */}
      <div className="absolute top-24 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
      <div
        className="absolute bottom-24 left-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="site-container mx-auto relative z-10">
        <div className="mb-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>

        {/* Hero */}
        <section ref={heroRef} className="card card-premium overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Visual */}
            <div className="lg:col-span-2">
              <div
                className="w-full h-56 lg:h-full min-h-[220px] rounded-2xl overflow-hidden relative"
                style={{ background: project.image }}
              >
                <div className="absolute inset-0 bg-black/15" />
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <span className="bg-white/80 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium inline-flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Case Study
                  </span>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="lg:col-span-3 space-y-5">
              <h1 className="text-4xl lg:text-5xl font-bold">
                {project.title}
              </h1>
              <p className="text-lg leading-relaxed muted">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                {project.websiteUrl ? (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline px-5 py-3"
                  >
                    Visit website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : null}

                <Link
                  href={`/contact?project=${encodeURIComponent(project.title)}`}
                  className="btn btn-primary px-5 py-3"
                >
                  Build something similar
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section
          className="mt-10"
          ref={resultsRef}
          aria-label="Project results"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.results.map((result) => {
              const Icon = iconsByKey[result.iconKey];
              return (
                <div
                  key={`${result.label}-${result.value}`}
                  className="card card-premium card-hover result-card"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-blue-50">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">
                        {result.value}
                      </div>
                      <div className="text-sm muted">{result.label}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Content */}
        <section className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 card card-premium" ref={contentRef}>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="leading-relaxed">
              {project.overview ??
                "A focused delivery with clear milestones, fast iteration, and a premium end-user experience."}
            </p>

            {project.whatWeDid && project.whatWeDid.length > 0 ? (
              <div className="mt-8">
                <h3 className="text-lg font-bold mb-3">What we did</h3>
                <ul ref={whatWeDidRef} className="space-y-3">
                  {project.whatWeDid.map((item) => (
                    <li
                      key={item}
                      className="whatwedid-item flex items-start gap-3"
                    >
                      <span
                        className="mt-2 w-2 h-2 rounded-full"
                        style={{ background: "var(--brand-primary)" }}
                      />
                      <span className="muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <aside className="card card-premium" aria-label="Tech stack">
            <h2 className="text-2xl font-bold mb-4">Tech stack</h2>
            <div ref={techRef} className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="tech-pill bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.linkMeta?.url ? (
              <a
                ref={liveRef}
                href={project.linkMeta.url}
                target="_blank"
                rel="noreferrer"
                className="mt-8 block card card-premium card-hover p-0 overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2"
                aria-label={`Open live site: ${project.linkMeta.hostname}`}
                style={{ outlineColor: "var(--brand-primary)" }}
              >
                <div
                  className="w-full h-32 sm:h-36 relative"
                  style={
                    project.linkMeta.image
                      ? {
                          backgroundImage: `url(${project.linkMeta.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : { background: "var(--brand-gradient-subtle)" }
                  }
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/25" />

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 min-w-0">
                      {project.linkMeta.favicon ? (
                        <img
                          src={project.linkMeta.favicon}
                          alt=""
                          className="w-4 h-4 rounded-sm"
                          loading="lazy"
                        />
                      ) : null}
                      <span className="text-xs font-semibold truncate">
                        {project.linkMeta.siteName ?? project.linkMeta.hostname}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs font-semibold text-primary">
                        Open
                      </span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs font-semibold">LIVE SITE</p>

                  <h3 className="mt-2 text-base font-bold leading-snug">
                    {project.linkMeta.title ?? project.websiteUrl}
                  </h3>

                  {project.linkMeta.description ? (
                    <p className="mt-2 text-sm muted line-clamp-3">
                      {project.linkMeta.description}
                    </p>
                  ) : null}

                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Open in new tab
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </a>
            ) : null}
          </aside>
        </section>

        {/* CTA */}
        <section className="mt-10" ref={ctaRef}>
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Want a similar outcome?</h2>
            <p className="muted mb-6">
              Share your goals and we&apos;ll propose the fastest, cleanest plan
              to get there.
            </p>
            <Link
              href={`/contact?project=${encodeURIComponent(project.title)}`}
              className="btn btn-primary px-8 py-4"
            >
              Get a quote
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
