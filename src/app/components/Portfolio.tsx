"use client";

import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { portfolioProjects } from "../portfolio/projects";

const Portfolio = () => {
  const featuredProjects = portfolioProjects.slice(0, 4);

  return (
    <section className="py-32 bg-white relative overflow-hidden border-y-2 border-gray-900">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border-2 border-gray-900 bg-brand-primary rounded-full px-5 py-2.5 text-sm font-bold text-white mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <ExternalLink className="w-5 h-5" />
            <span className="uppercase tracking-widest">Our Work</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black mb-6 text-gray-900 tracking-tight leading-tight"
          >
            Success Stories That <br/><span className="text-brand-secondary underline decoration-8 underline-offset-4">Speak Volumes</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-medium text-gray-600 max-w-3xl mx-auto"
          >
            Discover how we've helped ambitious brands across industries achieve remarkable growth through strategic digital transformation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24 max-w-7xl mx-auto">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-background rounded-[3rem] overflow-hidden border-4 border-gray-900 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
            >
              {/* Project visual */}
              <div
                className="w-full h-80 relative overflow-hidden border-b-4 border-gray-900"
                style={{ background: project.image }}
              >
                <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors duration-500 z-0"></div>
                <div className="absolute top-6 left-6 z-10">
                  <span className="bg-white text-gray-900 border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-5 py-2 rounded-full text-sm font-black tracking-widest uppercase">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                <div className="mb-8">
                  <h3 className="text-4xl font-black text-gray-900 mb-4 group-hover:text-brand-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-lg font-medium leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-white border-2 border-gray-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-gray-900 px-4 py-1.5 rounded-full text-sm font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t-2 border-gray-200 flex justify-between items-center">
                  <Link
                    href={`/project/${project.slug}`}
                    className="inline-flex items-center gap-2 text-gray-900 font-black hover:text-brand-primary transition-colors duration-200 group-hover:gap-4 text-lg uppercase tracking-wider"
                  >
                    View Project Details
                    <ArrowRight className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </motion.div>
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
              <h3 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
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
