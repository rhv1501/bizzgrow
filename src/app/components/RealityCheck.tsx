"use client";
import { motion } from "framer-motion";

const RealityCheck = () => {
  return (
    <section className="py-20 md:py-32 bg-white relative border-y-2 border-gray-900 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.1] mb-6"
          >
            The Reality <span className="bg-[#FF3366] text-white px-3 py-1 rotate-[-2deg] inline-block border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">Check</span>
          </motion.h2>
          <p className="text-xl md:text-2xl font-bold text-gray-600">
            Let's be brutally honest for a second.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Bad column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-100 p-6 md:p-10 rounded-[3rem] border-4 border-gray-900 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col"
          >
            <div className="text-center mb-10">
              <h3 className="text-3xl font-black text-gray-900 mb-2">Doing It Yourself</h3>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Or hiring your nephew</p>
            </div>

            <div className="space-y-6 flex-1">
              {[
                "Buying a $50 template that everyone uses",
                "Spending 3 weeks arguing over a shade of blue",
                "Writing copy that sounds like a robot",
                "Wondering why the website takes 8 seconds to load",
                "Getting exactly zero leads per month",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-gray-900 flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mt-1">
                    <span className="text-white font-black">✕</span>
                  </div>
                  <p className="text-xl font-bold text-gray-700 leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Good column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#00E5FF] p-6 md:p-10 rounded-[3rem] border-4 border-gray-900 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col relative overflow-hidden group hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-white rounded-bl-full border-b-4 border-l-4 border-gray-900 flex items-center justify-center p-6 md:p-8 group-hover:bg-[#FFD500] transition-colors">
              <span className="text-4xl md:text-6xl font-black text-gray-900">!</span>
            </div>

            <div className="mb-10 relative z-10">
              <h3 className="text-3xl font-black text-gray-900 mb-2">Hiring BizzGrow</h3>
              <p className="text-gray-700 font-bold uppercase tracking-widest text-sm">The smart choice</p>
            </div>

            <div className="space-y-6 flex-1 relative z-10">
              {[
                "Custom built to destroy your competition",
                "Lightning fast performance & SEO",
                "Copywriting that actually converts",
                "Strategic growth plan included",
                "You go back to running your business",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#FFD500] border-2 border-gray-900 flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mt-1">
                    <span className="text-gray-900 font-black">✓</span>
                  </div>
                  <p className="text-xl font-bold text-gray-900 leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RealityCheck;
