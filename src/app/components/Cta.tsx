"use client";

import { ArrowRight, CheckCircle, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const Cta = () => {
  return (
    <section id="contact" className="py-16 md:py-32 relative bg-brand-secondary overflow-hidden border-y-4 border-gray-900">
      <div className="absolute inset-0 bg-pattern opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-accent rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 lg:p-20 border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] max-w-7xl mx-auto relative overflow-hidden"
        >
          {/* Decorative shapes */}
          <div className="hidden md:block absolute -top-10 -right-10 w-40 h-40 bg-brand-primary rounded-full border-4 border-gray-900"></div>
          <div className="hidden md:block absolute -bottom-10 -left-10 w-40 h-40 bg-brand-mint rounded-full border-4 border-gray-900"></div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
            {/* Content */}
            <div className="space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 border-2 border-gray-900 bg-white rounded-full px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-bold text-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Rocket className="w-4 h-4 md:w-5 md:h-5 text-brand-primary" />
                <span className="uppercase tracking-widest">The Final Pitch</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight">
                Ready to Stop <br className="hidden md:block"/> <span className="bg-white px-2 py-1 mt-2 md:mt-0 rotate-2 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-gray-900">Losing Money</span>?
              </h2>

              <p className="text-lg md:text-2xl text-gray-800 font-bold max-w-lg">
                Join the businesses that hired us and actually liked the result. Get a free consultation before we raise our prices.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-2 md:pt-4">
                <a href="/contact" className="btn-primary text-lg md:text-xl px-6 md:px-8 py-4 md:py-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  Let's Talk Business
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2" />
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex gap-6 md:gap-10 pt-6 md:pt-10 border-t-4 border-gray-900/20">
                <div>
                  <div className="text-3xl md:text-4xl font-black text-gray-900 mb-1">100%</div>
                  <div className="text-xs md:text-sm text-gray-700 uppercase tracking-widest font-bold">Real Results</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-black text-gray-900 mb-1">0%</div>
                  <div className="text-xs md:text-sm text-gray-700 uppercase tracking-widest font-bold">Corporate Fluff</div>
                </div>
              </div>
            </div>

            {/* Features card */}
            <div className="relative">
              <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 md:hover:-translate-y-2 transition-transform">
                <div className="text-center mb-8 md:mb-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-primary border-4 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-full mx-auto flex items-center justify-center mb-4 md:mb-6">
                    <Rocket className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 leading-tight">
                    The "Do It All" Package
                  </h3>
                  <p className="text-gray-600 font-bold text-base md:text-lg">
                    Because doing it yourself is a terrible idea
                  </p>
                </div>

                <div className="space-y-4 mb-8 md:mb-10">
                  {[
                    "Strategic Growth Plans (Not Guesses)",
                    "Websites That Don't Look Like 2012",
                    "Copywriting That Doesn't Put You To Sleep",
                    "Design That Makes Competitors Cry",
                    "Analytics You Can Actually Understand",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 md:gap-4">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-brand-primary shrink-0 mt-0.5" />
                      <span className="text-gray-800 font-bold text-sm md:text-lg leading-tight md:leading-normal">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-brand-mint rounded-2xl p-4 md:p-6 border-4 border-gray-900 flex items-center justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex-wrap gap-4">
                  <div>
                    <div className="text-gray-900 font-black text-lg md:text-xl">Honest Audit</div>
                    <div className="text-gray-700 font-bold text-xs md:text-sm mt-1 uppercase tracking-wider">Value $500</div>
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-gray-900 bg-white px-4 py-2 rounded-xl border-4 border-gray-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    FREE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
