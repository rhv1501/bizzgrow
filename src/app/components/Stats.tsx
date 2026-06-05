"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Stats = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects for the floating stickers
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [50, -150]);
  const y4 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} className="py-16 md:py-32 bg-white relative border-y-4 border-gray-900 overflow-hidden">
      {/* Brutalist Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#111827 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      
      {/* Massive Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden">
        <span className="text-[15rem] md:text-[30rem] font-black text-gray-900 leading-none whitespace-nowrap -rotate-6">NUMBERS</span>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-[#FFD500] px-6 md:px-8 py-2 md:py-3 rounded-full border-4 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-[-3deg] hover:rotate-0 transition-transform"
          >
            <h2 className="text-3xl md:text-6xl font-black text-gray-900 uppercase tracking-widest">
              Bragging Rights
            </h2>
          </motion.div>
        </div>

        {/* Scattered Collage of Stats */}
        <div className="grid grid-cols-2 gap-4 md:block relative max-w-6xl mx-auto md:h-[500px] items-center justify-items-center">
          
          {/* Stat 1: Circle */}
          <motion.div 
            style={{ y: y1 }}
            className="relative md:absolute md:top-0 md:left-10 z-20 group w-full"
          >
            <div className="w-full aspect-square md:w-64 md:h-64 bg-[#FF3366] rounded-[2rem] md:rounded-full border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center text-center p-2 md:p-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
              <span className="text-4xl md:text-7xl font-black text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] md:drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-1 md:mb-2">50+</span>
              <span className="text-white font-bold text-[10px] md:text-base uppercase tracking-widest leading-tight">Projects Launched</span>
            </div>
          </motion.div>

          {/* Stat 2: Pill */}
          <motion.div 
            style={{ y: y2 }}
            className="relative md:absolute md:top-20 md:right-10 z-30 group w-full mx-auto"
          >
            <div className="w-full aspect-square md:aspect-auto bg-[#00E5FF] rounded-[2rem] md:rounded-[4rem] border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center text-center p-2 md:px-12 md:py-10 rotate-[2deg] md:rotate-[5deg] group-hover:rotate-0 transition-transform duration-300">
              <span className="text-4xl md:text-8xl font-black text-gray-900 mb-1 md:mb-2">99%</span>
              <span className="text-gray-900 font-black text-[10px] md:text-sm uppercase tracking-widest bg-white px-2 md:px-4 py-1 rounded-full border-2 border-gray-900 whitespace-nowrap">Happiness</span>
            </div>
          </motion.div>

          {/* Stat 3: Star-ish Polygon */}
          <motion.div 
            style={{ y: y3 }}
            className="relative md:absolute md:bottom-0 md:left-[30%] z-10 group w-full mx-auto"
          >
            <div className="w-full aspect-square bg-brand-primary border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center text-center p-2 md:p-10 rotate-[-5deg] md:rotate-[-10deg] group-hover:rotate-[5deg] transition-transform duration-300 rounded-[2rem] md:rounded-none" style={{ clipPath: 'none' }}>
              <div className="mt-2 md:mt-4">
                <span className="text-4xl md:text-7xl font-black text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] md:drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">ZERO</span>
              </div>
              <span className="text-white font-bold text-[10px] md:text-sm uppercase tracking-widest mt-1 md:mt-2">Broken Promises</span>
            </div>
          </motion.div>

          {/* Stat 4: Wavy rectangle */}
          <motion.div 
            style={{ y: y4 }}
            className="relative md:absolute md:bottom-20 md:right-[30%] z-40 group w-full mx-auto"
          >
            <div className="w-full aspect-square bg-white border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center text-center p-2 md:p-8 rounded-[2rem] md:rounded-2xl rotate-[3deg] md:rotate-[-5deg] group-hover:scale-110 transition-transform duration-300 overflow-hidden md:overflow-visible">
              <span className="text-4xl md:text-6xl font-black text-[#FF3366] mb-1 md:mb-2 underline decoration-2 md:decoration-4 underline-offset-4">24/7</span>
              <span className="text-gray-900 font-black text-[10px] md:text-sm uppercase tracking-widest">Caffeine Intake</span>
              {/* Decorative tape */}
              <div className="hidden md:block absolute -top-4 -right-4 w-16 h-8 bg-[#FFD500] border-2 border-gray-900 rotate-12 opacity-80"></div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Stats;
