"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollType() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform values for scrolling left and right based on scroll progress
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  const x3 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section 
      ref={containerRef}
      className="py-24 md:py-48 overflow-hidden bg-background relative flex flex-col justify-center"
    >
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full flex flex-col gap-2 md:gap-4 relative z-10">
        
        {/* ROW 1: Scrolling Left */}
        <motion.div 
          style={{ x: x1 }}
          className="whitespace-nowrap flex"
        >
          <h2 className="text-[12vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent uppercase drop-shadow-sm">
            WE ARE BIZZGROW • WE ARE BIZZGROW • WE ARE BIZZGROW • WE ARE BIZZGROW • 
          </h2>
        </motion.div>

        {/* ROW 2: Scrolling Right */}
        <motion.div 
          style={{ x: x2 }}
          className="whitespace-nowrap flex"
        >
          <h2 className="text-[12vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-peach uppercase drop-shadow-sm">
            DIGITAL TRANSFORMATION • DIGITAL TRANSFORMATION • DIGITAL TRANSFORMATION • 
          </h2>
        </motion.div>

        {/* ROW 3: Scrolling Left (Slower) */}
        <motion.div 
          style={{ x: x3 }}
          className="whitespace-nowrap flex"
        >
          <h2 className="text-[12vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted uppercase drop-shadow-sm opacity-50">
            SCALABLE • AUTOMATED • MODERN • SCALABLE • AUTOMATED • MODERN • 
          </h2>
        </motion.div>
        
      </div>
    </section>
  );
}
