"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  // A premium, weighty spring configuration for that "agency" feel
  const springConfig = { type: "spring" as const, bounce: 0.2, duration: 1.2 };
  
  // Staggering container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  // Blur & fade up item
  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    show: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: springConfig
    }
  };

  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden pt-32 pb-20 bg-pattern">
      {/* Colorful Animated Blobs - Fade in softly */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="blob-shape bg-brand-primary/20 w-[400px] h-[400px] top-0 left-[-100px]"></motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 0.2 }} className="blob-shape bg-brand-secondary/20 w-[500px] h-[500px] bottom-[-100px] right-[-100px]" style={{ animationDelay: '2s' }}></motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 0.4 }} className="blob-shape bg-brand-accent/30 w-[300px] h-[300px] top-[20%] right-[10%]" style={{ animationDelay: '4s' }}></motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 0.6 }} className="blob-shape bg-brand-mint/30 w-[350px] h-[350px] bottom-[20%] left-[20%]" style={{ animationDelay: '1s' }}></motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          
          <motion.div variants={itemVariants} className="flex justify-center mb-4 md:mb-8">
            <div className="inline-flex items-center gap-2 bg-white px-4 md:px-5 py-2 md:py-2.5 rounded-full border-2 border-gray-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg] hover:rotate-0 transition-transform cursor-crosshair">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-brand-primary" />
              <span className="font-bold text-gray-900 tracking-wider uppercase text-xs md:text-sm">Say goodbye to boring</span>
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-black leading-[0.95] tracking-tighter text-gray-900 mb-4 md:mb-8">
            We Make Brands <br/>
            <span className="relative inline-block mt-2 md:mt-4">
              <span className="relative z-10 text-white px-3 md:px-4 py-1 md:py-2 bg-gray-900 rounded-2xl md:rounded-[2rem] rotate-[-2deg] inline-block">Unignorable.</span>
              <span className="absolute inset-0 bg-brand-primary rounded-2xl md:rounded-[2rem] rotate-[2deg] z-0 translate-y-1 translate-x-1 md:translate-y-2 md:translate-x-2"></span>
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-bold mb-6 md:mb-12 px-2 md:px-0">
            We're a creative studio that builds eye-catching websites, scroll-stopping brands, and digital experiences that actually make people want to buy your stuff.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center">
            <Link href="/contact" className="btn-primary text-base md:text-lg w-full sm:w-auto hover:-translate-y-1 transition-transform py-3 md:py-4 flex items-center justify-center gap-2">
              Start A Project
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
            <Link href="/portfolio" className="btn-secondary text-base md:text-lg w-full sm:w-auto bg-white hover:-translate-y-1 transition-transform py-3 md:py-4 flex items-center justify-center">
              See Our Magic
            </Link>
          </motion.div>
        </motion.div>

        {/* Visual Showcase Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ...springConfig, delay: 0.6 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto"
        >
          <div className="col-span-2 row-span-2 rounded-[2rem] overflow-hidden border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative aspect-square md:aspect-auto group">
            <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
            <Image src="/hero1.png" alt="Creative Studio" fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
            <div className="absolute bottom-6 left-6 z-20">
              <span className="bg-white text-gray-900 font-black px-6 py-3 rounded-full border-2 border-gray-900 text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-widest">Bold Design</span>
            </div>
          </div>
          
          <div className="rounded-[2rem] bg-brand-accent p-6 border-4 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between aspect-square hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
            <h3 className="text-4xl md:text-6xl font-black text-gray-900">99%</h3>
            <p className="font-bold text-gray-900 text-sm md:text-base leading-snug">Less boring than your current site.</p>
          </div>

          <div className="rounded-[2rem] overflow-hidden border-4 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative aspect-square group">
            <Image src="/hero2.png" alt="Modern Technology" fill className="object-cover group-hover:scale-110 transition-transform duration-700" unoptimized />
          </div>

          <div className="col-span-2 rounded-[2rem] bg-brand-mint p-8 border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMGgyMHYyMEgwem0xMCAxMGE1IDUgMCAxIDAgMC0xMCA1IDUgMCAwIDAgMCAxMHoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-30 group-hover:opacity-10 transition-opacity duration-500"></div>
            <h3 className="text-3xl md:text-5xl font-black text-center text-gray-900 relative z-10 leading-tight">
              We make <br/> <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">awesome</span> happen.
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
