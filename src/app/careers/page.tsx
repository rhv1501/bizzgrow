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
    color: "bg-[#00E5FF]"
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
    <main className="pt-32 pb-16 md:pb-32 bg-white relative selection:bg-brand-primary selection:text-white min-h-screen">
      <div className="absolute inset-0 bg-pattern opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        {/* HERO SECTION */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-gray-900 bg-brand-accent shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8 transform -rotate-2">
            <Zap className="w-5 h-5 text-gray-900" />
            <span className="font-bold text-gray-900 uppercase tracking-widest text-sm">We're Hiring</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 md:mb-8 tracking-tight leading-[1.1] uppercase">
            Stop Doing <span className="bg-[#FFD500] px-4 py-1 inline-block border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-2">Boring Work.</span>
          </h1>

          <p className="text-xl md:text-2xl font-bold text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We are looking for aggressive problem solvers, creative rule-breakers, and people who are obsessed with quality. 
          </p>
        </div>

        {/* PERKS SECTION */}
        <section className="mb-24 md:mb-32">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-12 tracking-tight uppercase text-center">
            Why work with us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <div key={idx} className={`${perk.color} p-8 rounded-[2rem] border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300`}>
                  <div className="w-14 h-14 bg-white rounded-full border-2 border-gray-900 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                    <Icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">{perk.title}</h3>
                  <p className="text-gray-900 font-bold text-lg leading-snug">{perk.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* PITCH YOURSELF SECTION */}
        <section className="bg-gray-100 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 border-4 border-gray-900 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-primary opacity-5 pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight uppercase">
              Think you have what it takes?
            </h2>
            <p className="text-xl md:text-2xl font-bold text-gray-600 mb-10 leading-relaxed">
              We don't post specific open roles because we are always looking for exceptional talent. If you are unreasonably good at what you do, we want to hear from you.
            </p>
            <Link href="/contact" className="btn-primary text-xl px-12 py-5 inline-flex items-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
              Pitch Yourself <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
          </div>
        </section>
        
      </div>
    </main>
  );
}
