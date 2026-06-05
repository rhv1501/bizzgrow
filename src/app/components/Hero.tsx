"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden pt-32 pb-20 bg-pattern">
      {/* Colorful Animated Blobs */}
      <div className="blob-shape bg-brand-primary/20 w-[400px] h-[400px] top-0 left-[-100px]"></div>
      <div className="blob-shape bg-brand-secondary/20 w-[500px] h-[500px] bottom-[-100px] right-[-100px]" style={{ animationDelay: '2s' }}></div>
      <div className="blob-shape bg-brand-accent/30 w-[300px] h-[300px] top-[20%] right-[10%]" style={{ animationDelay: '4s' }}></div>
      <div className="blob-shape bg-brand-mint/30 w-[350px] h-[350px] bottom-[20%] left-[20%]" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8"
          >
            <Sparkles className="w-5 h-5 text-brand-primary" />
            <span className="font-bold text-gray-900 tracking-wider uppercase text-sm">Say goodbye to boring</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-6xl md:text-8xl lg:text-[7.5rem] font-black leading-[0.95] tracking-tighter text-gray-900 mb-8"
          >
            We Make Brands <br/>
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-white px-4 py-2 bg-gray-900 rounded-3xl rotate-[-2deg] inline-block">Unignorable.</span>
              <span className="absolute inset-0 bg-brand-primary rounded-3xl rotate-[2deg] z-0 translate-y-2 translate-x-2"></span>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium mb-12"
          >
            We're a creative studio that builds eye-catching websites, scroll-stopping brands, and digital experiences that actually make people want to buy your stuff.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="btn-primary text-lg w-full sm:w-auto">
              Start A Project
              <ArrowRight className="w-6 h-6" />
            </button>
            <button className="btn-secondary text-lg w-full sm:w-auto bg-white">
              See Our Magic
            </button>
          </motion.div>
        </div>

        {/* Visual Showcase Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto"
        >
          <div className="col-span-2 row-span-2 rounded-[2rem] overflow-hidden border-2 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative aspect-square md:aspect-auto group">
            <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
            <Image src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop" alt="Creative Studio" fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
            <div className="absolute bottom-6 left-6 z-20">
              <span className="bg-white text-gray-900 font-bold px-4 py-2 rounded-full border-2 border-gray-900 text-sm">Bold Design</span>
            </div>
          </div>
          
          <div className="rounded-[2rem] bg-brand-accent p-6 border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between aspect-square hover:-translate-y-2 transition-transform">
            <h3 className="text-3xl font-black">99%</h3>
            <p className="font-bold text-gray-800">Less boring than your current site.</p>
          </div>

          <div className="rounded-[2rem] overflow-hidden border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative aspect-square group">
            <Image src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500&auto=format&fit=crop" alt="Retro Tech" fill className="object-cover group-hover:scale-110 transition-transform duration-500" unoptimized />
          </div>

          <div className="col-span-2 rounded-[2rem] bg-brand-mint p-8 border-2 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:-translate-y-2 transition-transform relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMGgyMHYyMEgwem0xMCAxMGE1IDUgMCAxIDAgMC0xMCA1IDUgMCAwIDAgMCAxMHoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-30"></div>
            <h3 className="text-3xl md:text-5xl font-black text-center relative z-10 leading-tight">
              We make <br/> <span className="text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">awesome</span> happen.
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
