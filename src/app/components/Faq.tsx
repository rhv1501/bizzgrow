"use client";

import { motion } from "framer-motion";

const Faq = () => {
  const items = [
    {
      q: "How long does a website project take?",
      a: "Typically 4–8 weeks depending on complexity and how quickly you reply to our emails. We move fast, but we can't read minds (yet).",
    },
    {
      q: "Do you provide ongoing marketing?",
      a: "Yes. We offer retainer packages because a launch is just the beginning. We like sticking around to see the numbers go up.",
    },
    {
      q: "Can you work with our existing stack?",
      a: "Absolutely. We integrate with popular CMS, ecommerce, and analytics tools. Unless you're using something built in 1998, in which case we might need to have a serious talk.",
    },
    {
      q: "Why should we hire you instead of my cousin's friend?",
      a: "Does your cousin's friend build scalable architectures, craft conversion-optimized UX, and stay awake at night thinking about your SEO? If yes, hire them. If not, hire us.",
    }
  ];

  return (
    <section className="py-32 bg-white relative z-10 border-y-2 border-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border-2 border-gray-900 bg-brand-peach rounded-full px-5 py-2.5 text-sm font-bold text-gray-900 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-widest"
          >
            FAQ
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.1]"
          >
            Questions You're <br/><span className="bg-brand-primary text-white px-4 py-1 rotate-[-2deg] inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-gray-900 mt-2">Probably Thinking</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 mt-6 text-2xl font-bold max-w-2xl mx-auto"
          >
            We know you have them. We have answers.
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {items.map((it, i) => (
            <motion.details 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2rem] border-4 border-gray-900 overflow-hidden group shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-shadow"
            >
              <summary className="font-black text-2xl text-gray-900 p-8 cursor-pointer list-none flex justify-between items-center hover:bg-gray-50 transition-colors">
                {it.q}
                <span className="text-gray-900 group-open:rotate-180 transition-transform duration-300 bg-brand-mint w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  ↓
                </span>
              </summary>
              <div className="p-8 pt-0 text-gray-700 text-xl font-medium leading-relaxed bg-gray-50 border-t-2 border-gray-200">
                <div className="mt-6">{it.a}</div>
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
