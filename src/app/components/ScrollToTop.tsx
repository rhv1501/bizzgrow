"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();
  
  // Create a smooth spring-based progress value for the SVG ring
  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      if (latest > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [scrollY]);

  const scrollToTop = () => {
    setIsLaunching(true);

    // Wait for the expanding circle to cover the screen
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }, 600);

    // Pull the circle back after teleportation
    setTimeout(() => {
      setIsLaunching(false);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[60] group flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary backdrop-blur-md border border-brand-primary shadow-[0_0_40px_rgb(0,0,0,0.2)] hover:bg-foreground hover:border-foreground transition-colors duration-500 ${isLaunching ? 'pointer-events-none' : ''}`}
          aria-label="Scroll to top"
          data-cursor="TOP"
        >
          {/* The Massive Iris Wipe Circle */}
          <motion.div
            className="absolute inset-0 rounded-full bg-foreground z-50 pointer-events-none origin-center"
            initial={{ scale: 0 }}
            animate={{ scale: isLaunching ? 150 : 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />
          {/* Progress Ring */}
          <motion.svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-foreground/20"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="text-foreground"
              style={{ pathLength }}
            />
          </motion.svg>

          {/* Animated Arrow */}
          <motion.div 
            className="relative z-10 overflow-hidden w-6 h-6 flex items-center justify-center"
            animate={{ opacity: isLaunching ? 0 : 1 }}
          >
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ y: 0 }}
              whileHover={{ y: "-100%" }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            >
              <ArrowUp className="w-5 h-5 text-surface stroke-[1.5]" />
            </motion.div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ y: "100%" }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            >
              <ArrowUp className="w-5 h-5 text-surface stroke-[1.5]" />
            </motion.div>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
