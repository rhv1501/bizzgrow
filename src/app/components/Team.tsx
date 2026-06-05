"use client";

import { motion } from "framer-motion";

const Team = () => {
  const people = [
    { name: "Rudresh H Vyas", role: "Founder & CEO" },
  ];

  return (
    <section className="py-16 md:py-32 bg-brand-primary relative overflow-hidden border-y-4 border-gray-900">
      <div className="absolute inset-0 bg-pattern opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border-2 border-gray-900 bg-white rounded-full px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-bold text-gray-900 mb-4 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-widest"
          >
            Leadership
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] md:drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
          >
            The Mind Behind the <br className="hidden md:block" /><span className="bg-brand-accent text-gray-900 px-3 py-1 md:px-4 md:py-1 rotate-2 inline-block border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-2">Mission</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-900 font-bold text-lg md:text-2xl mt-4 md:mt-6 max-w-2xl mx-auto px-2"
          >
            Every great company begins with a bold vision. We combine technical expertise and creative chaos to build solutions that actually work.
          </motion.p>
        </div>

        <div className="flex justify-center px-2 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border-4 border-gray-900 flex flex-col items-center text-center w-full max-w-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-[2rem] mb-6 md:mb-8 flex items-center justify-center text-gray-900 text-4xl md:text-5xl font-black bg-brand-accent border-4 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg] group-hover:rotate-0 transition-transform overflow-hidden relative">
              {/* Fallback initials if image fails or isn't uploaded yet */}
              <span className="absolute z-0">RV</span>
              <img
                src="/rudresh.jpg"
                alt="Rudresh H Vyas"
                className="w-full h-full object-cover relative z-10"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <h4 className="text-3xl md:text-4xl font-black text-gray-900 mb-1 md:mb-2">Rudresh H Vyas</h4>
            <p className="text-brand-primary text-sm md:text-lg font-black uppercase tracking-widest mb-6">Founder & CEO</p>
            <p className="text-gray-700 font-bold text-lg md:text-xl leading-relaxed max-w-sm">
              Obsessed with building digital experiences that don't just look pretty, but actually drive measurable growth. I lead the charge in combining creative design with hard-hitting technical strategy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
