import {
  Target,
  Lightbulb,
  Rocket,
  Users,
  BarChart3,
  Shield,
} from "lucide-react";
import StatCard from "./AnimatedCounter";

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "Strategic Planning",
      description:
        "Data-driven market research and strategic planning that identifies opportunities and creates actionable growth roadmaps for your business.",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Lightbulb,
      title: "Creative Design",
      description:
        "Award-winning design systems and user experiences that not only look stunning but drive conversions and engagement.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Rocket,
      title: "Technical Excellence",
      description:
        "Cutting-edge development with modern technologies, automated workflows, and performance optimization for maximum results.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Deep understanding of your audience through research, testing, and continuous optimization to improve user satisfaction.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: BarChart3,
      title: "Growth Analytics",
      description:
        "Comprehensive tracking and analytics setup to measure success, identify bottlenecks, and optimize for better ROI.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Shield,
      title: "Reliable Support",
      description:
        "Ongoing maintenance, security updates, and dedicated support to ensure your digital assets perform at their best.",
      color: "from-teal-500 to-green-500",
    },
  ];

  return (
    <section className="features-section section-padding relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 rounded-full px-4 py-2 text-sm font-medium mb-6 reveal"
            style={{ color: "var(--text-secondary) !important" }}
          >
            <Target className="w-4 h-4" color="black" />
            Why Choose BizzGrow
          </div>

          <h2
            className="text-4xl lg:text-5xl font-bold mb-6 reveal stagger-1"
            style={{ color: "var(--text-primary)" }}
          >
            Comprehensive Solutions for{" "}
            <span className="text-gradient">Digital Excellence</span>
          </h2>

          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed reveal stagger-2"
            style={{ color: "var(--text-secondary)" }}
          >
            We combine strategic thinking, creative excellence, and technical
            expertise to deliver end-to-end digital solutions that drive real
            business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`card card-hover card-premium reveal stagger-${
                  (index % 6) + 1
                } group relative`}
              >
                {/* Icon with gradient background */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-linear-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <h3
                  className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300"
                  style={{ color: "var(--text-primary)" }}
                >
                  {feature.title}
                </h3>

                <p
                  className="leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {feature.description}
                </p>

                {/* Decorative gradient line */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="mt-20 reveal">
          <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 shadow-xl">
            {/* Header */}
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h3>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Our track record speaks for itself. Here&apos;s what we&apos;ve
                achieved together with our amazing clients.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <StatCard
                number={150}
                suffix="+"
                label="Projects Completed"
                icon="🚀"
                color="bg-blue-600"
              />
              <StatCard
                number={98}
                suffix="%"
                label="Client Satisfaction"
                icon="⭐"
                color="bg-green-600"
              />
              <StatCard
                number={50}
                suffix="+"
                label="Happy Clients"
                icon="🤝"
                color="bg-purple-600"
              />
              <StatCard
                number={24}
                suffix="/7"
                label="Support Available"
                icon="🛟"
                color="bg-yellow-400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
