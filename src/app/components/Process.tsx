"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Compass, Palette, Rocket, Zap } from "lucide-react";

const steps = [
  {
    title: "Discovery & Blueprint",
    description:
      "We begin by understanding your business goals, target audience, and operational bottlenecks to map out a clear digital strategy.",
    icon: Compass,
    tint: "bg-surface",
  },
  {
    title: "Design & Build",
    description:
      "From brand identity to custom web development and CRM integrations, we construct the foundation of your digital presence.",
    icon: Palette,
    tint: "bg-brand-mint/20",
  },
  {
    title: "Launch & Automate",
    description:
      "We deploy your platforms, connect your workflows, and set up the automated systems that capture and nurture leads effortlessly.",
    icon: Zap,
    tint: "bg-brand-secondary/20",
  },
  {
    title: "Scale & Optimize",
    description:
      "Through SEO, performance marketing, and data analytics, we continuously refine your growth engine to maximize ROI.",
    icon: Rocket,
    tint: "bg-brand-peach/20",
  },
];

export default function Process() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 20 },
    },
  };

  return (
    <section className="pt-12 md:pt-16 pb-20 md:pb-28 bg-background relative overflow-hidden">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:sticky lg:top-32 lg:self-start"
        >
          <motion.h2 variants={fadeUp} className="mt-3 max-w-md text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-tight text-foreground">
            A methodology built for scalable growth.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 max-w-lg text-xl leading-relaxed text-muted">
            Transformation is not a single event. It is a systematic process of aligning your brand, technology, and marketing to drive measurable results.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10">
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center gap-3 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-surface shadow-xl hover:-translate-y-1 transition-transform"
            >
              Explore Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>

        <div className="relative space-y-8 pb-[10vh]">
          {steps.map((step, index) => {
            const IconComponent = step.icon;

            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className={`group sticky overflow-hidden rounded-[2.5rem] bg-surface p-2 ring-1 ring-border/60 shadow-[0_20px_40px_-20px_rgba(33,48,58,0.15)] transition-all duration-700 hover:shadow-[0_40px_80px_-30px_rgba(33,48,58,0.2)]`}
                style={{ top: `${112 + index * 24}px` }}
              >
                <div className={`relative flex flex-col justify-between rounded-[calc(2.5rem-8px)] ${step.tint} px-8 py-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]`}>
                  <div className="grid gap-8 lg:grid-cols-[0.2fr_0.8fr] lg:items-start">
                    <div className="flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-surface shadow-sm ring-1 ring-border/50 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3">
                      <IconComponent className="h-6 w-6 text-foreground" />
                    </div>

                    <div className="pt-2">
                      <h3 className="text-3xl font-medium tracking-tight text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}