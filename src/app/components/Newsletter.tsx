"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<null | string>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("subscribing");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("subscribed");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-24 bg-brand-mint relative border-y-2 border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 text-foreground tracking-tight leading-[1.1]">
            Stop Guessing. Start{" "}
            <span className="bg-brand-peach text-foreground px-4 py-1 rotate-[-2deg] inline-block shadow-md border border-border mt-2">
              Scaling.
            </span>
          </h2>
          <p className="text-foreground font-bold mb-10 text-2xl max-w-2xl mx-auto">
            Get weekly playbooks on automation, digital strategy, and scaling operations. Join 2,000+ founders who read it before their coffee.
          </p>

          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto relative z-10"
          >
            <div className="flex flex-col sm:flex-row gap-4 bg-surface p-2 rounded-full border border-border shadow-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your business email"
                className="flex-1 px-8 py-5 bg-transparent text-foreground font-bold text-lg placeholder:text-muted focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-brand-primary text-foreground font-black text-xl px-10 py-5 rounded-full border border-border hover:bg-brand-secondary transition-colors"
                disabled={status === "subscribing"}
              >
                {status === "subscribing" ? "Subscribing..." : "Subscribe"}
              </button>
            </div>

            <div className="mt-6 text-lg font-bold text-center">
              {status === "subscribed" && (
                <p className="text-foreground">
                  ✓ Successfully subscribed! Check your email.
                </p>
              )}
              {status === "error" && (
                <p className="text-foreground">
                  Something went wrong. Please try again.
                </p>
              )}
              {!status && (
                <p className="text-muted">No spam. Unsubscribe anytime.</p>
              )}
            </div>
          </form>

          <div className="flex flex-wrap justify-center items-center gap-8 mt-16 text-lg font-bold text-foreground">
            {["Weekly insights", "Industry trends", "Growth strategies"].map(
              (item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-brand-primary border border-border"></div>
                  <span>{item}</span>
                </div>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
