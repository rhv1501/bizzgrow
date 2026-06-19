"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const Cta = () => {
  return (
    <section id="contact" className="py-32 md:py-48 bg-background border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-foreground leading-[1.05]">
              Ready to transform your digital operations?
            </h2>
            <p className="mt-8 text-xl text-muted leading-relaxed max-w-lg">
              If you are ready for a cohesive strategy that combines premium design, data-driven marketing, and scalable automation, let&apos;s build it together.
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-foreground px-8 text-sm font-semibold text-surface transition-transform hover:scale-[0.98] active:scale-95">
                Start a project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/portfolio" className="inline-flex h-14 items-center justify-center gap-2 rounded-lg border border-border px-8 text-sm font-semibold text-foreground transition-colors hover:bg-surface">
                View case studies
              </Link>
            </div>
            
            <div className="mt-20 pt-10 border-t border-border flex flex-col sm:flex-row flex-wrap gap-x-10 gap-y-4">
               {[
                 "End-to-end execution",
                 "Data-driven decisions",
                 "Scalable architecture",
               ].map((item) => (
                 <div key={item} className="flex items-center gap-4">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-mint" />
                   <span className="text-sm font-medium text-foreground">{item}</span>
                 </div>
               ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 border border-border/80 bg-surface/50 p-10 md:p-12 rounded-2xl"
          >
            <p className="text-xs font-mono uppercase tracking-widest text-muted mb-10">
              What to include in your inquiry
            </p>

            <ul className="space-y-8">
              {[
                "Your primary business bottleneck or goal",
                "Which services you need (Web, Marketing, Automation)",
                "Your ideal timeline and technical constraints",
              ].map((item, index) => (
                <li key={item} className="flex items-start gap-6">
                  <span className="text-xs font-mono text-muted pt-1">0{index + 1}</span>
                  <span className="text-base text-foreground font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-14 pt-8 border-t border-border/80">
              <p className="text-xs font-mono uppercase tracking-widest text-muted mb-4">
                Direct contact
              </p>
              <a href="mailto:info@bizzgrowlabs.com" className="text-xl md:text-2xl font-medium text-foreground hover:text-brand-primary transition-colors">
                info@bizzgrowlabs.com
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Cta;
