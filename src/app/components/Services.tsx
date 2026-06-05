"use client";
import Image from "next/image";

import { Monitor, TrendingUp, Palette, MousePointerClick, Search, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { services } from "../services/catalog";

const Services = () => {
  const router = useRouter();

  const iconsBySlug = {
    website: Monitor,
    marketing: TrendingUp,
    branding: Palette,
    performance: MousePointerClick,
    seo: Search,
    automation: Zap,
  } as const;

  const bgColors = [
    "bg-brand-primary",
    "bg-brand-secondary",
    "bg-brand-mint",
    "bg-brand-accent",
    "bg-[#FF9E80]", // Peach
    "bg-[#00E5FF]"  // Cyan
  ];

  const textColors = [
    "text-white",
    "text-white",
    "text-gray-900",
    "text-gray-900",
    "text-gray-900",
    "text-gray-900"
  ];

  return (
    <section id="services" className="py-16 md:py-32 relative bg-white border-y-2 border-gray-900 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-gray-900 bg-brand-accent shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8"
          >
            <Zap className="w-5 h-5 text-gray-900" />
            <span className="font-bold text-gray-900 uppercase tracking-widest text-sm">Our Superpowers</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 md:mb-8 text-gray-900 tracking-tight leading-[1.1]"
          >
            Stuff We're <span className="text-white px-4 py-1 bg-brand-secondary rounded-2xl rotate-2 inline-block">Unreasonably Good</span> At
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-medium text-gray-600 max-w-2xl mx-auto"
          >
            We don't just build websites. We build digital ecosystems that make your competitors nervously sweat.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, idx) => {
            const IconComponent = iconsBySlug[service.slug as keyof typeof iconsBySlug] ?? Zap;
            const bgColor = bgColors[idx % bgColors.length];
            const textColor = textColors[idx % textColors.length];

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => router.push(`/services/${service.slug}`)}
                className={`group relative ${bgColor} p-6 md:p-8 rounded-[2rem] cursor-pointer border-2 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full`}
              >
                <div className="w-full aspect-[4/3] rounded-[1.5rem] border-2 border-gray-900 overflow-hidden relative mb-6 md:mb-8 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1 transition-transform">
                  <Image 
                    src={`/services/${service.slug}.png`}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white border-2 border-gray-900 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10 group-hover:rotate-12 transition-transform">
                    <IconComponent className="w-6 h-6 text-gray-900" />
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <h3 className={`text-2xl md:text-3xl font-black mb-3 md:mb-4 ${textColor} leading-tight`}>
                    {service.title}
                  </h3>

                  <p className={`font-semibold text-base md:text-lg opacity-90 mb-8 ${textColor}`}>
                    {service.headline}
                  </p>

                  <div className={`mt-auto flex items-center gap-2 font-bold ${textColor} text-lg group-hover:underline underline-offset-4`}>
                    Let's dive in
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Link href="/services" className="btn-secondary bg-white text-xl px-10 py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            Explore All The Cool Stuff We Do
            <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
