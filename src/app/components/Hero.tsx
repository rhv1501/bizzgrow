const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--brand-gradient-overlay)" }}
    >
      {/* Animated background elements */}
      <div className="shape-blob shape-blob-1"></div>
      <div className="shape-blob shape-blob-2"></div>

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-4 py-2 text-sm font-medium text-white reveal">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Transform Your Digital Presence
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white reveal stagger-1">
                Build the{" "}
                <span className="text-yellow-300 font-bold">future</span> of
                your business
              </h1>

              <p className="text-xl text-white max-w-lg leading-relaxed reveal stagger-2">
                We help ambitious SMBs transform their digital presence with
                cutting-edge web design, strategic marketing, and powerful
                automation solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 reveal stagger-3">
              <a
                href="#contact"
                className="btn btn-primary px-8 py-4 text-lg font-semibold"
              >
                Start Your Transformation
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#services"
                className="btn btn-ghost px-8 py-4 text-lg font-semibold"
              >
                Explore Services
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20 reveal stagger-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-white/70">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-sm text-white/70">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-white/70">Support</div>
              </div>
            </div>
          </div>

          {/* Visual element */}
          <div className="relative">
            <div className="relative z-10 reveal stagger-2">
              <div className="aspect-square bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 float">
                <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 via-green-400/20 to-blue-400/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl mx-auto flex items-center justify-center">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-white"
                      >
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Digital Innovation
                    </h3>
                    <p className="!text-white">
                      Powered by cutting-edge technology
                    </p>
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

export default Hero;
