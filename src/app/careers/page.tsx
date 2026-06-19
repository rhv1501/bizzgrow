import { ArrowRight, Zap, Target, Coffee, Users, Rocket } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | BizzGrow",
  description: "Stop doing boring work. Join BizzGrow and build digital ecosystems that matter.",
};



const perks = [
  {
    icon: Coffee,
    title: "Hybrid Work",
    description: "The best of both worlds. Collaborate in person when it matters, and focus from home when you need to.",
    color: "bg-[#FF9E80]"
  },
  {
    icon: Target,
    title: "No Bureaucracy",
    description: "We hate red tape. You will have the autonomy to make decisions and ship fast.",
    color: "bg-brand-mint"
  },
  {
    icon: Users,
    title: "Top-Tier Talent",
    description: "You'll be working alongside people who are unreasonably good at what they do.",
    color: "bg-brand-primary"
  },
  {
    icon: Rocket,
    title: "Massive Impact",
    description: "You aren't just a cog in a machine. The work you do here directly scales businesses.",
    color: "bg-brand-accent"
  }
];

export default function CareersPage() {
  return (
    <main className="pt-32 pb-16 md:pb-32 bg-surface relative selection:bg-brand-primary selection:text-foreground min-h-screen">
      <div className="absolute inset-0 bg-pattern opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        {/* HERO SECTION */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-brand-accent shadow-md mb-8 transform -rotate-2">
            <Zap className="w-5 h-5 text-foreground" />
            <span className="font-bold text-foreground uppercase tracking-widest text-sm">We&apos;re Hiring</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-6 md:mb-8 tracking-tight leading-[1.1] uppercase">
            Stop Doing <span className="bg-brand-accent px-4 py-1 inline-block border border-border shadow-md md:shadow-md rotate-2">Boring Work.</span>
          </h1>

          <p className="text-xl md:text-2xl font-bold text-muted max-w-2xl mx-auto leading-relaxed">
            We are looking for aggressive problem solvers, creative rule-breakers, and people who are obsessed with quality. 
          </p>
        </div>

        {/* PERKS SECTION */}
        <section className="mb-24 md:mb-32">
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-12 tracking-tight uppercase text-center">
            Why work with us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <div key={idx} className={`${perk.color} p-8 rounded-[2rem] border border-border shadow-md hover:-translate-y-2 hover:shadow-md transition-all duration-300`}>
                  <div className="w-14 h-14 bg-surface rounded-full border border-border flex items-center justify-center shadow-md mb-6">
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-black text-foreground mb-3">{perk.title}</h3>
                  <p className="text-foreground font-bold text-lg leading-snug">{perk.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* PITCH YOURSELF SECTION */}
        <section className="bg-background rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 border border-border shadow-md text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-primary opacity-5 pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 tracking-tight uppercase">
              Think you have what it takes?
            </h2>
            <p className="text-xl md:text-2xl font-bold text-muted mb-10 leading-relaxed">
              We don&apos;t post specific open roles because we are always looking for exceptional talent. If you are unreasonably good at what you do, we want to hear from you.
            </p>
            <Link href="/contact" className="btn-primary text-xl px-12 py-5 inline-flex items-center shadow-md hover:shadow-md hover:-translate-y-1 transition-all">
              Pitch Yourself <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
          </div>
        </section>
        
      </div>
    </main>
  );
}
