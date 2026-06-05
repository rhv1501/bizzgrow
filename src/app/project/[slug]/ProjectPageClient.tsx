"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  TrendingUp,
  Users,
  DollarSign,
  Sparkles,
  Rocket,
  CheckCircle
} from "lucide-react";
import {
  useScrollAnimation,
  useStaggerAnimation,
} from "../../hooks/useScrollAnimation";
import { motion } from "framer-motion";

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

  return (
    <main className="pt-32 pb-16 md:pb-32 relative bg-white overflow-hidden selection:bg-brand-primary selection:text-white">
      {/* Brutalist Grid Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="mb-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm md:text-lg font-black text-gray-900 hover:text-brand-primary transition-colors border-2 border-gray-900 bg-white px-4 py-2 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wider"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
        </div>

        {/* Hero Section */}
        <section ref={heroRef} className="mb-16 md:mb-24">
          <div className="bg-brand-accent rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 lg:p-16 border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
            
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
              {/* Copy */}
              <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white text-gray-900 border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-4 py-1.5 rounded-full text-xs md:text-sm font-black tracking-widest uppercase">
                    {project.category}
                  </span>
                  <span className="bg-brand-primary text-white border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-4 py-1.5 rounded-full text-xs md:text-sm font-black tracking-widest uppercase flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Case Study
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.1]">
                  {project.title}
                </h1>
                
                <p className="text-lg md:text-2xl font-bold text-gray-800 leading-relaxed max-w-xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary bg-white text-base md:text-lg px-6 py-4 border-4"
                    >
                      {/website|e-commerce|ecommerce|shopify|automation|app/i.test(project.category) ? "Visit Live Site" : "View Online"}
                      <ExternalLink className="w-5 h-5 ml-2" />
                    </a>
                  )}

                  <Link
                    href={`/contact?project=${encodeURIComponent(project.title)}`}
                    className="btn-primary text-base md:text-lg px-6 py-4"
                  >
                    Build Something Similar
                    <Rocket className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Visual */}
              <div className="order-1 lg:order-2">
                <div
                  className="w-full aspect-[4/3] md:aspect-square lg:aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-gray-100"
                  style={{ background: project.image }}
                >
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results / Metrics */}
        {project.results && project.results.length > 0 && (
          <section
            className="mb-16 md:mb-24"
            ref={resultsRef}
            aria-label="Project results"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
              {project.results.map((result, i) => {
                const Icon = iconsByKey[result.iconKey] || TrendingUp;
                const colors = ['bg-brand-mint', 'bg-brand-primary text-white', 'bg-[#FFD500]'];
                const bgColor = colors[i % colors.length];
                
                return (
                  <div
                    key={`${result.label}-${result.value}`}
                    className={`result-card ${bgColor} rounded-[2rem] p-8 border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300 flex items-center gap-6`}
                  >
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-900 flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <Icon className="w-8 h-8 text-gray-900" />
                    </div>
                    <div>
                      <div className="text-3xl md:text-4xl lg:text-5xl font-black mb-1 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                        {result.value}
                      </div>
                      <div className="text-sm md:text-base font-bold uppercase tracking-wider opacity-90">
                        {result.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Content Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12" ref={contentRef}>
            <div className="bg-white rounded-[2rem] p-8 md:p-12 border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Overview</h2>
              <div className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed space-y-6">
                <p>
                  {project.overview ?? "A focused delivery with clear milestones, fast iteration, and a premium end-user experience."}
                </p>
              </div>

              {project.whatWeDid && project.whatWeDid.length > 0 && (
                <div className="mt-12 pt-10 border-t-4 border-gray-900">
                  <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 tracking-tight">Execution Strategy</h3>
                  <ul ref={whatWeDidRef} className="space-y-6">
                    {project.whatWeDid.map((item, idx) => (
                      <li
                        key={idx}
                        className="whatwedid-item flex items-start gap-4"
                      >
                        <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-brand-primary shrink-0 mt-1" />
                        <span className="text-lg md:text-2xl font-bold text-gray-800 leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-10" aria-label={/website|e-commerce|ecommerce|shopify|automation|app/i.test(project.category) ? "Tech stack" : "Capabilities"}>
            <div className="bg-gray-100 rounded-[2rem] p-8 md:p-10 border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 tracking-tight">
                {/website|e-commerce|ecommerce|shopify|automation|app/i.test(project.category) ? "Tech Stack" : "Tools & Expertise"}
              </h2>
              <div ref={techRef} className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="tech-pill bg-white border-2 border-gray-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-gray-900 px-4 py-2 rounded-full text-sm md:text-base font-black tracking-wider uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.linkMeta?.url && (
              <a
                href={project.linkMeta.url}
                target="_blank"
                rel="noreferrer"
                className="block bg-white rounded-[2rem] overflow-hidden border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all group"
              >
                <div
                  className="w-full h-40 relative border-b-4 border-gray-900"
                  style={
                    project.linkMeta.image
                      ? {
                          backgroundImage: `url(${project.linkMeta.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : { background: "var(--brand-primary)" }
                  }
                >
                  <div className="absolute inset-0 bg-gray-900/30 group-hover:bg-gray-900/10 transition-colors" />
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 bg-white border-2 border-gray-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-full px-3 py-1.5">
                      {project.linkMeta.favicon && (
                        <img
                          src={project.linkMeta.favicon}
                          alt=""
                          className="w-4 h-4 rounded-sm"
                          loading="lazy"
                        />
                      )}
                      <span className="text-xs font-black uppercase tracking-widest truncate max-w-[150px]">
                        {project.linkMeta.siteName ?? project.linkMeta.hostname}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="inline-block bg-[#FFD500] border-2 border-gray-900 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {/website|e-commerce|ecommerce|shopify|automation|app/i.test(project.category) ? "Live Preview" : "Live Link"}
                  </div>
                  <h3 className="text-xl font-black leading-snug mb-2 text-gray-900">
                    {project.linkMeta.title ?? project.websiteUrl}
                  </h3>
                  {project.linkMeta.description && (
                    <p className="text-sm font-medium text-gray-600 line-clamp-2">
                      {project.linkMeta.description}
                    </p>
                  )}
                  <div className="mt-6 flex items-center gap-2 text-sm font-black uppercase tracking-widest text-brand-primary group-hover:text-gray-900 transition-colors">
                    {/website|e-commerce|ecommerce|shopify|automation|app/i.test(project.category) ? "Visit Website" : "View Online"}
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </a>
            )}
          </aside>
        </section>

        {/* Dynamic CTA */}
        <section className="mt-20 md:mt-32" ref={ctaRef}>
          <div className="bg-brand-secondary rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-20 border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern opacity-20"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                Want a <span className="bg-[#FFD500] text-gray-900 px-3 py-1 rotate-2 inline-block border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">similar</span> outcome?
              </h2>
              <p className="text-xl md:text-2xl font-bold text-gray-100 mb-10">
                Share your goals and we'll propose the fastest, cleanest plan to get there. No corporate fluff.
              </p>
              <Link
                href={`/contact?project=${encodeURIComponent(project.title)}`}
                className="btn-primary bg-white text-gray-900 hover:bg-gray-100 px-8 py-5 text-xl w-full sm:w-auto inline-flex justify-center"
              >
                Let's Talk Business
                <ArrowRight className="w-6 h-6 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
