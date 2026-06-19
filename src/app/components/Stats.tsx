"use client";
import { motion } from "framer-motion";
import { Rocket, ShieldCheck, Layers, Star } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      value: "50+",
      label: "Projects Shipped",
      icon: Rocket,
      bgColor: "bg-brand-primary",
      textColor: "text-foreground",
      iconBg: "bg-surface",
      iconColor: "text-brand-primary",
    },
    {
      value: "100%",
      label: "In-House Team",
      icon: ShieldCheck,
      bgColor: "bg-brand-primary",
      textColor: "text-foreground",
      iconBg: "bg-foreground",
      iconColor: "text-brand-primary",
    },
    {
      value: "360°",
      label: "Full-Service",
      icon: Layers,
      bgColor: "bg-brand-secondary",
      textColor: "text-foreground",
      iconBg: "bg-foreground",
      iconColor: "text-brand-secondary",
    },
    {
      value: "4.5",
      label: "Star Average",
      icon: Star,
      bgColor: "bg-brand-primary",
      textColor: "text-foreground",
      iconBg: "bg-surface",
      iconColor: "text-brand-primary",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background relative border-y-4 border-border overflow-hidden">
      {/* Brutalist Grid Background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#111827 2px, transparent 2px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-24 gap-6 md:gap-8">
          <div>
            <div className="inline-block bg-surface border border-border px-4 py-2 rounded-full font-black text-xs md:text-sm uppercase tracking-widest shadow-md mb-4 md:mb-6 transform -rotate-2">
              No Fluff
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-foreground tracking-tight leading-none uppercase">
              Data Over <br className="hidden sm:block" /> Drama
            </h2>
          </div>
          <div className="md:max-w-md">
            <p className="text-lg md:text-2xl font-bold text-muted leading-relaxed border-l-4 border-brand-primary pl-4 md:pl-6 py-2">
              We don&apos;t care about vanity metrics. We care about systems that print revenue and operations that scale.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${stat.bgColor} rounded-2xl sm:rounded-3xl md:rounded-4xl p-4 sm:p-6 md:p-10 border-2 md:border border-border shadow-md md:shadow-md hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-md md:hover:shadow-md transition-all duration-300 group flex flex-col items-center text-center md:items-start md:text-left`}
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full ${stat.iconBg} border-2 md:border border-border shadow-md md:shadow-md flex items-center justify-center mb-3 sm:mb-6 md:mb-8 group-hover:scale-110 transition-transform`}
                >
                  <Icon
                    className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 ${stat.iconColor} stroke-3`}
                  />
                </div>

                <h3
                  className={`text-3xl sm:text-5xl md:text-7xl font-black ${stat.textColor} mb-1 sm:mb-2 md:mb-4 tracking-tighter drop-shadow-md md:drop-shadow-md`}
                >
                  {stat.value}
                </h3>

                <p
                  className={`text-[10px] sm:text-xs md:text-xl font-black uppercase tracking-widest ${stat.textColor} opacity-90 leading-tight`}
                >
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
