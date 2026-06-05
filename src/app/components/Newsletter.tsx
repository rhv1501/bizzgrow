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
    <section className="py-24 bg-brand-mint relative border-y-2 border-gray-900">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 text-gray-900 tracking-tight leading-[1.1]">
            Stay Ahead of <span className="bg-white text-gray-900 px-4 py-1 rotate-[-2deg] inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-gray-900 mt-2">Digital Trends</span>
          </h2>
          <p className="text-gray-800 font-bold mb-10 text-2xl max-w-2xl mx-auto">
            Get weekly insights on digital transformation and growth. Join 2,000+ business owners who trust our expertise.
          </p>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto relative z-10">
            <div className="flex flex-col sm:flex-row gap-4 bg-white p-2 rounded-full border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your business email"
                className="flex-1 px-8 py-5 bg-transparent text-gray-900 font-bold text-lg placeholder-gray-500 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-brand-primary text-white font-black text-xl px-10 py-5 rounded-full border-2 border-gray-900 hover:bg-brand-secondary transition-colors"
                disabled={status === "subscribing"}
              >
                {status === "subscribing" ? "Subscribing..." : "Subscribe"}
              </button>
            </div>

            <div className="mt-6 text-lg font-bold text-center">
              {status === "subscribed" && (
                <p className="text-green-700">✓ Successfully subscribed! Check your email.</p>
              )}
              {status === "error" && (
                <p className="text-red-700">Something went wrong. Please try again.</p>
              )}
              {!status && (
                <p className="text-gray-700">No spam. Unsubscribe anytime.</p>
              )}
            </div>
          </form>

          <div className="flex flex-wrap justify-center items-center gap-8 mt-16 text-lg font-bold text-gray-900">
            {["Weekly insights", "Industry trends", "Growth strategies"].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-brand-primary border-2 border-gray-900"></div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
