"use client";

import { Search, ClipboardList, Wrench, LineChart, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery & Stalking",
      description: "We dive deep into your brand, figure out what's broken, and stalk your competitors. Don't worry, it's legal and highly effective.",
      duration: "3-7 days",
      deliverables: ["Goals + Metrics", "Brutal Honesty Audit", "Opportunity List", "Scope Definition"],
    },
    {
      number: "02",
      icon: ClipboardList,
      title: "The Master Plan",
      description: "We turn our findings into an actual plan. Not just a generic PDF, but a blueprint that dictates exactly how we'll make you more money.",
      duration: "1 week",
      deliverables: ["Strategy Roadmap", "Timelines (We actually stick to)", "Technical Brief", "Reporting Plan"],
    },
    {
      number: "03",
      icon: Wrench,
      title: "Doing The Nerd Stuff",
      description: "Our engineers and designers lock themselves in a room (figuratively) and build your digital empire with annoyingly perfect code and design.",
      duration: "2-8 weeks",
      deliverables: ["Flawless Execution", "QA & Testing", "Launch & Rollout", "Documentation"],
    },
    {
      number: "04",
      icon: LineChart,
      title: "Watch Numbers Go Up",
      description: "We launch, track everything, and obsess over the data. If something can be better, we tweak it until it's perfect.",
      duration: "Ongoing",
      deliverables: ["Performance Review", "Optimization Backlog", "Iteration Cycles", "Constant Support"],
    },
  ];

  return (
    <section className="py-32 relative bg-brand-primary overflow-hidden border-y-2 border-gray-900">
      <div className="absolute inset-0 bg-pattern opacity-30 pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border-2 border-gray-900 bg-white rounded-full px-5 py-2.5 text-sm font-bold text-gray-900 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <Rocket className="w-5 h-5" />
            <span className="uppercase tracking-wider">How The Sausage Is Made</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black mb-6 text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] tracking-tight leading-tight"
          >
            How We Make The <br/><span className="text-brand-accent">Magic Happen</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl max-w-3xl mx-auto font-bold text-gray-900"
          >
            We follow a strict 4-step system. Because winging it is for amateurs and we actually like predictable results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-[2rem] border-2 border-gray-900 relative group overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
              >
                <div className="absolute -top-6 -right-6 p-6 text-[10rem] font-black text-gray-100 select-none group-hover:text-brand-accent/20 transition-colors z-0">
                  {step.number}
                </div>
                
                <div className="relative z-10 flex flex-col sm:flex-row gap-6">
                  <div className="w-20 h-20 shrink-0 rounded-full bg-brand-accent border-2 border-gray-900 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-12 transition-transform">
                    <IconComponent className="w-10 h-10 text-gray-900" />
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-3xl font-black text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-700 mb-6 font-medium text-lg leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">What You Actually Get:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.deliverables.map((deliverable, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 font-bold text-gray-600">
                            <div className="w-2 h-2 rounded-full bg-brand-primary border border-gray-900"></div>
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
