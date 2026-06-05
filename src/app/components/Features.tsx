"use client";

import { Target, Lightbulb, Rocket, Users, BarChart3, Shield } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "Master Plans",
      description: "We don't just guess. We use actual data to figure out how to make you more money. Revolutionary concept, we know.",
      color: "bg-[#FF3366]",
      textColor: "text-white"
    },
    {
      icon: Lightbulb,
      title: "Prettify Things",
      description: "We make things look so good your competitors will weep. Seriously, it's almost unfair.",
      color: "bg-[#FFD500]",
      textColor: "text-gray-900"
    },
    {
      icon: Rocket,
      title: "Nerd Stuff",
      description: "Our code is so clean you could eat off it. We build fast, scalable, and secure digital assets.",
      color: "bg-[#00E5FF]",
      textColor: "text-gray-900"
    },
    {
      icon: Users,
      title: "Human Empathy",
      description: "We actually care about the humans using your product. Crazy, right? User experience is our middle name.",
      color: "bg-[#7000FF]",
      textColor: "text-white"
    },
    {
      icon: BarChart3,
      title: "Data Obsession",
      description: "If it can be tracked, we track it. Numbers go up, charts look green, everyone's happy.",
      color: "bg-[#FF9E80]",
      textColor: "text-gray-900"
    },
    {
      icon: Shield,
      title: "Got Your Back",
      description: "We don't just launch and disappear into the night. We stick around to make sure everything keeps running perfectly.",
      color: "bg-white",
      textColor: "text-gray-900"
    },
  ];

  return (
    <section className="py-32 relative bg-background overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border-2 border-gray-900 bg-white rounded-full px-5 py-2.5 text-sm font-bold text-gray-900 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <Target className="w-5 h-5 text-brand-primary" />
            <span className="uppercase tracking-widest">Why We Don't Suck</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black mb-6 text-gray-900 leading-tight tracking-tight"
          >
            Capabilities for <br/><span className="text-brand-primary underline decoration-8 underline-offset-4">Digital Domination</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl max-w-3xl mx-auto font-medium text-gray-600"
          >
            We combine strategic thinking with actual results. No fluff, no jargon, just things that make your business noticeably better.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group ${feature.color} p-8 rounded-[2rem] border-2 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden`}
              >
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-full bg-white border-2 border-gray-900 flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform group-hover:rotate-12 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-gray-900" />
                  </div>

                  <h3 className={`text-3xl font-black mb-4 ${feature.textColor}`}>
                    {feature.title}
                  </h3>

                  <p className={`font-semibold text-lg opacity-90 ${feature.textColor}`}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 max-w-7xl mx-auto"
        >
          <div className="bg-brand-secondary rounded-[3rem] p-10 lg:p-16 border-4 border-gray-900 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern opacity-30"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-16">
                <h3 className="text-4xl lg:text-5xl font-black text-white mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                  By the Numbers
                </h3>
                <p className="text-white text-xl font-bold max-w-2xl mx-auto">
                  We like to let the numbers do the talking. Here's a totally unbiased look at how great we are.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { num: "50+", label: "Projects Launched", bg: "bg-brand-accent", text: "text-gray-900" },
                  { num: "99%", label: "Client Happiness", bg: "bg-brand-mint", text: "text-gray-900" },
                  { num: "0", label: "Broken Promises", bg: "bg-brand-primary", text: "text-white" },
                  { num: "24/7", label: "Caffeine Intake", bg: "bg-white", text: "text-gray-900" }
                ].map((stat, i) => (
                  <div key={i} className={`${stat.bg} ${stat.text} rounded-3xl p-6 border-2 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center hover:scale-105 transition-transform`}>
                    <div className="text-4xl md:text-5xl font-black mb-2">{stat.num}</div>
                    <div className="font-bold text-sm uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
