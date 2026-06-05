"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsLaunching(true);
    
    // Add a tiny delay before the scroll starts so the rocket animation feels like it's pulling the screen up
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 150);

    // Reset after it's gone and we're at the top
    setTimeout(() => {
      setIsLaunching(false);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 50, rotate: 15 }}
          animate={
            isLaunching
              ? { 
                  y: [0, 50, -3000], // Anticipation dip, then blast into orbit
                  scaleY: [1, 0.4, 12], // Extreme squash, then insane vertical stretch
                  scaleX: [1, 1.8, 0.1], // Widen heavily, then become a thin laser
                  rotate: [0, -10, 0], 
                  backgroundColor: ["#FFD500", "#FF3366", "#00E5FF"], // Flash colors
                  opacity: [1, 1, 0],
                  transition: { duration: 0.8, ease: "easeInOut", times: [0, 0.2, 1] } 
                }
              : { opacity: 1, y: 0, rotate: -5 }
          }
          exit={{ opacity: 0, y: 50, scale: 0.5 }}
          whileHover={
            isLaunching 
              ? {} 
              : { 
                  scale: 1.25, 
                  rotate: 0,
                  y: -10,
                  boxShadow: "16px 16px 0px 0px rgba(0,0,0,1)",
                }
          }
          whileTap={
            isLaunching
              ? {}
              : { 
                  scale: 0.9, 
                  scaleX: 1.2,
                  scaleY: 0.7,
                  y: 5, 
                  rotate: -10,
                  boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)",
                  backgroundColor: "#FF3366",
                  transition: { duration: 0.1 }
                }
          }
          onTap={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[60] bg-[#FFD500] w-14 h-14 md:w-16 md:h-16 rounded-xl border-4 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center cursor-pointer overflow-hidden group"
          aria-label="Scroll to top"
        >
          {/* Animated Background on hover */}
          <div className="absolute inset-0 bg-[#00E5FF] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
          
          {/* Arrow */}
          <motion.div
            animate={
              isLaunching 
                ? { y: -200, opacity: 0, scale: 4, rotate: 1080 } 
                : { y: [0, -4, 0] }
            }
            transition={isLaunching ? { duration: 0.6 } : { repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="relative z-10 flex items-center justify-center"
          >
            <ArrowUp className="w-8 h-8 text-gray-900 group-hover:-translate-y-1 transition-transform" strokeWidth={4} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
