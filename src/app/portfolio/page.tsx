import { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { portfolioProjects } from "./projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore BizzGrow's portfolio of client success stories—real transformations and measurable results across web, marketing, branding, and automation.",
};

export default function PortfolioPage() {
  return (
    <main className="py-20">
      <div className="site-container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
          <p className="text-lg muted">
            Real transformations, measurable results. Explore our client work
            across strategy, design, development, and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioProjects.map((project, index) => (
            <article
              key={index}
              className="card card-premium card-hover reveal group overflow-hidden"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Project visual */}
              <div
                className="w-full h-48 rounded-2xl mb-6 relative overflow-hidden"
                style={{ background: project.image }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {project.results.map((result, resultIndex) => {
                    const IconComponent = result.icon;
                    return (
                      <div key={resultIndex} className="text-center">
                        <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                          {result.value}
                        </div>
                        <div className="text-xs text-gray-500">
                          {result.label}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-900">
                    Technologies Used:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 group-hover:gap-3"
                  >
                    Start a similar project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">
            Ready for your transformation?
          </h2>
          <p className="muted mb-6">
            Let&apos;s discuss how we can help your business achieve similar
            results.
          </p>
          <a href="/contact" className="btn btn-primary">
            Start Your Project
          </a>
        </div>
      </div>
    </main>
  );
}
