"use client";

import React from "react";
import Link from "next/link";
import { services } from "../services/catalog";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="bg-background relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 md:pt-48 pb-12 md:pb-24">
        
        {/* Header for homepage context (hidden if needed, but good to keep) */}
        <div className="mb-24 md:mb-32 max-w-3xl">
           <p className="text-xs font-mono text-muted mb-6 uppercase tracking-widest flex items-center gap-4">
             <span className="w-8 h-px bg-muted" /> Capabilities
           </p>
           <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium text-foreground leading-[1.05] tracking-tight">
             End-to-End <span className="italic font-serif text-brand-primary">Ecosystems</span>.
           </h2>
        </div>

        {/* The sticky scroll layout */}
        <div className="relative pb-16 md:pb-24">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} total={services.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceData {
  title: string;
  description: string;
  slug: string;
  outcomes: string[];
  features: string[];
}

function ServiceCard({ service, index, total }: { service: ServiceData, index: number, total: number }) {
  // Using calc to dynamically stack the cards based on their index.
  // Each card sticks slightly lower than the previous one, creating a deck effect.
  const topOffset = `calc(6rem + ${index * 1.5}rem)`;
  
  return (
    <div className="sticky pt-8 md:pt-16 w-full" style={{ top: topOffset, zIndex: index }}>
      <div className="bg-surface/95 backdrop-blur-xl border border-border/60 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 shadow-[0_-10px_40px_rgba(33,48,58,0.03)] relative group origin-top overflow-hidden">
        
        {/* subtle background blob that reacts on hover */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-peach/20 rounded-full blur-[100px] pointer-events-none transition-all duration-1000 group-hover:bg-brand-mint/30 group-hover:scale-150" />

        <div className="relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono text-muted uppercase tracking-widest mb-8 block">0{index + 1} &mdash; 0{total}</span>
            <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-8 leading-[1.05]">{service.title}</h3>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-12">{service.description}</p>
            
            <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-4 text-sm font-mono uppercase tracking-widest text-foreground hover:text-brand-primary transition-colors group/btn">
              Explore Service 
              <span className="w-10 h-10 rounded-full border border-border/80 flex items-center justify-center group-hover/btn:bg-brand-primary group-hover/btn:border-brand-primary group-hover/btn:text-surface transition-all duration-300">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
          
          <div className="lg:col-span-7 flex flex-col justify-center mt-8 lg:mt-0">
            <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
               <div>
                 <h4 className="text-xs font-mono uppercase tracking-widest text-foreground mb-6 border-b border-border/60 pb-4">Outcomes</h4>
                 <ul className="space-y-4">
                   {service.outcomes.slice(0,3).map((outcome: string, i: number) => (
                     <li key={i} className="text-muted leading-relaxed flex items-start gap-3 text-sm md:text-base">
                       <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0 mt-2" />
                       {outcome}
                     </li>
                   ))}
                 </ul>
               </div>
               <div>
                 <h4 className="text-xs font-mono uppercase tracking-widest text-foreground mb-6 border-b border-border/60 pb-4">Features</h4>
                 <ul className="space-y-4">
                   {service.features.map((feature: string, i: number) => (
                     <li key={i} className="text-muted leading-relaxed flex items-start gap-3 text-sm md:text-base">
                       <span className="w-1.5 h-1.5 rounded-full bg-brand-mint shrink-0 mt-2" />
                       {feature}
                     </li>
                   ))}
                 </ul>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
