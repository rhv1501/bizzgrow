import { ExternalLink, TrendingUp, Users, DollarSign } from "lucide-react";
import { portfolioProjects } from "../portfolio/projects";

const Portfolio = () => {
  const featuredProjects = portfolioProjects.slice(0, 4);

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div
        className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 rounded-full px-4 py-2 text-sm font-medium mb-6 reveal">
            <ExternalLink className="w-4 h-4" />
            Our Portfolio
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6 reveal stagger-1">
            Success Stories That{" "}
            <span className="text-gradient">Speak Volumes</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed reveal stagger-2">
            Discover how we&apos;ve helped businesses across industries achieve
            remarkable growth through strategic digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`card card-premium card-hover reveal stagger-${
                (index % 6) + 1
              } group overflow-hidden`}
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

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Results */}
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

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900">
                    Technologies Used:
                  </h4>
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
                    href="/portfolio"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 group-hover:gap-3"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center reveal">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900! mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-gray-600 mb-6">
              Let&apos;s discuss how we can help you achieve similar results for
              your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/portfolio" className="btn btn-outline px-6 py-3">
                Explore more
              </a>
              <a href="/contact" className="btn btn-primary px-6 py-3">
                Start Your Project
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
