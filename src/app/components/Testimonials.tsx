"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Kamlesh M.",
      role: "Business Owner",
      content: "BizzGrow completely overhauled our digital presence. We finally look as premium as the service we offer.",
      color: "rgba(139, 92, 246, 1)", // Purple
    },
    {
      name: "Krish",
      role: "Startup Founder",
      content: "The automation they set up saved us 15 hours a week. Plus, the website redesign actually gets people to book calls.",
      color: "rgba(16, 185, 129, 1)", // Emerald
    },
    {
      name: "Hakash R.",
      role: "Marketing Director",
      content: "They don't just build websites; they build entire lead-generation engines. The ROI speaks for itself.",
      color: "rgba(245, 158, 11, 1)", // Amber
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="relative bg-background py-32 lg:py-48 overflow-hidden">
      
      {/* Dynamic Ambient Background Glow based on active testimonial */}
      <div 
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[50vh] w-[50vw] rounded-full opacity-20 blur-[120px] transition-all duration-1000"
        style={{ background: testimonials[activeIndex].color }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Block */}
        <div className="text-center mb-16 lg:mb-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-border/40 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            Client Outcomes
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-8 text-4xl font-black tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            Don&apos;t just take our word for it.
          </motion.h2>
        </div>

        {/* INTERACTIVE ISLAND COMPONENT */}
        <div className="relative mx-auto max-w-5xl rounded-[3rem] bg-foreground/5 p-2 shadow-2xl ring-1 ring-border/50">
          <div className="relative flex min-h-[500px] flex-col items-center justify-between overflow-hidden rounded-[calc(3rem-8px)] bg-surface px-6 py-16 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] lg:px-20 lg:py-24">
            
            {/* Physical Paper Noise Overlay */}
            <div 
              className="pointer-events-none absolute inset-0 opacity-[0.03]" 
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
              }} 
            />

            {/* Quote Icon */}
            <svg className="mb-12 h-10 w-10 text-foreground/20 lg:h-14 lg:w-14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            {/* Cinematic Text Reveal */}
            <div className="relative flex flex-1 items-center justify-center w-full">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center text-2xl font-medium leading-relaxed tracking-tight text-foreground md:text-4xl lg:text-5xl max-w-4xl"
                >
                  &quot;{testimonials[activeIndex].content}&quot;
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Emil-Style Floating Interactive Dock */}
            <div className="mt-16 flex flex-wrap justify-center gap-2 rounded-full bg-background/50 p-2 ring-1 ring-border/50 backdrop-blur-xl sm:gap-4">
              {testimonials.map((testimonial, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className="group relative flex items-center gap-3 rounded-full px-4 py-2 sm:px-6 sm:py-3 transition-colors"
                  >
                    {/* The sliding background layoutId animation */}
                    {isActive && (
                      <motion.div
                        layoutId="active-testimonial-bg"
                        className="absolute inset-0 rounded-full bg-foreground shadow-lg"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    
                    {/* Avatar Initials */}
                    <div 
                      className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-sm font-black transition-colors sm:h-10 sm:w-10 sm:text-base ${
                        isActive ? "bg-background text-foreground" : "bg-foreground/10 text-foreground"
                      }`}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    
                    {/* Name & Role */}
                    <div className="relative z-10 text-left">
                      <div className={`text-sm font-bold transition-colors sm:text-base ${isActive ? "text-background" : "text-foreground"}`}>
                        {testimonial.name}
                      </div>
                      <div className={`hidden text-[10px] font-medium uppercase tracking-[0.1em] transition-colors sm:block ${isActive ? "text-background/70" : "text-muted"}`}>
                        {testimonial.role}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
