"use client";

import {
  Target,
  Lightbulb,
  Rocket,
  Users,
  BarChart3,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "Ruthless Strategy",
      description:
        "We analyze your operations and bottlenecks before we write a single line of code or copy.",
      color: "bg-brand-primary",
      textColor: "text-foreground",
    },
    {
      icon: Lightbulb,
      title: "Premium Design",
      description:
        "High-end aesthetics engineered specifically to build instant trust and drive action.",
      color: "bg-brand-secondary",
      textColor: "text-foreground",
    },
    {
      icon: Rocket,
      title: "Scalable Tech",
      description:
        "Bulletproof architecture and integrations that connect your CRM, ads, and website into one engine.",
      color: "bg-brand-mint",
      textColor: "text-foreground",
    },
    {
      icon: Users,
      title: "Frictionless Funnels",
      description:
        "We eliminate the friction that causes drop-off, turning casual browsers into booked revenue.",
      color: "bg-brand-secondary",
      textColor: "text-foreground",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Scaling",
      description:
        "Zero guesswork. We install the exact tracking needed to tie every marketing dollar to real ROI.",
      color: "bg-brand-peach",
      textColor: "text-foreground",
    },
    {
      icon: Shield,
      title: "Relentless Support",
      description:
        "We don't disappear after launch. We continuously optimize your system to maximize growth.",
      color: "bg-surface",
      textColor: "text-foreground",
    },
  ];

  return (
    <section className="py-16 md:py-32 relative bg-background overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-border bg-surface rounded-full px-5 py-2.5 text-sm font-bold text-foreground mb-6 shadow-md"
          >
            <Target className="w-5 h-5 text-brand-primary" />
            <span className="uppercase tracking-widest">
              Why Clients Choose Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 text-foreground leading-tight tracking-tight"
          >
            Capabilities built for <br />
            <span className="inline-block bg-surface text-foreground px-4 py-1 rounded-2xl border border-border shadow-md">
              Unfair Advantages
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl max-w-3xl mx-auto font-medium text-muted"
          >
            We combine ruthless strategy, premium design, and automated execution into a system that scales your business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group ${feature.color} p-8 rounded-4xl border border-border shadow-md hover:shadow-md hover:-translate-y-2 transition-all duration-300 relative overflow-hidden`}
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center mb-6 shadow-md transform group-hover:rotate-12 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-foreground" />
                  </div>

                  <h3
                    className={`text-3xl font-black mb-4 ${feature.textColor}`}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className={`font-semibold text-lg opacity-90 ${feature.textColor}`}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
