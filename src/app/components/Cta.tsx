"use client";

import { ArrowRight, CheckCircle, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const Cta = () => {
  return (
    <section id="contact" className="py-32 relative bg-brand-secondary overflow-hidden border-y-2 border-gray-900">
      <div className="absolute inset-0 bg-pattern opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-accent rounded-[3rem] p-10 lg:p-20 border-4 border-gray-900 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] max-w-7xl mx-auto relative overflow-hidden"
        >
          {/* Decorative shapes */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary rounded-full border-4 border-gray-900"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-mint rounded-full border-4 border-gray-900"></div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 border-2 border-gray-900 bg-white rounded-full px-5 py-2.5 text-sm font-bold text-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Rocket className="w-5 h-5 text-brand-primary" />
                <span className="uppercase tracking-widest">The Final Pitch</span>
              </div>

              <h2 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight">
                Ready to Stop <span className="bg-white px-2 py-1 rotate-2 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-gray-900">Losing Money</span>?
              </h2>

              <p className="text-2xl text-gray-800 font-bold max-w-lg">
                Join the businesses that hired us and actually liked the result. Get a free consultation before we raise our prices.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <a href="/contact" className="btn-primary text-xl px-8 py-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  Let's Talk Business
                  <ArrowRight className="w-6 h-6 ml-2" />
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex gap-10 pt-10 border-t-4 border-gray-900/20">
                <div>
                  <div className="text-4xl font-black text-gray-900 mb-1">100%</div>
                  <div className="text-sm text-gray-700 uppercase tracking-widest font-bold">Real Results</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-gray-900 mb-1">0%</div>
                  <div className="text-sm text-gray-700 uppercase tracking-widest font-bold">Corporate Fluff</div>
                </div>
              </div>
            </div>

            {/* Features card */}
            <div className="relative">
              <div className="bg-white rounded-[2.5rem] p-10 border-4 border-gray-900 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
                <div className="text-center mb-10">
                  <div className="w-20 h-20 bg-brand-primary border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-full mx-auto flex items-center justify-center mb-6">
                    <Rocket className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-2">
                    The "Do It All" Package
                  </h3>
                  <p className="text-gray-600 font-bold text-lg">
                    Because doing it yourself is a terrible idea
                  </p>
                </div>

                <div className="space-y-4 mb-10">
                  {[
                    "Strategic Growth Plans (Not Guesses)",
                    "Websites That Don't Look Like 2012",
                    "Copywriting That Doesn't Put You To Sleep",
                    "Design That Makes Competitors Cry",
                    "Analytics You Can Actually Understand",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <CheckCircle className="w-6 h-6 text-brand-primary shrink-0" />
                      <span className="text-gray-800 font-bold text-lg">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-brand-mint rounded-2xl p-6 border-4 border-gray-900 flex items-center justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <div>
                    <div className="text-gray-900 font-black text-xl">Honest Audit</div>
                    <div className="text-gray-700 font-bold text-sm mt-1 uppercase tracking-wider">Value $500</div>
                  </div>
                  <div className="text-3xl font-black text-gray-900 bg-white px-4 py-2 rounded-xl border-2 border-gray-900">
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
