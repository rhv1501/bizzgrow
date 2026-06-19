"use client";

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Target, Zap } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const WordRotate = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words]);

  return (
    <span className="inline-block text-brand-secondary">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)", rotateX: 90 }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", rotateX: 0 }}
          exit={{ opacity: 0, y: -20, filter: "blur(4px)", rotateX: -90 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="inline-block origin-center"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

// Physics-driven Magnetic Component
function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Snap back spring physics
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    // Pull the element 30% of the distance towards the mouse
    x.set((clientX - centerX) * 0.3);
    y.set((clientY - centerY) * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className="inline-block w-full sm:w-auto"
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Custom Cursor & Physics
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const cursorScale = useMotionValue(1);

  // Normalized mouse values for 3D tilt (-1 to 1)
  const normX = useMotionValue(0);
  const normY = useMotionValue(0);

  // Smooth springs for the custom cursor
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  const smoothScale = useSpring(cursorScale, { damping: 20, stiffness: 300 });

  // Extremely smooth, heavy physics for the 3D tilt
  const smoothNormX = useSpring(normX, { damping: 40, stiffness: 150, mass: 1 });
  const smoothNormY = useSpring(normY, { damping: 40, stiffness: 150, mass: 1 });

  // Map normalized mouse position to rotation degrees
  const rotateX = useTransform(smoothNormY, [-1, 1], [15, -15]);
  const rotateY = useTransform(smoothNormX, [-1, 1], [-15, 15]);

  useEffect(() => {
    const handleMount = requestAnimationFrame(() => setMounted(true));
    
    const handleMouseMove = (e: MouseEvent) => {
      // Screen space for cursor
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      // Normalized space for 3D tilt
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      normX.set(x);
      normY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      cancelAnimationFrame(handleMount);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY, normX, normY]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100dvh] w-full overflow-hidden bg-background flex flex-col items-center justify-center pt-24 pb-16 md:cursor-none"
      style={{ perspective: 1200 }} // Gives depth to the 3D transforms
    >
      
      {/* 1. INTERACTIVE CUSTOM CURSOR */}
      {mounted && (
        <>
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full mix-blend-difference hidden md:flex"
            style={{
              x: smoothMouseX,
              y: smoothMouseY,
              scale: smoothScale,
              width: 32,
              height: 32,
              translateX: "-50%",
              translateY: "-50%",
              backgroundColor: "#fff"
            }}
          />
          {/* Cursor trailing glow */}
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[90] rounded-full blur-[40px] opacity-40 bg-brand-primary hidden md:block"
            style={{
              x: smoothMouseX,
              y: smoothMouseY,
              width: 150,
              height: 150,
              translateX: "-50%",
              translateY: "-50%",
              transition: "width 0.2s, height 0.2s"
            }}
          />
        </>
      )}

      {/* 2. CREATIVE REACTIVE BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay"></div>
        {/* Animated grid lines that give a structural, engineered feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* 3. EYEBROW */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2 text-sm font-bold shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-brand-primary animate-pulse"></span>
            End-to-End Digital Transformation
          </div>
        </motion.div>

        {/* 4. MASSIVE TYPOGRAPHY WITH 3D TILT */}
        <div 
          className="relative w-full flex justify-center"
          onMouseEnter={() => cursorScale.set(4)}
          onMouseLeave={() => cursorScale.set(1)}
        >
          <motion.div
            style={{ 
              rotateX, 
              rotateY,
              transformStyle: "preserve-3d"
            }}
            className="will-change-transform"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 40, filter: "blur(10px)", scale: 0.9 }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-[clamp(2.5rem,7vw,6.5rem)] font-black leading-[0.9] tracking-tighter text-foreground uppercase"
              style={{ z: 50 }} // Pushes text out in 3D space
            >
              Don&apos;t Just Build A <br/>
              <WordRotate words={["Website.", "Brand.", "Campaign.", "SEO Strategy.", "Social Presence.", "Workflow.", "System."]} />
              <span className="block mt-4 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-mint bg-clip-text text-transparent transform-gpu drop-shadow-2xl">
                Build An Empire.
              </span>
            </motion.h1>
          </motion.div>
        </div>

        {/* 5. SUBHEAD */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 max-w-3xl text-[clamp(1.125rem,2vw,1.375rem)] font-bold leading-relaxed text-muted"
        >
          Stop piecing together your growth. We combine high-end web design, SEO, social media, performance marketing, and business automation into a single, unstoppable growth engine.
        </motion.p>

        {/* 6. MAGNETIC CONVERSION BUTTON */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 w-full max-w-md mx-auto"
          onMouseEnter={() => cursorScale.set(0.5)}
          onMouseLeave={() => cursorScale.set(1)}
        >
          <Magnetic>
            <div className="relative group flex justify-center w-full sm:w-auto cursor-pointer">
              {/* Ambient glow behind the button */}
              <div className="absolute -inset-1.5 rounded-[2rem] bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-mint opacity-40 blur-xl transition-opacity duration-500 group-hover:opacity-70 animate-pulse"></div>
              
              <Link 
                href="/contact"
                className="group/btn relative overflow-hidden flex w-full sm:w-auto items-center justify-center gap-3 rounded-[2rem] bg-surface ring-1 ring-border/50 px-10 py-5 shadow-2xl transition-transform active:scale-[0.97]"
              >
                <span className="relative z-10 flex items-center gap-2 text-base font-black text-foreground">
                  Start Your Transformation <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                </span>
                {/* Hover fill effect inside button */}
                <div className="absolute inset-0 bg-brand-primary translate-y-[100%] transition-transform duration-300 ease-out group-hover/btn:translate-y-0 z-0"></div>
              </Link>
            </div>
          </Magnetic>
        </motion.div>

        {/* 7. MICRO-CONVERSIONS (Trust) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-14 flex flex-wrap justify-center items-center gap-8 text-sm font-bold text-muted uppercase tracking-widest"
        >
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-brand-primary" /> End-to-End Execution
          </div>
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-brand-secondary" /> Conversion Driven
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-mint" /> Unapologetic Design
          </div>
        </motion.div>

      </div>
    </section>
  );
}
