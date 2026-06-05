import React from "react";
import Team from "../components/Team";
import { Target, Zap, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="pt-32 pb-0 bg-background relative selection:bg-brand-primary selection:text-white min-h-screen">
      <div className="absolute inset-0 bg-pattern opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        {/* HERO */}
        <div className="bg-brand-mint rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] text-center mb-16 md:mb-32">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 tracking-tight leading-[1.1] mb-8 uppercase">
            About <br className="md:hidden" /> <span className="bg-[#FFD500] px-4 py-2 inline-block border-4 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2">BizzGrow</span>
          </h1>
          <p className="text-xl md:text-3xl font-bold text-gray-800 max-w-4xl mx-auto leading-relaxed">
            We are a digital transformation agency that helps ambitious businesses scale sustainably through modern technology, automation, and design-driven strategies.
          </p>
        </div>

        {/* THE STORY / LEARNINGS */}
        <section className="mb-24 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="bg-white rounded-[2rem] p-8 md:p-12 border-4 border-gray-900 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight">
                Our Story & <br /> <span className="text-[#FF3366]">What We Learned</span>
              </h2>
              <div className="space-y-6 text-lg font-bold text-gray-700">
                <p>
                  BizzGrow started with a simple observation: Most agencies sell you vanity metrics. They build websites that look like digital brochures and run ads that drive empty clicks.
                </p>
                <p>
                  <span className="text-gray-900 font-black bg-[#00E5FF] px-2 py-1 border-2 border-gray-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">We learned early on</span> that business owners don't care about "impressions". They care about leads, revenue, and sustainable growth.
                </p>
                <p>
                  So we built BizzGrow as a counter-movement. We blended deep technical expertise with aggressive, high-converting design to create digital ecosystems that actually move the needle for startups and SMEs.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: "Projects Shipped", value: "50+", color: "bg-[#FFD500]" },
                { label: "Average Rating", value: "4.5", color: "bg-brand-mint" },
                { label: "In-House Team", value: "100%", color: "bg-[#FF9E80]" },
                { label: "Full Service", value: "360°", color: "bg-[#00E5FF]" }
              ].map((stat, idx) => (
                <div key={idx} className={`${stat.color} rounded-[2rem] p-8 border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 flex flex-col justify-center items-center text-center aspect-square`}>
                  <div className="text-5xl md:text-6xl font-black text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-lg font-bold text-gray-900 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATIONAL / FACTS / QUOTES */}
        <section className="mb-24 md:mb-32">
          <div className="bg-gray-100 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 border-4 border-gray-900 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E5FF] rounded-full blur-3xl opacity-20 -mr-20 -mt-20 pointer-events-none"></div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 tracking-tight uppercase text-center relative z-10">
              The Brutal <span className="bg-[#FFD500] px-2 py-1 border-4 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block -rotate-2">Truths</span> We Live By
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
              {/* Quote 1 */}
              <div className="bg-white p-8 md:p-10 rounded-[2rem] border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between group hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div>
                  <div className="text-6xl text-brand-mint font-black leading-none mb-4">"</div>
                  <p className="text-xl md:text-2xl font-bold text-gray-800 leading-snug mb-6">
                    If it doesn't sell, it isn't creative.
                  </p>
                </div>
                <p className="text-gray-500 font-black uppercase tracking-widest text-sm">— David Ogilvy</p>
              </div>

              {/* Educational Fact 1 */}
              <div className="bg-brand-primary p-8 md:p-10 rounded-[2rem] border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-white flex flex-col justify-between group hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-white text-brand-primary text-xs font-black px-3 py-1 uppercase tracking-widest rounded-full border-2 border-gray-900">Fact</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black mb-4">75% of users judge credibility by design.</h3>
                  <p className="text-lg font-medium opacity-90 leading-relaxed">
                    A beautiful website isn't a luxury, it's a baseline requirement for trust. If your site looks like it was built in 2012, your customers will assume your product is outdated too.
                  </p>
                </div>
              </div>

              {/* Educational Fact 2 */}
              <div className="bg-[#7000FF] p-8 md:p-10 rounded-[2rem] border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-white flex flex-col justify-between group hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-[#FFD500] text-gray-900 text-xs font-black px-3 py-1 uppercase tracking-widest rounded-full border-2 border-gray-900">Education</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black mb-4">Speed is Revenue.</h3>
                  <p className="text-lg font-medium opacity-90 leading-relaxed">
                    A 1-second delay in page load time yields a 7% reduction in conversions. We engineer our platforms with modern tech to ensure near-instant load times.
                  </p>
                </div>
              </div>

              {/* Quote 2 */}
              <div className="bg-white p-8 md:p-10 rounded-[2rem] border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between group hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div>
                  <div className="text-6xl text-[#FF3366] font-black leading-none mb-4">"</div>
                  <p className="text-xl md:text-2xl font-bold text-gray-800 leading-snug mb-6">
                    Design is not just what it looks like and feels like. Design is how it works.
                  </p>
                </div>
                <p className="text-gray-500 font-black uppercase tracking-widest text-sm">— Steve Jobs</p>
              </div>

            </div>
          </div>
        </section>

        {/* CORE PRINCIPLES */}
        <section className="mb-24 md:mb-32">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-12 tracking-tight uppercase text-center">
            Our Core Beliefs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#FF3366] rounded-[2rem] p-8 md:p-10 border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300">
              <div className="w-14 h-14 bg-white rounded-full border-2 border-gray-900 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                <Target className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-widest drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Results Over Fluff</h3>
              <p className="text-lg md:text-xl font-bold text-gray-100 leading-relaxed">
                If a campaign or a design update doesn't lead to better conversions or a better user experience, we don't do it. Period.
              </p>
            </div>
            
            <div className="bg-[#00E5FF] rounded-[2rem] p-8 md:p-10 border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300">
              <div className="w-14 h-14 bg-white rounded-full border-2 border-gray-900 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                <Zap className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 uppercase tracking-widest drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">Simplicity Scales</h3>
              <p className="text-lg md:text-xl font-bold text-gray-800 leading-relaxed">
                Complexity breaks. We build systems, websites, and funnels that are brutally simple, highly effective, and easy to maintain.
              </p>
            </div>
            
            <div className="bg-[#7000FF] rounded-[2rem] p-8 md:p-10 border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300">
              <div className="w-14 h-14 bg-white rounded-full border-2 border-gray-900 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                <Heart className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-widest drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Extreme Ownership</h3>
              <p className="text-lg md:text-xl font-bold text-gray-100 leading-relaxed">
                We work as an extension of your team. When things go right, we celebrate together. When things go wrong, we own it and fix it.
              </p>
            </div>
          </div>
        </section>

        {/* HOW WE WORK / PROCESS */}
        <section className="mb-24 md:mb-32">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-12 tracking-tight uppercase text-center">
            How We <span className="text-[#FF3366]">Execute</span>
          </h2>
          
          <div className="space-y-6 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Discovery & Audit", desc: "We don't guess. We analyze your current data, user behavior, and market positioning to find the leaks in your funnel.", color: "bg-brand-mint" },
              { step: "02", title: "Strategy & UX", desc: "We map out the exact architecture, user journeys, and conversion paths required to scale your specific business model.", color: "bg-[#FFD500]" },
              { step: "03", title: "Design & Build", desc: "We execute with ruthless efficiency. Clean code, aggressive design, and zero bloat. We build engines, not brochures.", color: "bg-[#00E5FF]" },
              { step: "04", title: "Launch & Scale", desc: "We deploy, test, iterate, and pour fuel on the fire with performance marketing and SEO to drive sustainable growth.", color: "bg-[#FF9E80]" }
            ].map((phase, i) => (
              <div key={i} className="bg-white p-8 md:p-10 rounded-[2rem] border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 transition-transform flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">
                <div className={`${phase.color} w-20 h-20 shrink-0 rounded-full border-4 border-gray-900 flex items-center justify-center text-3xl font-black text-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-5deg]`}>
                  {phase.step}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 uppercase">{phase.title}</h3>
                  <p className="text-lg md:text-xl font-bold text-gray-600">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ANTI-PERSONA */}
        <section className="mb-24 md:mb-32">
          <div className="bg-[#FF3366] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 border-4 border-gray-900 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight uppercase">
                Who We Are <span className="underline decoration-8 underline-offset-8 decoration-gray-900">NOT</span> For
              </h2>
              <p className="text-xl md:text-2xl font-bold max-w-4xl mx-auto leading-relaxed mb-12">
                We are not a fit for everyone. We protect our time and our clients' results fiercely.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-5xl mx-auto">
                <div className="bg-white text-gray-900 p-8 rounded-[2rem] border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                  <h3 className="text-2xl font-black mb-3 uppercase">You Want Quick Fixes</h3>
                  <p className="text-lg font-bold text-gray-600">Sustainable growth takes strategic execution. If you're looking for "silver bullets" or overnight hacks without putting in the foundational work, we aren't the right partner.</p>
                </div>
                <div className="bg-white text-gray-900 p-8 rounded-[2rem] border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                  <h3 className="text-2xl font-black mb-3 uppercase">You Micromanage</h3>
                  <p className="text-lg font-bold text-gray-600">You hire us because we are experts at what we do. If you want a pixel-pusher to execute your every command without pushback, we aren't for you.</p>
                </div>
                <div className="bg-white text-gray-900 p-8 rounded-[2rem] border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                  <h3 className="text-2xl font-black mb-3 uppercase">You Fear Standing Out</h3>
                  <p className="text-lg font-bold text-gray-600">If your goal is to look exactly like your boring corporate competitors so you don't rock the boat, our aggressive design style will scare you.</p>
                </div>
                <div className="bg-white text-gray-900 p-8 rounded-[2rem] border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                  <h3 className="text-2xl font-black mb-3 uppercase">You Lack Vision</h3>
                  <p className="text-lg font-bold text-gray-600">We partner with founders who want to dominate their market. If you are comfortable staying stagnant, our aggressive growth strategies aren't a fit.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* TEAM SECTION (Full width component) */}
      <Team />
    </main>
  );
}
