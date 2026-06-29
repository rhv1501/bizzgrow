"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { posts } from "./data";

export default function BlogPage() {
  const heroRef = useRef(null);

  // Hero Scroll Effects
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const titleY = useTransform(heroScroll, [0, 1], [0, 300]);
  const titleOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const asteriskRotate = useTransform(heroScroll, [0, 1], [0, 360]);

  // GSAP Horizontal Scroll with Pinning
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current || !galleryRef.current) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        const galleryWidth = galleryRef.current?.scrollWidth || 0;
        return -(galleryWidth - window.innerWidth);
      };

      const tween = gsap.to(galleryRef.current, {
        x: getScrollAmount,
        ease: "none"
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${(getScrollAmount() * -1) || window.innerWidth}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-background min-h-screen selection:bg-brand-mint selection:text-foreground">
      
      {/* MASSIVE HERO */}
      <section ref={heroRef} className="h-screen relative flex flex-col items-center justify-center overflow-hidden">
        {/* Abstract background blobs */}
        <motion.div 
          style={{ y: useTransform(heroScroll, [0, 1], [0, -200]) }}
          className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" 
        />
        <motion.div 
          style={{ y: useTransform(heroScroll, [0, 1], [0, 200]) }}
          className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-brand-peach/20 rounded-full blur-[100px] pointer-events-none" 
        />
        
        <div className="absolute top-32 left-8 md:left-16 flex items-center gap-4 z-10">
          <span className="w-12 h-px bg-foreground" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] font-bold">The Brain Dump</span>
        </div>

        <motion.div style={{ y: titleY, opacity: titleOpacity }} className="relative z-10 w-full px-4 text-center">
          <h1 className="text-[clamp(4rem,12vw,15rem)] font-medium tracking-tighter leading-[0.8] text-foreground flex flex-col items-center justify-center">
            <span className="flex items-center">
              THINK
              <motion.span style={{ rotate: asteriskRotate }} className="text-brand-primary mx-4 font-serif italic text-[clamp(5rem,14vw,18rem)] leading-none inline-block origin-center mt-4">
                *
              </motion.span>
            </span>
            <span className="italic font-serif opacity-80 pl-[10vw]">ALOUD.</span>
          </h1>
        </motion.div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Scroll to explore</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-16 bg-gradient-to-b from-foreground to-transparent"
          />
        </div>
      </section>

      {/* HORIZONTAL SCROLL GALLERY (GSAP) */}
      <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-surface flex items-center border-y border-border/60">
        
        {/* A giant background text that stays fixed while cards scroll over it */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
          <h2 className="text-[30vw] font-black tracking-tighter whitespace-nowrap">ARTICLES</h2>
        </div>

        {/* w-max is CRITICAL: it allows the flex container to grow as wide as its content dictates */}
        <div 
          ref={galleryRef}
          className="flex gap-8 md:gap-16 px-4 md:px-[10vw] items-center relative z-10 w-max"
        >
            {posts.map((post, i) => {
              // Creating alternating physical heights and alignments for a dynamic "scattered" editorial feel
              const isEven = i % 2 === 0;
              const isDark = post.color === "bg-foreground" || post.color === "bg-brand-primary" || post.color === "bg-brand-secondary";
              const textClass = isDark ? "text-background" : "text-foreground";
              const mutedClass = isDark ? "text-background/60" : "text-foreground/60";

              return (
                <Link 
                  href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}
                  key={i} 
                  className={`group relative flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw] h-[60vh] md:h-[70vh] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 flex flex-col justify-between overflow-hidden shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-4 ${post.color} ${isEven ? 'mt-12' : '-mt-12'}`}
                >
                  {/* Texture overlay */}
                  <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

                  {/* Card Content */}
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-12">
                      <span className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest border ${isDark ? 'border-background/20 bg-background/10' : 'border-foreground/20 bg-foreground/5'} backdrop-blur-md ${textClass}`}>
                        {post.category}
                      </span>
                      <span className={`font-mono text-sm font-bold ${textClass}`}>
                        0{i + 1}
                      </span>
                    </div>

                    <h3 className={`text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05] ${textClass}`}>
                      {post.title}
                    </h3>
                  </div>

                  <div className="relative z-10 flex flex-col gap-8">
                    <p className={`text-lg md:text-xl leading-relaxed ${mutedClass}`}>
                      {post.excerpt}
                    </p>

                    <div className={`flex items-center justify-between border-t pt-6 ${isDark ? 'border-background/20' : 'border-foreground/20'}`}>
                      <div className={`flex items-center gap-4 text-xs font-mono uppercase tracking-widest ${mutedClass}`}>
                        <span>{post.date}</span>
                        <span className={`w-1 h-1 rounded-full ${isDark ? 'bg-background/40' : 'bg-foreground/40'}`} />
                        <span>{post.readTime}</span>
                      </div>
                      <div className={`w-12 h-12 rounded-full border flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 ${isDark ? 'border-background/20 text-background group-hover:bg-background group-hover:text-foreground' : 'border-foreground/20 text-foreground group-hover:bg-foreground group-hover:text-background'}`}>
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}

            {/* End of Gallery CTA Card */}
            <div className="relative flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw] h-[60vh] md:h-[70vh] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 flex flex-col items-center justify-center text-center border-2 border-dashed border-border/60">
               <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-8">
                 Craving <br/><span className="italic font-serif">more?</span>
               </h3>
               <button className="btn-primary">
                 View the Archive
               </button>
            </div>
          </div>
      </section>

      {/* MINIMALIST NEWSLETTER (Remains at bottom) */}
      <section className="py-32 md:py-48 relative overflow-hidden bg-background">
        <div className="mx-auto max-w-4xl px-4 relative z-10 text-center">
           <p className="text-xs font-mono text-muted mb-8 uppercase tracking-widest">
             Join the inner circle
           </p>
           <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-medium tracking-tight mb-12 leading-[1.1]">
             Zero fluff. Just <br className="hidden md:block" />
             <span className="italic font-serif text-brand-primary">pure signal.</span>
           </h2>
           
           <form className="max-w-xl mx-auto relative group">
             <input 
               type="email" 
               placeholder="Enter your email address" 
               className="w-full bg-surface border border-border/60 rounded-full px-8 py-5 md:py-6 text-lg placeholder:text-muted focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all"
               required
             />
             <button 
               type="submit"
               className="absolute right-2 top-2 bottom-2 bg-foreground text-background px-6 md:px-8 rounded-full font-bold hover:scale-[0.98] transition-transform flex items-center gap-2"
             >
               Subscribe
             </button>
           </form>
           
           <p className="text-sm text-muted mt-6">
             One high-value email per week. Unsubscribe anytime.
           </p>
        </div>
      </section>
    </main>
  );
}
