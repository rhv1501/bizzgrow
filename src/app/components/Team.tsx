"use client";

import { motion } from "framer-motion";

const Team = () => {
  const people = [
    { name: "Rudresh H Vyas", role: "Founder & CEO" },
  ];

  return (
    <section className="py-32 bg-brand-primary relative overflow-hidden border-y-2 border-gray-900">
      <div className="absolute inset-0 bg-pattern opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border-2 border-gray-900 bg-white rounded-full px-5 py-2.5 text-sm font-bold text-gray-900 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-widest"
          >
            Leadership
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
          >
            The Mind Behind the <span className="bg-brand-accent text-gray-900 px-4 py-1 rotate-2 inline-block border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-2">Mission</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-900 font-bold text-2xl mt-6 max-w-2xl mx-auto"
          >
            Every great company begins with a bold vision. We combine technical expertise and creative chaos to build solutions that actually work.
          </motion.p>
        </div>

        <div className="flex justify-center">
          {people.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[3rem] border-4 border-gray-900 flex flex-col items-center text-center w-full max-w-md shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="w-32 h-32 rounded-full mb-8 flex items-center justify-center text-gray-900 text-5xl font-black bg-brand-accent border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-[-5deg] group-hover:rotate-0 transition-transform">
                {p.name.split(" ")[0][0]}
              </div>
              <h4 className="text-3xl font-black text-gray-900 mb-2">{p.name}</h4>
              <p className="text-brand-secondary text-lg font-bold uppercase tracking-wider">{p.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
