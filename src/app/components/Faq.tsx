"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    q: "How long does a digital transformation project typically take?",
    a: "A comprehensive project—including brand strategy, web design, and initial automation setups—typically takes 6 to 10 weeks. For single services like performance marketing campaigns or smaller web redesigns, timelines range from 2 to 4 weeks.",
    brandColor: "bg-brand-mint/40",
    borderColor: "border-brand-mint/60",
  },
  {
    q: "Do you handle both strategy and execution?",
    a: "Yes. We don't just hand you a blueprint and leave. From initial discovery and brand positioning to writing the code, running the ad campaigns, and setting up the CRM automations—we execute end-to-end.",
    brandColor: "bg-brand-peach/40",
    borderColor: "border-brand-peach/60",
  },
  {
    q: "Can you integrate with our existing software stack?",
    a: "Absolutely. We specialize in connecting modern platforms. Whether you use HubSpot, Salesforce, Shopify, or custom APIs, our automation team ensures data flows seamlessly across your entire business ecosystem.",
    brandColor: "bg-brand-primary/20",
    borderColor: "border-brand-primary/40",
  },
  {
    q: "How do you measure the success of a marketing campaign?",
    a: "We align all our reporting to your actual business outcomes—booked calls, qualified leads, and direct revenue. We set up advanced analytics (GA4, custom tracking pixels) so you know exactly what every dollar is generating.",
    brandColor: "bg-[#f3cfd8]/40", // brand-secondary
    borderColor: "border-[#f3cfd8]/60",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Soft floating background element to reinforce Calm Studio vibe */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-peach/10 rounded-full blur-[120px] pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Sticky Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="text-[clamp(3.5rem,6vw,5.5rem)] font-black tracking-tight text-foreground leading-[1]"
            >
              FAQ.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="text-muted mt-6 text-xl font-medium max-w-md"
            >
              Frequent inquiries.<br/>
              Clarity is essential before any engagement. Here is how we operate.
            </motion.p>
          </div>

          {/* Right Accordion */}
          <div className="lg:col-span-8 flex flex-col w-full gap-4 mt-12 lg:mt-0">
            {items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div 
                  key={i} 
                  initial={false}
                  animate={{ 
                    backgroundColor: isOpen ? "var(--tw-bg-opacity, 1)" : "rgba(255, 253, 249, 0)", // transparent or filled
                  }}
                  className={`rounded-3xl border transition-colors duration-500 overflow-hidden ${isOpen ? item.brandColor + ' ' + item.borderColor : 'border-border/60 bg-transparent'}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full text-left p-6 md:p-8 flex items-center justify-between group"
                  >
                    <span className="text-xl md:text-2xl font-semibold tracking-tight pr-8 text-foreground">
                      {item.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? 'bg-foreground text-surface' : 'bg-surface border border-border text-foreground group-hover:bg-foreground group-hover:text-surface'}`}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                      >
                        <div className="px-6 md:px-8 pb-8 pt-2">
                          <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Faq;
