"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Target, Coffee, Users, Rocket, Sparkles } from "lucide-react";

export default function CareersPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Scrubbing text reveal effect setup
  const textToReveal =
    "We are looking for aggressive problem solvers and creative rule-breakers obsessed with quality.";
  const words = textToReveal.split(" ");

  return (
    <main
      ref={containerRef}
      className="bg-background min-h-screen selection:bg-brand-mint selection:text-foreground"
    >
      {/* 1. CREATIVE PARALLAX HERO */}
      <section className="relative h-dvh flex flex-col justify-center overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-125 h-125 bg-brand-mint/20 rounded-full blur-[100px] mix-blend-multiply pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/4 w-150 h-150 bg-brand-primary/10 rounded-full blur-[120px] mix-blend-multiply pointer-events-none" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
          <motion.div style={{ y: heroY, opacity: heroOpacity }}>
            <p className="text-xs font-mono text-muted mb-8 uppercase tracking-widest flex items-center gap-4">
              <span className="w-8 h-px bg-muted" /> Join BizzGrow
            </p>
            <h1 className="text-[clamp(3.5rem,7vw,8rem)] font-medium tracking-tighter text-foreground leading-tight max-w-5xl">
              Stop doing{" "}
              <span className="italic text-brand-primary font-serif">
                boring
              </span>{" "}
              work.
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-muted max-w-2xl leading-relaxed">
              Build premium digital experiences and growth systems for ambitious businesses that refuse to blend in.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. SCRUBBING TEXT REVEAL */}
      <section className="py-32 md:py-48 border-b border-border/60 relative bg-surface/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-snug tracking-tight text-foreground flex flex-wrap justify-center gap-x-4 gap-y-2">
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

      {/* 3. THE ECOSYSTEM (EDITORIAL MINIMALISM) */}
      <section className="py-32 md:py-48 border-b border-border/60 relative">
        {/* Subtle background gradient to frame the section */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface/20 to-transparent pointer-events-none"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-24 md:mb-32 text-center max-w-4xl mx-auto">
            <h2 className="text-[clamp(3rem,6vw,6rem)] font-medium tracking-tight leading-none mb-8">
              The Ecosystem.
            </h2>
            <p className="text-xl md:text-2xl text-muted leading-relaxed">
              We designed our culture to get out of your way so you can do your best work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 lg:gap-y-32 relative">
            {/* Center line for desktop */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-border/40 -translate-x-1/2"></div>
            
            {[
              {
                icon: Coffee,
                label: "Hybrid Work",
                desc: "Collaborate in person when it matters, focus from home when you need to. We measure output, not hours.",
              },
              {
                icon: Target,
                label: "No Bureaucracy",
                desc: "We hate red tape. You have the autonomy to make decisions and ship fast. Permission is assumed.",
              },
              {
                icon: Users,
                label: "Top-Tier Talent",
                desc: "You'll be working alongside people who are unreasonably good at what they do. Iron sharpens iron.",
              },
              {
                icon: Rocket,
                label: "Massive Impact",
                desc: "You aren't just a cog in a machine. The work you do directly scales businesses and changes trajectories.",
              },
            ].map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{
                    duration: 0.8,
                    delay: (idx % 2) * 0.1,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className={`flex flex-col group ${idx % 2 !== 0 ? 'md:pl-16' : 'md:pr-16'}`}
                >
                  <div className="w-16 h-16 rounded-2xl bg-surface/50 flex items-center justify-center mb-8 border border-border/50 group-hover:-translate-y-2 group-hover:bg-brand-mint/20 transition-all duration-500 shadow-sm">
                    <Icon className="w-8 h-8 text-foreground" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight mb-4 group-hover:text-brand-primary transition-colors duration-300">
                    {perk.label}
                  </h3>
                  <p className="text-lg md:text-xl text-muted leading-relaxed">
                    {perk.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3.5 THE REALITY CHECK */}
      <section className="py-32 border-b border-border/60 relative overflow-hidden bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium tracking-tight mb-4">
              The Reality Check.
            </h2>
            <p className="text-xl md:text-2xl text-muted max-w-2xl">
              See the difference between standard corporate and the BizzGrow way.
            </p>
          </div>

          <div className="border-t border-border/40">
            {[
              { bad: "Endless Zoom Meetings", good: "Asynchronous Execution", color: "bg-brand-mint" },
              { bad: "Micromanagement", good: "Radical Autonomy", color: "bg-brand-peach" },
              { bad: "Corporate Jargon", good: "Straight Talk", color: "bg-brand-primary" },
              { bad: "Pixel-Pushing on Command", good: "Strategic Ownership", color: "bg-[#f3cfd8]" },
            ].map((item, i) => (
              <div 
                key={i}
                className="group relative border-b border-border/40 py-8 md:py-16 transition-colors duration-500 md:hover:bg-surface/50 md:cursor-crosshair overflow-hidden"
              >
                {/* Background reveal on hover (desktop only) */}
                <div className={`hidden md:block absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 ${item.color}`}></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-6 px-2 md:px-8">
                  {/* Bad trait - Strikethrough by default on mobile, on hover on desktop */}
                  <h3 className="text-2xl md:text-5xl font-medium text-muted/40 line-through md:no-underline md:group-hover:line-through transition-all duration-300">
                    {item.bad}
                  </h3>
                  
                  {/* Good trait - Always visible on mobile, reveal on hover on desktop */}
                  <div className="block md:absolute md:right-8 md:top-1/2 md:-translate-y-1/2 md:opacity-0 md:translate-y-8 md:group-hover:opacity-100 md:group-hover:-translate-y-1/2 transition-all duration-500 ease-out mt-1 md:mt-0">
                    <h3 className="text-2xl md:text-5xl font-medium text-foreground tracking-tight flex items-center gap-3 md:gap-4">
                      <Sparkles className="w-5 h-5 md:w-8 md:h-8 text-brand-primary shrink-0" />
                      {item.good}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ASYMMETRIC STICKY SCROLL */}
      <section className="py-32 md:py-48 border-b border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-40">
              <div className="w-16 h-16 rounded-full bg-brand-primary/20 border border-brand-primary/40 flex items-center justify-center mb-8">
                <Sparkles className="w-6 h-6 text-brand-primary" />
              </div>
              <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-medium text-foreground tracking-tight leading-tight">
                Our core philosophy.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-32 mt-12 lg:mt-0">
              {[
                {
                  title: "Excellence over Ego",
                  type: "Culture",
                  desc: "We don't care who had the idea, we only care that it's the best idea. We leave our egos at the door and focus entirely on the output.",
                },
                {
                  title: "Ship Fast, Break Things",
                  type: "Execution",
                  desc: "Perfectionism is a disease. We believe in rapid prototyping, testing in the real world, and iterating based on actual data.",
                },
                {
                  title: "Radical Ownership",
                  type: "Mindset",
                  desc: "If you touch it, you own it. We empower our team to take full responsibility for their work from conceptualization to deployment.",
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
                    {item.type}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-medium text-foreground leading-snug mb-6">
                    {item.title}
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

      {/* 4.5 THE ANTI-INTERVIEW & MARQUEE */}
      <section className="py-24 border-b border-border/60 overflow-hidden relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">The Anti-Interview.</h2>
          <p className="text-xl text-muted max-w-xl">No automated ATS. No generic cover letters. No 7-round interviews asking what your greatest weakness is.</p>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-border -z-10 -translate-y-1/2"></div>
            {[
              {
                step: "01",
                title: "The Pitch",
                desc: "Don't send a resume. Send us something you've built that you are irrationally proud of.",
              },
              {
                step: "02",
                title: "The Vibe Check",
                desc: "A 30-minute casual conversation to see if we actually want to work together every day.",
              },
              {
                step: "03",
                title: "The Test Drive",
                desc: "We pay you for a small, real-world project. You see how we work, we see how you execute.",
              },
            ].map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] }}
                className="bg-surface/90 backdrop-blur-md p-8 rounded-3xl border border-border shadow-sm relative group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-14 h-14 bg-foreground text-surface rounded-full flex items-center justify-center text-xl font-mono mb-6 group-hover:bg-brand-mint group-hover:text-foreground transition-colors duration-300 shadow-md">
                  {phase.step}
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-3">{phase.title}</h3>
                <p className="text-muted leading-relaxed">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CSS Infinite Marquee */}
        <div className="mt-32 w-full border-y border-border/40 py-6 overflow-hidden bg-brand-primary/5 flex items-center relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
          
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes fast-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-fast-scroll {
              animation: fast-scroll 25s linear infinite;
              display: flex;
              width: max-content;
            }
          `}} />
          <div className="animate-fast-scroll">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex shrink-0 items-center">
                {[
                  "NO MICROMANAGEMENT",
                  "HIGH VELOCITY",
                  "PIXEL PERFECT",
                  "SHIP FAST",
                  "RADICAL OWNERSHIP",
                  "CREATE VALUE",
                ].map((word, j) => (
                  <div key={j} className="flex items-center gap-8 px-8">
                    <span className="text-2xl md:text-3xl font-black uppercase tracking-widest text-foreground/80">
                      {word}
                    </span>
                    <Sparkles className="w-6 h-6 text-brand-mint" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FULL WIDTH INVERTED CTA */}
      <section className="bg-foreground text-surface py-32 md:py-48 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-150 h-150 bg-brand-mint/10 rounded-full blur-[100px] pointer-events-none" />
        </div>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2
            className="text-[clamp(3rem,6vw,6rem)] font-medium tracking-tight mb-8"
            style={{ color: "var(--color-surface)" }}
          >
            Think you have what it{" "}
            <span className="italic text-brand-mint font-serif px-2">
              takes?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-surface/80 max-w-2xl mx-auto mb-16 leading-relaxed">
            We don&apos;t post specific open roles because we are always looking for exceptional talent. If you are unreasonably good at what you do, we want to hear from you.
          </p>
          
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-surface bg-surface px-8 py-5 text-lg font-medium text-foreground transition-transform hover:-translate-y-1"
          >
            Pitch Yourself
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
