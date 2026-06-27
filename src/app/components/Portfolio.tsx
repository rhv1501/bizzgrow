"use client";

import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { portfolioProjects } from "../portfolio/projects";

const Portfolio = () => {
  const featuredProjects = portfolioProjects.slice(0, 3);
  // null means ALL cards are folded by default
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className="relative bg-background overflow-hidden py-24 lg:py-48">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="mb-12 max-w-3xl lg:mb-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-muted mb-6 uppercase tracking-widest flex items-center gap-4"
          >
            <span className="w-8 h-px bg-muted" /> Selected work
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl font-black tracking-tight text-foreground md:text-5xl lg:mt-8 lg:text-7xl xl:text-8xl"
          >
            Work that actually moves the needle.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-muted lg:mt-6 lg:text-xl"
          >
            We don&apos;t just build pretty things. We build digital ecosystems that convert, automate, and scale. Here is the proof.
          </motion.p>
        </div>

        {/* UNIFIED ACCORDION GALLERY: Folded by default */}
        <div 
          className="flex flex-col h-[85vh] w-full gap-2 sm:gap-4 lg:flex-row lg:h-[75vh]"
          onMouseLeave={() => {
            // When mouse leaves the entire gallery on desktop, fold all cards
            if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
              setActiveIndex(null);
            }
          }}
        >
          {featuredProjects.map((project, index) => {
            const isActive = activeIndex === index;

            return (
              <div 
                key={index}
                onClick={() => {
                  // On mobile/click, if it's already active, fold it. Otherwise expand it.
                  setActiveIndex(isActive ? null : index);
                }}
                onMouseEnter={() => {
                  // Only trigger expand on hover for desktop
                  if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
                    setActiveIndex(index);
                  }
                }}
                className={`group relative flex cursor-pointer overflow-hidden rounded-[2rem] bg-foreground/5 p-1.5 shadow-2xl ring-1 ring-border/50 transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:h-full lg:rounded-[3rem] lg:p-2 ${
                  isActive ? "flex-[5] lg:flex-[3]" : "flex-[1]"
                }`}
              >
                {/* INNER CORE (Double-Bezel) */}
                <div className="relative h-full w-full overflow-hidden rounded-[calc(2rem-6px)] bg-surface shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] lg:rounded-[calc(3rem-12px)]">
                  
                  {/* Dynamic Background Glow */}
                  <div 
                    className={`pointer-events-none absolute inset-0 scale-150 blur-[80px] transition-opacity duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:blur-[100px] ${
                      isActive ? "opacity-40 lg:opacity-50" : "opacity-10 lg:opacity-20"
                    }`}
                    style={
                      project.image.startsWith("linear-gradient")
                        ? { background: project.image }
                        : { backgroundImage: `url(${project.image})`, backgroundSize: "cover", backgroundPosition: "center" }
                    }
                  />

                  {/* Physical Paper Noise Overlay */}
                  <div 
                    className="pointer-events-none absolute inset-0 opacity-[0.03]" 
                    style={{ 
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                    }} 
                  />

                  {/* INACTIVE STATE: Centered text, highly visible */}
                  <div 
                    className={`absolute inset-0 flex items-center justify-center p-4 text-center transition-opacity duration-300 ${
                      isActive ? "pointer-events-none opacity-0" : "opacity-100"
                    }`}
                  >
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-[0.2em] text-foreground/80 lg:origin-center lg:-rotate-90 lg:whitespace-nowrap lg:tracking-[0.4em] lg:text-3xl">
                      {project.title}
                    </h3>
                  </div>

                  {/* ACTIVE STATE: Expanded Rich Layout */}
                  <div 
                    className={`absolute inset-0 flex flex-col justify-between p-6 transition-opacity duration-[800ms] delay-150 lg:p-12 overflow-y-auto ${
                      isActive ? "opacity-100 z-10" : "pointer-events-none opacity-0 z-0"
                    }`}
                  >
                    
                    {/* Top Bar */}
                    <div 
                      className={`flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isActive ? "translate-y-0 opacity-100 delay-200" : "-translate-y-8 opacity-0"
                      }`}
                    >
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted lg:text-[11px]">
                        {project.category}
                      </p>
                      
                      <Link 
                        href={`/project/${project.slug}`} 
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background shadow-lg transition-transform hover:scale-105 active:scale-95 lg:h-16 lg:w-16"
                      >
                        <ArrowRight strokeWidth={2} className="h-4 w-4 -rotate-45 lg:h-6 lg:w-6" />
                      </Link>
                    </div>

                    {/* Bottom Content Area */}
                    <div 
                      className={`flex flex-col gap-4 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:gap-8 ${
                        isActive ? "translate-y-0 opacity-100 delay-[250ms]" : "translate-y-12 opacity-0"
                      }`}
                    >
                      <div className="max-w-2xl shrink-0 mt-8 lg:mt-auto">
                        <h3 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-5xl drop-shadow-sm mb-4">
                          {project.title}
                        </h3>
                        {/* Hidden on very small mobile to save space, visible on sm and up */}
                        <p className="hidden text-sm leading-relaxed text-muted line-clamp-2 sm:block lg:text-lg">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-6 sm:gap-4 border-t border-border/40 pt-4 lg:pt-8 w-full shrink-0">
                        {project.results.map((result, i) => {
                          const Icon = result.icon;
                          // On mobile, hide the 3rd stat so it doesn't overflow the vertically expanding card
                          const isHiddenMobile = i === 2 ? "hidden sm:flex" : "flex";
                          return (
                            <div key={result.label} className={`flex-col min-w-0 ${isHiddenMobile} flex-1 min-w-[120px]`}>
                              <Icon strokeWidth={1.5} className="h-4 w-4 text-foreground/40 lg:h-5 lg:w-5 mb-1 shrink-0" />
                              <span className="text-lg sm:text-xl font-bold tracking-tight text-foreground lg:text-2xl leading-tight">
                                {result.value}
                              </span>
                              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-muted lg:text-[10px] mt-1">
                                {result.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-20 flex justify-center lg:mt-48">
        <Link 
          href="/portfolio" 
          className="group flex flex-col items-center gap-6"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-border bg-surface shadow-xl transition-all duration-500 hover:scale-110 active:scale-95 lg:h-24 lg:w-24">
            <ArrowRight strokeWidth={1.5} className="h-6 w-6 text-foreground transition-transform group-hover:translate-x-1 lg:h-8 lg:w-8" />
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground lg:text-sm">
            Explore full portfolio
          </span>
        </Link>
      </div>

    </section>
  );
};

export default Portfolio;
