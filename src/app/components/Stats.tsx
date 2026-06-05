"use client";
import { motion } from "framer-motion";
import { Rocket, ShieldCheck, Layers, Star } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      value: "50+",
      label: "Projects Shipped",
      icon: Rocket,
      bgColor: "bg-[#FF3366]",
      textColor: "text-white",
      iconBg: "bg-white",
      iconColor: "text-[#FF3366]",
    },
    {
      value: "100%",
      label: "In-House Team",
      icon: ShieldCheck,
      bgColor: "bg-[#00E5FF]",
      textColor: "text-gray-900",
      iconBg: "bg-gray-900",
      iconColor: "text-[#00E5FF]",
    },
    {
      value: "360°",
      label: "Full-Service",
      icon: Layers,
      bgColor: "bg-[#FFD500]",
      textColor: "text-gray-900",
      iconBg: "bg-gray-900",
      iconColor: "text-[#FFD500]",
    },
    {
      value: "4.5",
      label: "Star Average",
      icon: Star,
      bgColor: "bg-brand-primary",
      textColor: "text-white",
      iconBg: "bg-white",
      iconColor: "text-brand-primary",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50 relative border-y-4 border-gray-900 overflow-hidden">
      {/* Brutalist Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#111827 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-24 gap-6 md:gap-8">
          <div>
            <div className="inline-block bg-white border-2 border-gray-900 px-4 py-2 rounded-full font-black text-xs md:text-sm uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4 md:mb-6 transform -rotate-2">
              The Proof
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 tracking-tight leading-[1] uppercase">
              Numbers <br className="hidden sm:block"/> Don't Lie
            </h2>
          </div>
          <div className="md:max-w-md">
            <p className="text-lg md:text-2xl font-bold text-gray-700 leading-relaxed border-l-4 border-brand-primary pl-4 md:pl-6 py-2">
              We focus on one thing: measurable growth. Everything else is just noise.
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
                className={`${stat.bgColor} rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem] p-4 sm:p-6 md:p-10 border-2 md:border-4 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group flex flex-col items-center text-center md:items-start md:text-left`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full ${stat.iconBg} border-2 md:border-4 border-gray-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center mb-3 sm:mb-6 md:mb-8 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 ${stat.iconColor} stroke-[3]`} />
                </div>
                
                <h3 className={`text-3xl sm:text-5xl md:text-7xl font-black ${stat.textColor} mb-1 sm:mb-2 md:mb-4 tracking-tighter drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] md:drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]`}>
                  {stat.value}
                </h3>
                
                <p className={`text-[10px] sm:text-xs md:text-xl font-black uppercase tracking-widest ${stat.textColor} opacity-90 leading-tight`}>
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
