"use client";
import { motion } from "framer-motion";

const Marquee = () => {
  const words = [
    "WEB DESIGN", "•", "BRANDING", "•", "MARKETING", "•", "SEO", "•", "AUTOMATION", "•",
    "WEB DESIGN", "•", "BRANDING", "•", "MARKETING", "•", "SEO", "•", "AUTOMATION", "•"
  ];

  return (
    <div className="w-full bg-brand-mint border-y-2 border-border py-4 overflow-hidden relative rotate-[-2deg] scale-105 my-20 z-20">
      <div className="flex w-[200%]">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {words.map((word, index) => (
            <span key={index} className="text-4xl md:text-5xl font-black text-foreground px-4 tracking-widest drop-shadow-md">
              {word}
            </span>
          ))}
          {words.map((word, index) => (
            <span key={index + words.length} className="text-4xl md:text-5xl font-black text-foreground px-4 tracking-widest drop-shadow-md">
              {word}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
