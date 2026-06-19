"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { portfolioProjects } from "./projects";
import { useRef } from "react";

export default function PortfolioPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <main ref={containerRef} className="bg-background min-h-screen selection:bg-brand-mint selection:text-foreground">
      
      {/* CINEMATIC HERO */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-24 overflow-hidden relative border-b border-border/60">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] mix-blend-multiply pointer-events-none" />
           <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-peach/10 rounded-full blur-[100px] mix-blend-multiply pointer-events-none" />
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div style={{ y: heroY, opacity: heroOpacity }}>
            <p className="text-xs font-mono text-muted mb-6 md:mb-8 uppercase tracking-widest flex items-center gap-4">
              <span className="w-8 h-px bg-muted" /> Case Studies
            </p>
            <h1 className="text-[clamp(3.5rem,8vw,9rem)] font-medium tracking-tighter text-foreground leading-[0.9]">
              Work that makes <br />
              competitors <span className="italic text-brand-peach font-serif pr-4">nervous</span>.
            </h1>
            <p className="mt-8 md:mt-12 text-xl md:text-2xl text-muted max-w-2xl leading-relaxed">
              Real transformations, measurable results, and digital ecosystems that actually look like they were built in this decade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ASYMMETRICAL GALLERY */}
      <section className="py-32 md:py-48">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-32 md:gap-48">
            {portfolioProjects.map((project, index) => {
               // We alternate alignment for a dynamic editorial look
               const isEven = index % 2 === 0;
               return <ProjectCard key={index} project={project} index={index} isEven={isEven} />
            })}
          </div>
        </div>
      </section>
      
      {/* FOOTER CTA */}
      <section className="py-32 md:py-48 border-t border-border/60 relative overflow-hidden bg-surface/30">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
           <div className="w-[800px] h-[800px] bg-brand-mint/10 blur-[120px] rounded-full pointer-events-none" />
        </div>
        <div className="mx-auto max-w-5xl px-4 relative z-10 text-center">
           <h2 className="text-[clamp(3rem,6vw,6rem)] font-medium tracking-tight mb-12 leading-[1.1]">
             Ready to <span className="italic text-brand-primary font-serif">scale</span>?
           </h2>
           <Link href="/contact" className="btn-primary">
             Start a Project <ArrowRight className="w-4 h-4 ml-2" />
           </Link>
        </div>
      </section>
    </main>
  );
}

type ProjectType = typeof portfolioProjects[number];

function ProjectCard({ project, index, isEven }: { project: ProjectType, index: number, isEven: boolean }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.article 
      ref={cardRef}
      style={{ y, opacity }}
      className={`grid lg:grid-cols-12 gap-12 lg:gap-24 items-center group`}
    >
      <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <Link href={`/project/${project.slug}`} className="block relative rounded-[2rem] md:rounded-[3rem] overflow-hidden aspect-[4/3] bg-surface border border-border/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] transform transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.02]">
          {/* Using the gradient as the massive background */}
          <div className="absolute inset-0 opacity-80 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-100" style={{ background: project.image }} />
          
          {/* Elegant noise overlay for texture */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
          
          <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 flex justify-between items-end">
            <span className="bg-surface/90 backdrop-blur-md text-foreground px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest shadow-lg">
              {project.category}
            </span>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-surface/90 backdrop-blur-md text-foreground flex items-center justify-center shadow-lg transform -rotate-45 group-hover:rotate-0 group-hover:bg-brand-primary group-hover:text-surface transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </div>
          </div>
        </Link>
      </div>

      <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'} flex flex-col justify-center`}>
        <span className="text-xs font-mono text-muted uppercase tracking-widest mb-6 block">0{index + 1} &mdash; Case Study</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 leading-[1.05] text-foreground group-hover:text-brand-primary transition-colors duration-500">
          <Link href={`/project/${project.slug}`}>{project.title}</Link>
        </h2>
        <p className="text-lg md:text-xl text-muted leading-relaxed mb-12">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-x-12 gap-y-8 w-full">
          {project.results.slice(0,2).map((result: {value: string; label: string}, i: number) => (
            <div key={i} className="flex flex-col flex-1 min-w-[140px]">
              <div className="text-2xl lg:text-3xl font-medium tracking-tight text-foreground mb-2 break-words leading-tight">{result.value}</div>
              <div className="text-xs font-mono text-muted uppercase tracking-widest">{result.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-12 border-t border-border/60 flex flex-wrap gap-3">
           {project.technologies.slice(0,3).map((tech: string, i: number) => (
             <span key={i} className="text-xs font-mono border border-border/50 rounded-full px-4 py-2 text-muted">
               {tech}
             </span>
           ))}
           {project.technologies.length > 3 && (
             <span className="text-xs font-mono border border-border/50 rounded-full px-4 py-2 text-muted">
               +{project.technologies.length - 3}
             </span>
           )}
        </div>
      </div>
    </motion.article>
  );
}
