import { Metadata } from "next";
import { ExternalLink, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { portfolioProjects } from "./projects";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Work | BizzGrow",
  description: "Explore our latest projects. We build websites, brands, and digital experiences that don't suck.",
};

export default function PortfolioPage() {
  const bgColors = [
    "bg-[#FF3366]", // Vibrant Pink
    "bg-[#00E5FF]", // Cyan
    "bg-[#FFD500]", // Yellow
    "bg-[#7000FF]", // Purple
    "bg-[#FF9E80]", // Peach
  ];

  return (
    <main className="py-32 bg-background relative min-h-screen">
      <div className="absolute inset-0 bg-pattern opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 bg-brand-primary px-6 py-2 rounded-full border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8 transform -rotate-2">
            <Star className="w-5 h-5 text-white" fill="currentColor" />
            <span className="font-bold text-white uppercase tracking-widest text-sm">Case Studies</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 tracking-tight leading-[1] mb-8">
            Stuff We're <br/> <span className="bg-brand-accent px-4 py-1 inline-block border-2 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mt-4 rotate-1">Proud Of</span>
          </h1>
          <p className="text-2xl text-gray-600 font-bold max-w-3xl mx-auto leading-relaxed">
            Real transformations, measurable results, and websites that actually look like they were built in this decade.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-32 mb-32 max-w-7xl mx-auto">
          {portfolioProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            const bgColor = bgColors[index % bgColors.length];
            const isDarkText = bgColor === "bg-[#FFD500]" || bgColor === "bg-[#00E5FF]" || bgColor === "bg-[#FF9E80]";
            const textColor = isDarkText ? "text-gray-900" : "text-white";

            return (
              <article
                key={project.slug}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center group`}
              >
                {/* Project Visual side */}
                <div className="w-full lg:w-1/2 relative">
                  <div className={`${bgColor} rounded-[3rem] p-4 md:p-8 border-4 border-gray-900 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-2 group-hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 relative overflow-hidden aspect-[4/3]`}>
                    <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                    <div 
                      className="absolute inset-4 md:inset-8 rounded-[2rem] border-4 border-gray-900 overflow-hidden bg-gray-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:scale-105 transition-transform duration-500"
                      style={{ background: project.image }}
                    ></div>
                    <div className="absolute bottom-10 left-10 z-20">
                      <span className="bg-white text-gray-900 px-4 py-2 rounded-full border-2 border-gray-900 text-sm font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Info side */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div>
                    <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                      {project.title}
                    </h2>
                    <p className="text-xl font-bold text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {project.results.map((result, resultIndex) => {
                      const IconComponent = result.icon;
                      return (
                        <div key={resultIndex} className="bg-white p-6 rounded-2xl border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
                          <div className={`w-12 h-12 mx-auto mb-4 rounded-full ${bgColor} border-2 border-gray-900 flex items-center justify-center`}>
                            <IconComponent className={`w-6 h-6 ${textColor}`} />
                          </div>
                          <div className="text-xl font-black text-gray-900 mb-1">
                            {result.value}
                          </div>
                          <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                            {result.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-black text-gray-900 uppercase tracking-widest">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 border-2 border-gray-900 text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t-4 border-gray-900">
                    <div className="flex flex-wrap items-center gap-6">
                      <Link
                        href={`/project/${project.slug}`}
                        className="btn-primary text-lg px-8 py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                      >
                        Read Case Study
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>

                      <Link
                        href={`/contact?project=${encodeURIComponent(project.title)}`}
                        className="text-lg font-black text-gray-900 hover:text-brand-primary transition-colors underline decoration-4 underline-offset-4"
                      >
                        I want something like this
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="max-w-5xl mx-auto bg-brand-mint rounded-[3rem] p-12 lg:p-20 text-center border-4 border-gray-900 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-30"></div>
          <div className="relative z-10">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8">
              Ready to be our next <br/> success story?
            </h2>
            <p className="text-2xl font-bold text-gray-800 mb-12 max-w-2xl mx-auto">
              Stop settling for average. Let's build something that actually makes your competitors jealous.
            </p>
            <Link href="/contact" className="inline-block bg-white text-gray-900 font-black text-2xl px-12 py-6 rounded-full border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
