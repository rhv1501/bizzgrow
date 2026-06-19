"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransitionOverlay() {
  const router = useRouter();
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    requestAnimationFrame(() => setIsFirstMount(false));
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#") || href === pathname) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      // Dispatch event so other components (like Navbar) know to close immediately
      window.dispatchEvent(new Event("start-page-transition"));

      // Trigger cover animation
      setIsAnimating(true);

      // Wait for cover animation to finish, then navigate under the hood
      setTimeout(() => {
        router.push(href);
      }, 800); 
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [router, pathname]);

  useEffect(() => {
    // When pathname changes (navigation complete), trigger reveal animation
    if (isAnimating) {
      requestAnimationFrame(() => setIsAnimating(false));
    }
  }, [pathname, isAnimating]);

  const columns = 5;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none flex">
      <AnimatePresence mode="wait">
        {(isAnimating || isFirstMount) && (
          <>
            {/* Layer 1: Brand Accent */}
            {[...Array(columns)].map((_, i) => (
              <motion.div
                key={`accent-${i}`}
                className="absolute h-full w-1/5 bg-brand-primary"
                style={{ left: `${i * 20}%` }}
                initial={{ top: isFirstMount ? "0%" : "100%" }}
                animate={{ top: "0%" }}
                exit={{ top: "-100%" }}
                transition={{
                  duration: 0.8,
                  ease: [0.76, 0, 0.24, 1],
                  delay: i * 0.05,
                }}
              />
            ))}
            
            {/* Layer 2: Dark Foreground */}
            {[...Array(columns)].map((_, i) => (
              <motion.div
                key={`dark-${i}`}
                className="absolute h-full w-1/5 bg-foreground"
                style={{ left: `${i * 20}%` }}
                initial={{ top: isFirstMount ? "0%" : "100%" }}
                animate={{ top: "0%" }}
                exit={{ top: "-100%" }}
                transition={{
                  duration: 0.8,
                  ease: [0.76, 0, 0.24, 1],
                  delay: i * 0.05 + 0.1, // Follow closely behind
                }}
              />
            ))}
            
            {/* Massive Loading Text */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center z-[10000]"
              initial={{ opacity: 0 }}
              animate={{ opacity: isFirstMount ? 0 : 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 0.4, delay: isFirstMount ? 0 : 0.4 }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-surface tracking-tighter uppercase italic">
                BizzGrowLabs
              </h2>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
