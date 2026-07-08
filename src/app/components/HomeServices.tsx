"use client";

import { useState, useEffect } from "react";
import { motion, useSpring, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { services } from "../services/catalog";
import { ArrowUpRight } from "lucide-react";

const colorMap = [
  "bg-brand-primary",
  "bg-brand-mint",
  "bg-brand-peach",
  "bg-brand-accent",
  "bg-brand-secondary",
  "bg-brand-primary",
];

export default function HomeServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Physics-based cursor following for the giant floating card
  const cursorX = useSpring(0, { stiffness: 100, damping: 25, mass: 0.5 });
  const cursorY = useSpring(0, { stiffness: 100, damping: 25, mass: 0.5 });

  useEffect(() => {
    // Only track mouse on desktop
    if (window.innerWidth < 768) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <section className="relative py-32 md:py-48 bg-background overflow-hidden cursor-default border-t border-border/40">
      
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 mb-20 relative z-20">
         <p className="text-xs font-mono text-muted mb-6 uppercase tracking-widest flex items-center gap-4">
           <span className="w-8 h-px bg-muted" /> Area of Expertise
         </p>
         <h2 className="text-[clamp(2rem,8vw,5rem)] font-medium text-foreground leading-[1.05] tracking-tighter break-words">
           Everything you need to <br />
           <span className="italic font-serif text-brand-primary">grow online.</span>
         </h2>
      </div>

      {/* The Giant Typographic List */}
      <div className="relative z-20 flex flex-col group/list w-full" onMouseLeave={() => setHoveredIndex(null)}>
        {services.map((service, i) => (
          <Link 
            key={service.slug}
            href={`/services/${service.slug}`}
            onMouseEnter={() => setHoveredIndex(i)}
            className="group/item relative w-full border-t border-border/40 last:border-b transition-all duration-500 md:hover:!opacity-100 md:group-hover/list:opacity-20 md:hover:bg-surface/30"
          >
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 py-8 md:py-16 flex items-center justify-between">
              
              {/* Massive Title */}
              <h3 className="text-[clamp(1.75rem,6.5vw,7rem)] font-medium tracking-tighter leading-[0.9] text-foreground uppercase block md:flex md:items-center gap-4 md:gap-12 min-w-0 w-full break-words">
                {/* Number indicator slides in on hover */}
                <span className="text-sm md:text-xl font-mono tracking-widest opacity-0 -translate-x-8 md:group-hover/item:opacity-100 md:group-hover/item:translate-x-0 transition-all duration-500 text-brand-primary hidden md:block shrink-0">
                  (0{i + 1})
                </span>
                
                {/* The actual title with an italic hover state */}
                <span className="transition-transform duration-500 origin-left md:group-hover/item:scale-[1.03] md:group-hover/item:translate-x-4 inline-block">
                  {service.title.split(' ').map((word, wIdx) => (
                    <span key={wIdx} className={wIdx === 1 ? "italic font-serif text-brand-primary/80" : ""}>
                      {word}{' '}
                    </span>
                  ))}
                </span>
              </h3>

              {/* Arrow that animates in */}
              <div className="hidden md:flex w-24 h-24 rounded-full border border-border/40 items-center justify-center opacity-0 scale-50 group-hover/item:opacity-100 group-hover/item:scale-100 transition-all duration-500 bg-foreground group-hover/item:rotate-45">
                <ArrowUpRight className="w-8 h-8 text-background" />
              </div>
            </div>

            {/* Mobile-only description */}
            <div className="md:hidden px-4 pb-10 max-w-sm text-muted text-lg">
               {service.headline}
            </div>
          </Link>
        ))}
      </div>

      {/* Floating Media Card (Desktop Only) */}
      <motion.div
        className="fixed top-0 left-0 w-[280px] h-[340px] pointer-events-none z-50 hidden md:block rounded-[1.5rem] overflow-hidden bg-surface shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] border border-border/60"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ 
          opacity: hoveredIndex !== null ? 1 : 0, 
          scale: hoveredIndex !== null ? 1 : 0.8,
          rotate: hoveredIndex !== null ? (hoveredIndex % 2 === 0 ? 4 : -4) : -5
        }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      >
        <AnimatePresence mode="wait">
          {hoveredIndex !== null && (
            <motion.div
              key={hoveredIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col justify-between"
            >
              {/* Service Illustration Image */}
              <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none bg-surface">
                <Image
                  src={`/services/${services[hoveredIndex].slug}.png`}
                  alt={services[hoveredIndex].title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out scale-105"
                  unoptimized
                />
              </div>

              {/* Card Content Top */}
              <div className="relative z-10 p-6">
                <span className={`px-3 py-1.5 rounded-full border border-foreground/10 text-[10px] font-mono uppercase tracking-widest bg-background/50 backdrop-blur-md`}>
                  {services[hoveredIndex].slug}
                </span>
              </div>

              {/* Card Content Bottom */}
              <div className="relative z-10 p-6 bg-gradient-to-t from-surface via-surface/90 to-transparent pt-20 mt-auto border-t border-foreground/5">
                <h4 className="text-xl font-medium tracking-tight mb-0 leading-[1.2] text-foreground">
                  {services[hoveredIndex].headline}
                </h4>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

    </section>
  );
}
