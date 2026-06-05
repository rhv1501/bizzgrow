"use client";

import { Play } from "lucide-react";

const VideoShowcase = () => {
  return (
    <section className="py-24 bg-background px-6 relative z-10">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden border-4 border-gray-900 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative aspect-video group cursor-pointer">
          <div className="absolute inset-0 bg-brand-secondary/40 flex items-center justify-center z-10 group-hover:bg-brand-secondary/20 transition-colors">
            <div className="w-24 h-24 bg-brand-accent rounded-full border-4 border-gray-900 flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform">
              <Play className="w-10 h-10 text-gray-900 ml-2" fill="currentColor" />
            </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2000&auto=format&fit=crop" 
            alt="Showreel" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute bottom-10 left-10 z-20">
            <h3 className="text-5xl md:text-7xl font-black text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">OUR SHOWREEL</h3>
            <p className="text-xl md:text-2xl font-bold text-brand-accent drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] mt-2">See what we're capable of.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
