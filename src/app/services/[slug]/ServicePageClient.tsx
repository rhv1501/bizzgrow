"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Layers,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";

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

import type { Service } from "../catalog";

export default function ServicePageClient({ service }: { service: Service }) {
  const [activeArsenal, setActiveArsenal] = useState<number | null>(0);

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
    imgX.set(xPos * 30);
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
        <div className="absolute -top-[10%] -left-[10%] w-[120%] h-150 bg-brand-primary/5 blur-[150px] mix-blend-normal" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted hover:text-foreground transition-colors group"
          >
            <span className="w-8 h-px bg-muted group-hover:bg-foreground group-hover:w-12 transition-all duration-300" />
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Services
          </Link>
        </motion.div>

        {/* Hero Section */}
        <section className="mb-24 lg:mb-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Copy (Takes 7 columns) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="flex flex-wrap gap-3">
                <span className="bg-brand-primary/10 text-brand-primary border border-brand-primary/20 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest flex items-center gap-2">
                  <Layers className="w-3 h-3" />
                  Service Category
                </span>
              </div>

              <h1 className="max-w-[11ch] text-[clamp(3rem,5.5vw,7rem)] font-black text-foreground tracking-tighter leading-none uppercase wrap-break-word text-balance">
                {service.title}
              </h1>

              <p className="text-2xl md:text-3xl font-medium text-foreground leading-snug tracking-tight max-w-2xl">
                {service.headline}
              </p>

              <p className="text-lg md:text-xl font-medium text-muted leading-relaxed max-w-xl">
                {service.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-6">
                <Magnetic>
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="relative group/btn flex items-center justify-center gap-3 rounded-full bg-foreground px-8 py-4 shadow-2xl transition-transform active:scale-95 overflow-hidden w-full sm:w-auto"
                  >
                    <span className="relative z-10 text-sm font-bold text-background tracking-wide">
                      Discuss Your Project
                    </span>
                    <ArrowRight className="w-4 h-4 text-background relative z-10 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Magnetic>
              </div>
            </motion.div>

            {/* Visual with 3D Mouse Parallax (Takes 5 columns) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div
                className="relative w-full aspect-4/5 rounded-4xl overflow-hidden bg-surface shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border border-border/40 group cursor-crosshair flex items-center justify-center"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* Scale up slightly to allow room for parallax shifting */}
                <motion.div
                  className="absolute inset-[-10%] flex items-center justify-center pointer-events-none"
                  style={{ x: smoothImgX, y: smoothImgY }}
                >
                  <Image
                    src={`/services/${service.slug}.png`}
                    alt={`${service.title} Illustration`}
                    width={500}
                    height={500}
                    className="object-contain w-[80%] h-[80%] drop-shadow-2xl opacity-90"
                    unoptimized
                  />
                </motion.div>
                {/* Subtle Inner Shadow overlay */}
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.05)] pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24 lg:mb-40">
          {/* Main Content (Takes 7 columns) */}
          <div className="lg:col-span-7 space-y-24">
            {/* Boost Outcomes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-10 flex items-center gap-4">
                <span className="w-8 h-px bg-muted" /> Strategic Outcomes
              </h2>
              <h3 className="text-3xl md:text-5xl font-black text-foreground mb-12 tracking-tighter uppercase leading-none">
                How this transforms <br />{" "}
                <span className="italic font-serif text-brand-primary">
                  your business.
                </span>
              </h3>
              <ul className="space-y-8">
                {service.outcomes.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-6 group">
                    <div className="mt-1">
                      <Sparkles className="w-6 h-6 text-border group-hover:text-brand-primary transition-colors duration-300" />
                    </div>
                    <span className="text-xl lg:text-2xl font-medium text-foreground leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="w-full h-px bg-border/40" />

            {/* Alignment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-10 flex items-center gap-4">
                <span className="w-8 h-px bg-muted" /> Quality Control
              </h2>
              <h3 className="text-3xl md:text-5xl font-black text-foreground mb-12 tracking-tighter uppercase leading-none">
                How we keep <br /> everything{" "}
                <span className="italic font-serif text-brand-primary">
                  aligned.
                </span>
              </h3>
              <ul className="space-y-8">
                {service.alignment.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-6 group">
                    <div className="mt-1">
                      <CheckCircle className="w-6 h-6 text-border group-hover:text-brand-primary transition-colors duration-300" />
                    </div>
                    <span className="text-xl lg:text-2xl font-medium text-foreground leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Choose Your Arsenal - Editorial Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mt-32"
            >
              <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-10 flex items-center gap-4">
                <span className="w-8 h-px bg-muted" /> Choose Your Arsenal
              </h2>
              <div className="w-full border-t border-border/40">
                {service.subServices.map(
                  (
                    sub: {
                      name: string;
                      description: string;
                      keywords: string[];
                    },
                    idx: number,
                  ) => {
                    const isActive = activeArsenal === idx;
                    return (
                      <div
                        key={sub.name}
                        className="border-b border-border/40 group overflow-hidden"
                      >
                        <button
                          onClick={() =>
                            setActiveArsenal(isActive ? null : idx)
                          }
                          className="w-full text-left py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-surface/30 transition-colors duration-500 px-2 sm:px-4"
                        >
                          <h3
                            className={`text-[clamp(1.5rem,3vw,3rem)] font-medium tracking-tight uppercase transition-all duration-500 origin-left ${isActive ? "text-brand-primary italic font-serif scale-105" : "text-foreground group-hover:translate-x-4"}`}
                          >
                            {sub.name}
                          </h3>
                          <div className="flex items-center gap-6">
                            <span className="text-xs font-mono uppercase tracking-widest text-muted hidden md:block">
                              0{idx + 1}
                            </span>
                            <div
                              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${isActive ? "border-brand-primary bg-brand-primary text-background rotate-45" : "border-border/40 text-foreground group-hover:border-foreground"}`}
                            >
                              <ArrowRight className="w-5 h-5" />
                            </div>
                          </div>
                        </button>

                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{
                                duration: 0.5,
                                ease: [0.23, 1, 0.32, 1],
                              }}
                            >
                              <div className="pb-12 md:pb-16 px-2 sm:px-4">
                                <div className="grid md:grid-cols-2 gap-12 pt-4">
                                  <p className="text-lg md:text-xl text-muted leading-relaxed max-w-xl">
                                    {sub.description}
                                  </p>
                                  <div className="flex flex-col items-start md:items-end gap-8">
                                    <div className="flex flex-wrap gap-2 justify-start md:justify-end w-full">
                                      {sub.keywords.map((keyword: string) => (
                                        <span
                                          key={keyword}
                                          className="text-[10px] font-mono uppercase tracking-widest px-4 py-2 rounded-full bg-surface border border-border/40 text-foreground"
                                        >
                                          {keyword}
                                        </span>
                                      ))}
                                    </div>
                                    <Link
                                      href={`/contact?service=${encodeURIComponent(service.title)}&sub=${encodeURIComponent(sub.name)}`}
                                      className="group/cta flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-foreground hover:text-brand-primary transition-colors"
                                    >
                                      Request Quote
                                      <span className="w-8 h-px bg-foreground group-hover/cta:bg-brand-primary transition-colors" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  },
                )}
              </div>
            </motion.div>
          </div>

          {/* Sidebar (Takes 5 columns) */}
          <aside className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-surface rounded-4xl p-10 border border-border/40 shadow-sm"
            >
              <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-8">
                Process
              </h2>
              <h3 className="text-3xl font-black text-foreground mb-8 uppercase tracking-tight">
                How we deliver
              </h3>
              <ul className="space-y-4 mb-10">
                {[
                  "A clear discovery call to understand goals and constraints",
                  "A strategy-first plan aligned to your audience and offer",
                  "Professional execution with milestones and updates",
                  "Quality checks (UX, mobile, speed, and consistency)",
                  "Best-practice setup for SEO, tracking, and performance",
                  "Clean handover and guidance so you can move fast after launch",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-background transition-colors duration-300"
                  >
                    <span className="text-xs font-mono text-muted pt-1 shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="text-sm font-medium text-foreground leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-8 border-t border-border/40 text-sm font-medium text-muted leading-relaxed">
                Deliverables vary based on what you choose — we’ll recommend the
                best mix after understanding your goals.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-brand-mint rounded-4xl p-10 text-foreground border border-border/40 shadow-sm"
            >
              <h2 className="text-sm font-mono uppercase tracking-widest text-foreground/60 mb-8">
                Methodology
              </h2>
              <h3 className="text-3xl font-black mb-10 uppercase tracking-tight text-foreground">
                How it works
              </h3>
              <ol className="space-y-8">
                {service.howItWorks.map((step: string, idx: number) => (
                  <li
                    key={idx}
                    className="flex items-start gap-5 relative group"
                  >
                    <span className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-mono border border-foreground/20 text-foreground shrink-0 transition-colors group-hover:bg-foreground group-hover:border-foreground group-hover:text-surface">
                      {idx + 1}
                    </span>
                    <span className="text-lg font-medium mt-1 leading-snug text-foreground">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </motion.div>
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
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />

            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-black text-foreground mb-8 leading-[0.9] tracking-tighter uppercase">
                Ready to <span className="italic font-serif">dominate?</span>
              </h2>
              <p className="text-lg md:text-xl font-medium text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                Let&apos;s build an ecosystem that forces your market to pay
                attention. No templates, no fluff.
              </p>

              <Magnetic>
                <div className="flex justify-center w-full">
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="group relative overflow-hidden flex items-center justify-center gap-3 rounded-full bg-foreground px-10 py-5 transition-transform active:scale-95"
                  >
                    <span className="relative z-10 text-sm font-bold text-background uppercase tracking-widest">
                      Start Your Project
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
