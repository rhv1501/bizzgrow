"use client";
import { motion } from "framer-motion";

const Manifesto = () => {
  return (
    <section className="py-16 md:py-32 bg-brand-primary border-y-2 border-border overflow-hidden relative">
      <div className="absolute inset-0 bg-pattern opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="bg-brand-peach text-foreground px-6 py-2 rounded-full border border-border shadow-md font-black uppercase tracking-widest text-sm rotate-[-2deg] inline-block">
              Our Manifesto
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-8xl font-black text-foreground leading-[1.1] tracking-tighter uppercase">
            We believe that <br />
            <span className="inline-block bg-surface text-background px-4 py-1 rounded-2xl border border-border shadow-md">
              generic
            </span>{" "}
            is the <br />
            enemy of{" "}
            <span className="bg-brand-mint text-foreground px-4 py-1 rotate-2 inline-block border border-border shadow-md mt-2 rounded-2xl">
              Profit.
            </span>
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-foreground leading-relaxed"
            >
              The internet is flooded with cheap templates, corporate jargon, and
              websites that look exactly like your competitors.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold text-foreground leading-relaxed"
            >
              We don&apos;t do that here. We build unapologetically bold digital ecosystems that
              automate your operations, scale your revenue, and force people to pay attention.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Decorative massive floating text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-5 z-0">
        <h3 className="text-[20rem] font-black text-foreground whitespace-nowrap">
          NO FLUFF
        </h3>
      </div>
    </section>
  );
};

export default Manifesto;
