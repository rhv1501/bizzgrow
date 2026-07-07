"use client";

import React, { useRef } from "react";
import Team from "../components/Team";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Scrubbing text reveal effect setup
  const textToReveal =
    "Most agencies sell you vanity metrics. We build engines that scale.";
  const words = textToReveal.split(" ");

  return (
    <main
      ref={containerRef}
      className="bg-background min-h-screen selection:bg-brand-mint selection:text-foreground"
    >
      {/* 1. CREATIVE PARALLAX HERO WITH INLINE IMAGERY */}
      <section className="relative h-dvh flex flex-col justify-center overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-125 h-125 bg-brand-peach/20 rounded-full blur-[100px] mix-blend-multiply pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-150 h-150 bg-brand-mint/20 rounded-full blur-[120px] mix-blend-multiply pointer-events-none" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div style={{ y: heroY, opacity: heroOpacity }}>
            <p className="text-xs font-mono text-muted mb-8 uppercase tracking-widest flex items-center gap-4">
              <span className="w-8 h-px bg-muted" /> About BizzGrow
            </p>
            <h1 className="text-[clamp(3.5rem,7vw,8rem)] font-medium tracking-tighter text-foreground leading-tight max-w-6xl">
              We build digital ecosystems that{" "}
              <span className="italic text-brand-primary font-serif">
                force
              </span>{" "}
              people to pay attention.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. SCRUBBING TEXT REVEAL (Awwwards classic) */}
      <section className="py-32 md:py-48 border-b border-border/60 relative">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-medium leading-snug tracking-tight text-foreground flex flex-wrap justify-center gap-x-4 gap-y-2">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0.1, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-10%", once: false }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>
      </section>

      {/* 3. STACKING CARDS GRID (Awwwards feature structure) */}
      <section className="py-32 border-b border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Projects Shipped",
                value: "50+",
                color: "bg-brand-mint/40",
              },
              {
                label: "Average Rating",
                value: "4.9",
                color: "bg-brand-peach/40",
              },
              {
                label: "In-House Team",
                value: "100%",
                color: "bg-brand-primary/30",
              },
              {
                label: "Full Service",
                value: "360°",
                color: "bg-[#f3cfd8]/40",
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.1,
                  ease: [0.23, 1, 0.32, 1],
                }}
                whileHover={{ y: -10 }}
                className={`flex flex-col items-center justify-center p-12 rounded-4xl border border-border/50 ${stat.color} backdrop-blur-sm cursor-pointer`}
              >
                <span className="text-6xl md:text-7xl font-medium text-foreground tracking-tighter">
                  {stat.value}
                </span>
                <span className="text-xs font-mono text-foreground/70 uppercase tracking-widest mt-6 text-center">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ASYMMETRIC STICKY SCROLL */}
      <section className="py-32 md:py-48 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-40">
              <div className="w-16 h-16 rounded-full bg-brand-primary/20 border border-brand-primary/40 flex items-center justify-center mb-8">
                <div className="w-2 h-2 rounded-full bg-brand-primary animate-ping" />
              </div>
              <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-medium text-foreground tracking-tight leading-tight">
                The brutal truths we live by.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-32 mt-12 lg:mt-0">
              {[
                {
                  q: "\"If it doesn't sell, it isn't creative.\"",
                  author: "David Ogilvy",
                  type: "Quote",
                  desc: "Design without strategy is just art. We build websites that are clear, useful, and easy to trust.",
                },
                {
                  q: "75% of users judge credibility by design.",
                  author: "Fact",
                  type: "Research",
                  desc: "A beautiful website isn't a luxury, it's a baseline requirement for trust.",
                },
                {
                  q: "Speed is Revenue.",
                  author: "Education",
                  type: "Technical",
                  desc: "A slower site loses attention quickly. We build fast pages that feel easy to use.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                  className="relative pl-8 md:pl-12 border-l border-border group"
                >
                  <div className="absolute -left-px top-0 w-0.5 h-0 bg-foreground group-hover:h-full transition-all duration-700 ease-out" />
                  <p className="text-xs font-mono text-muted uppercase tracking-widest mb-6">
                    {item.type} &mdash; {item.author}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-medium text-foreground leading-snug mb-6">
                    {item.q}
                  </h3>
                  <p className="text-xl text-muted leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FULL WIDTH INVERTED CTA/ANTI-PERSONA (Awwwards transition out) */}
      <section className="bg-foreground text-surface py-32 md:py-48 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2
              className="text-[clamp(3rem,6vw,6rem)] font-medium tracking-tight mb-8"
              style={{ color: "var(--color-surface)" }}
            >
              Who we are{" "}
              <span className="italic text-brand-peach font-serif px-2">
                NOT
              </span>{" "}
              for.
            </h2>
            <p className="text-xl text-surface/90 max-w-2xl mx-auto">
              We protect our time and our clients&apos; results fiercely.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16 max-w-5xl mx-auto">
            {[
              {
                t: "You Want Quick Fixes",
                d: "Sustainable growth takes strategic execution. No silver bullets here.",
              },
              {
                t: "You Micromanage",
                d: "You hire us because we are experts. We don't do pixel-pushing on command.",
              },
              {
                t: "You Fear Standing Out",
                d: "If your goal is to look exactly like corporate competitors, we'll scare you.",
              },
              {
                t: "You Lack Vision",
                d: "We partner with founders who want to dominate their market.",
              },
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="w-10 h-10 rounded-full border border-surface/40 flex items-center justify-center mb-6 text-xs font-mono group-hover:bg-brand-peach group-hover:text-foreground transition-colors duration-300">
                  0{idx + 1}
                </div>
                <h3
                  className="text-2xl font-medium mb-4"
                  style={{ color: "var(--color-surface)" }}
                >
                  {item.t}
                </h3>
                <p className="text-surface/80 leading-relaxed text-lg">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Team />
    </main>
  );
}
