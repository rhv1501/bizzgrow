import { ArrowRight, CheckCircle, Star, Users } from "lucide-react";

const Cta = () => {
  return (
    <section
      id="contact"
      className="cta-section section-padding relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/10 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-sm font-medium text-white/90 reveal">
                  <Star className="w-4 h-4 text-yellow-300" />
                  Ready to Transform?
                </div>

                <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight reveal stagger-1">
                  Take Your Business to the{" "}
                  <span className="text-gradient gradient-animate bg-linear-to-r from-yellow-300 via-green-300 to-cyan-300">
                    Next Level
                  </span>
                </h2>

                <p className="text-xl text-white/80 leading-relaxed reveal stagger-2">
                  Join 100+ businesses that have scaled sustainably with our
                  proven digital transformation process. Get a free consultation
                  and custom growth strategy tailored to your goals.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 reveal stagger-3">
                <a
                  href="/contact"
                  className="btn btn-ghost px-8 py-4 text-lg font-semibold group"
                >
                  Start Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
                <a
                  href="/portfolio"
                  className="btn btn-outline px-8 py-4 text-lg font-semibold border-white/30 text-white hover:bg-white hover:text-gray-900"
                >
                  View Portfolio
                </a>
              </div>

              {/* Trust indicators */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20 reveal stagger-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-sm text-white/70">
                    Client Satisfaction
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">150+</div>
                  <div className="text-sm text-white/70">
                    Projects Delivered
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-sm text-white/70">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Features card */}
            <div className="relative reveal stagger-2">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 float">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl mx-auto flex items-center justify-center mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      What You Get
                    </h3>
                    <p className="text-white/70">
                      Everything you need to succeed online
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      "Complete Digital Strategy & Planning",
                      "Custom Website Design & Development",
                      "SEO & Marketing Campaign Setup",
                      "Brand Identity & Visual Design",
                      "Analytics & Performance Tracking",
                      "Ongoing Support & Optimization",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-300 shrink-0" />
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white font-semibold">
                          Free Strategy Call
                        </div>
                        <div className="text-white/70 text-sm">Worth $500</div>
                      </div>
                      <div className="text-2xl font-bold text-green-300">
                        FREE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
