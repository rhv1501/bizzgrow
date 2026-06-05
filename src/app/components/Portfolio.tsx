"use client";

import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { portfolioProjects } from "../portfolio/projects";

const Portfolio = () => {
  const featuredProjects = portfolioProjects.slice(0, 4);

  return (
    <section className="py-16 md:py-32 bg-white relative overflow-hidden border-y-2 border-gray-900">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border-2 border-gray-900 bg-brand-primary rounded-full px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-bold text-white mb-4 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
            <span className="uppercase tracking-widest">Our Work</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 text-gray-900 tracking-tight leading-tight"
          >
            Success Stories That <br/><span className="text-brand-secondary underline decoration-8 underline-offset-4">Speak Volumes</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-medium text-gray-600 max-w-2xl mx-auto"
          >
            Discover how we've helped ambitious brands achieve remarkable growth.
          </motion.p>
        </div>

        {/* Compact Visual Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-16 md:mb-20 max-w-7xl mx-auto">
          {featuredProjects.map((project, index) => (
            <Link href={`/project/${project.slug}`} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-2 md:border-4 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col h-full"
              >
                {/* Project visual */}
                <div
                  className="w-full aspect-[4/5] md:aspect-square relative overflow-hidden border-b-2 md:border-b-4 border-gray-900"
                  style={{ background: project.image }}
                >
                  <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors duration-500 z-0"></div>
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-white text-gray-900 border-2 border-gray-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-black tracking-widest uppercase">
                      {project.category.split(' ')[0]} {/* Shorten for compact cards */}
                    </span>
                  </div>
                </div>

                {/* Minimal Content */}
                <div className="p-3 md:p-5 flex justify-between items-center bg-brand-accent group-hover:bg-[#FFD500] transition-colors mt-auto">
                  <h3 className="text-sm md:text-lg font-black text-gray-900 line-clamp-1 truncate pr-2">
                    {project.title}
                  </h3>
                  <div className="bg-white rounded-full p-1 md:p-1.5 border-2 border-gray-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0">
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-gray-900 -rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >
          <div className="bg-brand-mint rounded-[3rem] p-12 lg:p-20 relative overflow-hidden border-4 border-gray-900 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 md:mb-6 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
                Ready to Create Your Success Story?
              </h3>
              <p className="text-gray-800 text-2xl font-bold mb-10 max-w-2xl mx-auto">
                Let's discuss how we can engineer a digital experience that transforms your business trajectory.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/portfolio" className="btn-secondary bg-white text-xl">
                  Explore full portfolio
                </Link>
                <Link href="/contact" className="btn-primary text-xl">
                  Start Your Project
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
