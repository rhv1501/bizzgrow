"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Team = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Section */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm font-mono text-muted mb-6 uppercase tracking-widest"
          >
            Founder-led
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.1]"
          >
            Led by humans, powered by logic, driven by results.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed"
          >
            No bloated agency layers or endless &quot;let me check with my manager&quot; loops. Just sharp strategy, high-end execution, and complete accountability.
          </motion.p>
        </div>

        {/* Minimalist Grid Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          
          {/* Portrait Column */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="md:col-span-4"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-border/40 bg-surface/50">
              <Image
                src="/rudresh.jpeg"
                alt="Rudresh H Vyas"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                unoptimized
              />
            </div>
            <div className="mt-5 flex flex-col">
              <span className="text-base font-semibold text-foreground">Rudresh H Vyas</span>
              <span className="text-xs text-muted uppercase tracking-[0.15em] mt-1">Founder and CEO</span>
              <span className="text-xs text-brand-primary mt-1">Creative direction</span>
            </div>
          </motion.div>

          {/* Details Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="md:col-span-8 flex flex-col h-full md:pt-4"
          >
            <div className="border-t border-border/80 pt-8">
              <p className="text-xs font-mono uppercase tracking-widest text-muted mb-6">The Goal</p>
              <h3 className="text-2xl md:text-3xl font-medium leading-snug text-foreground max-w-2xl">
                &quot;Make you look so good your competitors get nervous, and build systems so tight your operations run on autopilot.&quot;
              </h3>
            </div>

            <div className="border-t border-border/80 mt-12 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-muted mb-6">Execution</p>
                <ul className="space-y-4">
                  {["Surgical strategy", "Elite execution", "Zero fluff"].map((item, idx) => (
                    <li key={item} className="flex items-center gap-4 text-base text-foreground font-medium">
                      <span className="text-xs font-mono text-muted">0{idx + 1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-muted mb-6">Work Style</p>
                  <p className="text-lg font-medium text-foreground">
                    Strategy first, then we build.
                  </p>
                </div>
                
                <div className="mt-12 sm:mt-auto">
                  <Link href="/about" className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-muted transition-colors border-b border-foreground hover:border-muted pb-1">
                    Read the full story
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Team;

