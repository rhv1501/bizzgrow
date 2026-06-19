"use client";

import Services from "../components/Services";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ServicesPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main ref={containerRef} className="bg-background min-h-screen selection:bg-brand-peach selection:text-foreground">
      {/* MASSIVE TYPOGRAPHY HERO */}
      <section className="pt-40 md:pt-56 pb-32 overflow-hidden border-b border-border/60 relative">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[120px] mix-blend-multiply pointer-events-none" />
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-mint/10 rounded-full blur-[100px] mix-blend-multiply pointer-events-none" />
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 mt-12">
          <motion.div style={{ y: y1, opacity }}>
            <p className="text-xs font-mono text-muted mb-8 uppercase tracking-widest flex items-center gap-4">
              <span className="w-8 h-px bg-muted" /> Everything We Do
            </p>
            <h1 className="text-[9.5vw] md:text-[clamp(3.5rem,8vw,9rem)] font-medium tracking-tighter text-foreground leading-[0.9] whitespace-nowrap">
              Services built to <br />
              <span className="italic text-brand-primary font-serif pr-2 md:pr-4">dominate</span>
              markets.
            </h1>
            <p className="mt-12 text-xl md:text-2xl text-muted max-w-2xl leading-relaxed">
              We don&apos;t do templates. We build unapologetically bold digital ecosystems that automate your ops and scale your revenue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* NEW AWWARDS SERVICES COMPONENT */}
      <Services />
    </main>
  );
}
