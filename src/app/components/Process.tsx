"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Compass, Palette, Rocket, Zap, Pause, Play } from "lucide-react";

const steps = [
  {
    title: "Discovery & Blueprint",
    description: "We begin by understanding your business goals, target audience, and operational bottlenecks to map out a clear digital strategy.",
    icon: Compass,
    tint: "bg-surface",
    textColor: "text-foreground",
    iconColor: "text-foreground",
  },
  {
    title: "Design & Build",
    description: "From brand identity to custom web development and CRM integrations, we construct the foundation of your digital presence.",
    icon: Palette,
    tint: "bg-brand-mint",
    textColor: "text-foreground",
    iconColor: "text-foreground",
  },
  {
    title: "Launch & Automate",
    description: "We deploy your platforms, connect your workflows, and set up the automated systems that capture and nurture leads effortlessly.",
    icon: Zap,
    tint: "bg-brand-primary",
    textColor: "text-foreground",
    iconColor: "text-foreground",
  },
  {
    title: "Scale & Optimize",
    description: "Through SEO, performance marketing, and data analytics, we continuously refine your growth engine to maximize ROI.",
    icon: Rocket,
    tint: "bg-brand-peach",
    textColor: "text-foreground",
    iconColor: "text-foreground",
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const DURATION = 6000; // 6 seconds per step

  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, DURATION);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, activeStep]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setIsAutoPlaying(false);
  };

  const current = steps[activeStep];
  const Icon = current.icon;

  const springTransition = {
    type: "spring",
    stiffness: 120,
    damping: 20,
    mass: 1,
  };

  return (
    <section className="pt-24 md:pt-32 pb-32 md:pb-48 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
        
        {/* The Massive Typography Header */}
        <div className="mb-24 max-w-6xl">
          <p className="text-xs font-mono text-muted mb-6 uppercase tracking-widest flex items-center gap-4">
            <span className="w-8 h-px bg-muted" /> The Methodology
          </p>
          <h2 className="text-[clamp(3.5rem,6vw,7rem)] font-medium leading-[0.95] tracking-tighter text-foreground uppercase">
            A methodology built for <br className="hidden md:block" />
            <span className="italic font-serif text-brand-primary">scalable growth.</span>
          </h2>
          <p className="mt-10 max-w-2xl text-xl md:text-2xl leading-relaxed text-muted font-medium">
            Transformation is not a single event. It is a systematic process of aligning your brand, technology, and marketing to drive measurable results.
          </p>
        </div>

        {/* The Morphing Dynamic Card Engine */}
        <div className="relative mx-auto w-full max-w-5xl">
          <motion.div 
            layout
            className={`relative overflow-hidden rounded-[2.5rem] md:rounded-[4rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border border-border/40 min-h-[450px] md:min-h-[500px] flex items-center justify-center`}
          >
            {/* Morphing background layer using AnimatePresence for smooth crossfade */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`bg-${activeStep}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                className={`absolute inset-0 ${current.tint}`}
              />
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                transition={springTransition}
                className="relative z-10 w-full px-4 py-10 md:p-20 flex flex-col items-center text-center"
              >
                <motion.div 
                  layoutId="icon-container"
                  className="mb-8 md:mb-14 flex h-16 w-16 md:h-28 md:w-28 items-center justify-center rounded-2xl md:rounded-[2rem] bg-background/20 backdrop-blur-xl shadow-2xl border border-background/20"
                >
                  <Icon className={`h-8 w-8 md:h-14 md:w-14 ${current.iconColor}`} />
                </motion.div>
                
                <h3 className={`text-2xl md:text-[clamp(2.5rem,4vw,4rem)] font-bold tracking-tighter mb-4 md:mb-6 leading-tight uppercase ${current.textColor}`}>
                  {current.title}
                </h3>
                
                <p className={`text-base md:text-2xl max-w-3xl leading-relaxed ${current.textColor} opacity-90 font-medium`}>
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Glass Pill Navigation Dock */}
          <div className="absolute -bottom-6 md:-bottom-10 left-1/2 -translate-x-1/2 z-20 w-full px-4 md:px-0 flex justify-center pointer-events-none">
            <div className="flex items-center gap-1 md:gap-2 p-1.5 md:p-2 rounded-full bg-surface/95 backdrop-blur-2xl border border-border/60 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] pointer-events-auto overflow-x-auto max-w-full no-scrollbar">
              <button 
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-muted hover:text-foreground hover:bg-background transition-colors"
                aria-label={isAutoPlaying ? "Pause process rotation" : "Play process rotation"}
              >
                {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-1" />}
              </button>
              
              <div className="h-6 w-px bg-border/60 mx-1 md:mx-2" />

              {steps.map((_, idx) => {
                const isActive = idx === activeStep;
                return (
                  <button
                    key={idx}
                    onClick={() => handleStepClick(idx)}
                    className="relative group px-3 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-mono transition-all duration-300 flex flex-col items-center justify-center overflow-hidden shrink-0"
                  >
                    <span className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-background font-bold' : 'text-muted group-hover:text-foreground'}`}>
                      0{idx + 1}
                    </span>
                    
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-foreground rounded-full"
                        transition={{ type: "spring", stiffness: 150, damping: 25 }}
                      />
                    )}

                    {/* Progress Indicator for auto-play */}
                    {isActive && isAutoPlaying && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-full bg-brand-primary/20 rounded-full z-0 origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: DURATION / 1000, ease: "linear" }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 md:mt-40 flex justify-center"
        >
          <Link 
            href="/services" 
            className="group relative overflow-hidden flex items-center justify-center gap-3 rounded-full bg-foreground px-10 py-5 transition-transform active:scale-95 shadow-2xl"
          >
            <span className="relative z-10 text-sm font-bold tracking-widest uppercase text-background">
              Explore Our Services
            </span>
            <ArrowRight className="h-4 w-4 text-background relative z-10 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}