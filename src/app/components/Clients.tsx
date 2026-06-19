"use client";

import { useRef, useEffect } from "react";
import { portfolioProjects } from "../portfolio/projects";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

const Clients = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    // Set initial position to center of container so it looks good on initial load
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(rect.width / 2);
      mouseY.set(rect.height / 2);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      requestAnimationFrame(() => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      });
    };

    const current = containerRef.current;
    if (current) current.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      if (current) current.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Extract titles and duplicate to ensure the marquee never ends
  const itemsArray = portfolioProjects.map((p) => p.title);
  const items = [...itemsArray, ...itemsArray, ...itemsArray, ...itemsArray];

  // The GPU-accelerated mask that follows the cursor (Desktop only)
  const maskImage = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`;

  const MarqueeRow = ({ direction = 1, speed = 40 }: { direction?: number; speed?: number }) => (
    <div
      className="flex w-max items-center gap-12 whitespace-nowrap"
      style={{
        animation: direction === 1 
          ? `marquee-left ${speed}s linear infinite` 
          : `marquee-right ${speed}s linear infinite`
      }}
    >
      {items.map((item, i) => (
        <span 
          key={i} 
          className="text-6xl sm:text-7xl md:text-[8vw] lg:text-[7vw] font-black uppercase leading-[0.8] tracking-[-0.04em] drop-shadow-lg"
        >
          {item}
          <span className="mx-8 md:mx-12 text-foreground/20">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <section 
      ref={containerRef} 
      className="relative flex h-[80dvh] min-h-[600px] w-full flex-col justify-center overflow-hidden bg-background py-16 lg:py-20"
    >
      {/* INJECTED CSS FOR PURE HARDWARE MARQUEES */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translate3d(0%, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marquee-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0%, 0, 0); }
        }
      `}</style>
      
      {/* BACKGROUND LAYER: Dim, almost invisible text */}
      <div className="absolute inset-0 flex flex-col justify-between py-16 lg:py-24 opacity-[0.03]">
        <MarqueeRow direction={1} speed={120} />
        <MarqueeRow direction={-1} speed={100} />
        <MarqueeRow direction={1} speed={130} />
      </div>

      {/* DESKTOP FOREGROUND LAYER: Dynamic cursor tracking */}
      <motion.div 
        className="pointer-events-none absolute inset-0 hidden md:flex flex-col justify-between py-16 lg:py-24 text-foreground opacity-80"
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }}
      >
        <MarqueeRow direction={1} speed={120} />
        <MarqueeRow direction={-1} speed={100} />
        <MarqueeRow direction={1} speed={130} />
      </motion.div>

      {/* MOBILE FOREGROUND LAYER: Static top/bottom visibility */}
      <div 
        className="pointer-events-none absolute inset-0 flex md:hidden flex-col justify-between py-16 text-foreground opacity-40"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
        }}
      >
        <MarqueeRow direction={1} speed={120} />
        <MarqueeRow direction={-1} speed={100} />
        <MarqueeRow direction={1} speed={130} />
      </div>

      {/* FLOATING CENTER CARD (Glassmorphism Double-Bezel) */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div className="pointer-events-auto rounded-[2.5rem] bg-foreground/5 p-2 shadow-2xl ring-1 ring-border/50 backdrop-blur-2xl transition-transform duration-700 hover:scale-[1.02] md:rounded-[3rem]">
          <div className="relative overflow-hidden rounded-[calc(2.5rem-8px)] bg-surface px-6 py-12 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] md:rounded-[calc(3rem-8px)] md:px-16 md:py-20 text-center">
            
            {/* Physical Paper Noise Overlay */}
            <div 
              className="pointer-events-none absolute inset-0 opacity-[0.04]" 
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
              }} 
            />

            <div className="relative z-10 inline-flex items-center gap-2 rounded-full border border-border/40 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
              Our Impact
            </div>

            <h2 className="relative z-10 text-4xl font-black tracking-tight text-foreground md:text-5xl lg:text-7xl drop-shadow-sm">
              Brands we&apos;ve transformed.
            </h2>
            
            <p className="relative z-10 mt-6 text-base leading-relaxed text-muted md:text-lg lg:text-xl max-w-2xl mx-auto">
              We partner with ambitious teams to rebuild their digital infrastructure, scale their marketing, and automate their operations.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Clients;
