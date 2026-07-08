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
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useRef } from "react";

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

// Physics-driven Magnetic Component
function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.3);
    y.set((clientY - centerY) * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className="inline-block w-full sm:w-auto z-10"
    >
      {children}
    </motion.div>
  );
}

export default function ProjectPageClient({
  project,
}: {
  project: ProjectSerialized;
}) {
  // Parallax for Hero Image
  const imgX = useMotionValue(0);
  const imgY = useMotionValue(0);
  const smoothImgX = useSpring(imgX, { stiffness: 70, damping: 30 });
  const smoothImgY = useSpring(imgY, { stiffness: 70, damping: 30 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const xPos = (clientX - left) / width - 0.5;
    const yPos = (clientY - top) / height - 0.5;
    imgX.set(xPos * 30); // 30px offset
    imgY.set(yPos * 30);
  };

  const handleMouseLeave = () => {
    imgX.set(0);
    imgY.set(0);
  };

  return (
    <main className="pt-32 pb-16 md:pb-32 relative bg-background overflow-hidden selection:bg-brand-primary selection:text-background">
      {/* Premium ambient glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-brand-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-screen-xl">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted hover:text-foreground transition-colors group"
          >
            <span className="w-8 h-px bg-muted group-hover:bg-foreground group-hover:w-12 transition-all duration-300" />
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Hero Section */}
        <section className="mb-24 lg:mb-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Copy (Takes 5 columns) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-8 order-2 lg:order-1"
            >
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full border border-border/60 text-xs font-mono uppercase tracking-widest text-muted">
                  {project.category}
                </span>
                <span className="bg-brand-primary/10 text-brand-primary border border-brand-primary/20 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest flex items-center gap-2">
                  <Sparkles className="w-3 h-3" />
                  Case Study
                </span>
              </div>

              <h1 className="text-[clamp(3rem,5vw,5rem)] font-black text-foreground tracking-tighter leading-[0.9] uppercase">
                {project.title}
              </h1>
              
              <p className="text-lg md:text-xl font-medium text-muted leading-relaxed max-w-xl">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-6">
                <Magnetic>
                  <Link
                    href={`/contact?project=${encodeURIComponent(project.title)}`}
                    className="relative group/btn flex items-center justify-center gap-3 rounded-full bg-foreground px-8 py-4 shadow-2xl transition-transform active:scale-95 overflow-hidden w-full sm:w-auto"
                  >
                    <span className="relative z-10 text-sm font-bold text-background tracking-wide">
                      Start Similar Project
                    </span>
                    <ArrowRight className="w-4 h-4 text-background relative z-10 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Magnetic>

                {project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground hover:text-brand-primary transition-colors"
                  >
                    {/website|e-commerce|ecommerce|shopify|automation|app/i.test(project.category) ? "Live Site" : "View Project"}
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                )}
              </div>
            </motion.div>

            {/* Visual with 3D Mouse Parallax (Takes 7 columns) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="lg:col-span-7 order-1 lg:order-2"
            >
              <div 
                className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden bg-surface shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border border-border/40 group cursor-crosshair"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* Scale up slightly to allow room for parallax shifting */}
                <motion.div
                  className="absolute inset-[-10%]"
                  style={{ 
                    x: smoothImgX, 
                    y: smoothImgY,
                    ...(project.image.startsWith("linear-gradient")
                      ? { background: project.image }
                      : { 
                          backgroundImage: `url(${project.image})`,
                          backgroundSize: 'contain',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                        }
                    )
                  }}
                />
                {/* Subtle Inner Shadow overlay */}
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results / Metrics - Premium Cards */}
        {project.results && project.results.length > 0 && (
          <section className="mb-24 lg:mb-40">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.results.map((result, i) => {
                const Icon = iconsByKey[result.iconKey] || TrendingUp;
                return (
                  <motion.div
                    key={`${result.label}-${result.value}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    className="group relative rounded-[2rem] bg-surface p-8 lg:p-10 border border-border/50 shadow-sm hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden"
                  >
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-background border border-border/60 flex items-center justify-center shrink-0 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <Icon className="w-8 h-8 text-foreground/80 group-hover:text-brand-primary transition-colors duration-500" />
                      </div>
                      <div className="text-4xl md:text-5xl font-black mb-3 tracking-tighter text-foreground group-hover:text-brand-primary transition-colors duration-500">
                        {result.value}
                      </div>
                      <div className="text-xs font-mono uppercase tracking-widest text-muted">
                        {result.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        )}

        {/* Content Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24 lg:mb-40">
          
          {/* Main Content (Takes 7 columns) */}
          <div className="lg:col-span-7 space-y-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-6 flex items-center gap-4">
                <span className="w-8 h-px bg-muted" /> Overview
              </h2>
              <div className="text-2xl lg:text-3xl font-medium text-foreground leading-[1.4] tracking-tight">
                {project.overview ?? "A focused delivery with clear milestones, fast iteration, and a premium end-user experience."}
              </div>
            </motion.div>

            {project.whatWeDid && project.whatWeDid.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="pt-16 border-t border-border/40"
              >
                <h3 className="text-sm font-mono uppercase tracking-widest text-muted mb-10 flex items-center gap-4">
                  <span className="w-8 h-px bg-muted" /> Execution Strategy
                </h3>
                <ul className="space-y-8">
                  {project.whatWeDid.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-6 group">
                      <div className="mt-1">
                        <CheckCircle className="w-6 h-6 text-border group-hover:text-brand-primary transition-colors duration-300" />
                      </div>
                      <span className="text-xl lg:text-2xl font-medium text-foreground leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>

          {/* Sidebar (Takes 5 columns) */}
          <aside className="lg:col-span-5 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-surface rounded-[2rem] p-10 border border-border/40 shadow-sm"
            >
              <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-8">
                {/website|e-commerce|ecommerce|shopify|automation|app/i.test(project.category) ? "Tech Stack" : "Tools & Expertise"}
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-background border border-border/60 text-foreground px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest hover:border-foreground transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {project.linkMeta?.url && (
              <motion.a
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                href={project.linkMeta.url}
                target="_blank"
                rel="noreferrer"
                className="block bg-surface rounded-[2rem] overflow-hidden border border-border/40 shadow-sm hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-500 group"
              >
                <div
                  className="w-full h-48 relative overflow-hidden"
                >
                  <div 
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                    style={
                      project.linkMeta.image
                        ? {
                            backgroundImage: `url(${project.linkMeta.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }
                        : { background: "var(--brand-primary)" }
                    }
                  />
                  <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all duration-500" />
                  
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="inline-flex items-center gap-2 bg-surface/90 backdrop-blur-md border border-border/40 rounded-full px-4 py-2 shadow-sm">
                      {project.linkMeta.favicon && (
                        <img
                          src={project.linkMeta.favicon}
                          alt=""
                          className="w-4 h-4 rounded-sm"
                          loading="lazy"
                        />
                      )}
                      <span className="text-xs font-bold uppercase tracking-widest truncate max-w-[150px]">
                        {project.linkMeta.siteName ?? project.linkMeta.hostname}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="inline-block border border-border/60 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest mb-4 text-muted">
                    {/website|e-commerce|ecommerce|shopify|automation|app/i.test(project.category) ? "Live Preview" : "Live Link"}
                  </div>
                  <h3 className="text-xl font-bold leading-snug mb-3 text-foreground group-hover:text-brand-primary transition-colors">
                    {project.linkMeta.title ?? project.websiteUrl}
                  </h3>
                  {project.linkMeta.description && (
                    <p className="text-sm text-muted line-clamp-2 leading-relaxed">
                      {project.linkMeta.description}
                    </p>
                  )}
                  <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground group-hover:text-brand-primary transition-colors">
                    {/website|e-commerce|ecommerce|shopify|automation|app/i.test(project.category) ? "Visit Website" : "View Online"}
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </motion.a>
            )}
          </aside>
        </section>

        {/* Dynamic CTA */}
        <section className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-brand-peach rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden border border-border/40 shadow-sm"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-black text-foreground mb-8 leading-[0.9] tracking-tighter uppercase">
                Want a <span className="italic font-serif">similar</span> outcome?
              </h2>
              <p className="text-lg md:text-xl font-medium text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                Share your goals and we&apos;ll propose the fastest, cleanest plan to get there. No corporate fluff.
              </p>
              
              <Magnetic>
                <div className="flex justify-center w-full">
                  <Link
                    href={`/contact?project=${encodeURIComponent(project.title)}`}
                    className="group relative overflow-hidden flex items-center justify-center gap-3 rounded-full bg-foreground px-10 py-5 transition-transform active:scale-95"
                  >
                    <span className="relative z-10 text-sm font-bold text-background uppercase tracking-widest">
                      Let&apos;s Talk Business
                    </span>
                    <ArrowRight className="w-4 h-4 text-background relative z-10 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Magnetic>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
