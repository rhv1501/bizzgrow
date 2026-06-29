"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useSpring } from "framer-motion";

export default function BlogClientWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Hero Title Parallax & Fade
      gsap.to(".hero-title", {
        y: 100,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-title",
          start: "top 20%",
          end: "bottom top",
          scrub: true,
        }
      });

      // 2. Banner Parallax
      gsap.to(".banner-image", {
        y: 150,
        ease: "none",
        scrollTrigger: {
          trigger: ".banner-image",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      // 3. Reveal Content Blocks on Scroll
      gsap.utils.toArray(".blog-content > *").forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* Fixed Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-50 origin-left"
        style={{ scaleX }}
      />
      {children}
    </div>
  );
}
