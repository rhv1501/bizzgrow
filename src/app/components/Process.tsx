import { Search, ClipboardList, Wrench, LineChart, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery & Audit",
      description:
        "We start by understanding your goals and auditing what you already have — website, marketing, brand, SEO, and internal workflows — to find the fastest path to impact.",
      duration: "3-7 days",
      deliverables: [
        "Goals + Success Metrics",
        "Current-State Audit",
        "Opportunity Shortlist",
        "Scope + Priorities",
      ],
    },
    {
      number: "02",
      icon: ClipboardList,
      title: "Plan & Align",
      description:
        "We turn the audit into a clear plan tailored to your service — from messaging and creative direction to technical requirements, timelines, and responsibilities.",
      duration: "1 week",
      deliverables: [
        "Strategy + Roadmap",
        "Milestones + Timeline",
        "Creative/Technical Brief",
        "Reporting Plan",
      ],
    },
    {
      number: "03",
      icon: Wrench,
      title: "Execute & Deliver",
      description:
        "We execute the work end-to-end — design/build, campaigns, SEO improvements, automations, or integrations — with reviews, QA, and a smooth rollout.",
      duration: "2-8 weeks",
      deliverables: [
        "Implementation + QA",
        "Launch/Rollout",
        "Tracking + Dashboards",
        "Documentation/Handover",
      ],
    },
    {
      number: "04",
      icon: LineChart,
      title: "Measure & Improve",
      description:
        "After delivery, we measure results against KPIs, identify what's working, and iterate to keep improving performance and ROI over time.",
      duration: "Ongoing",
      deliverables: [
        "Performance Review",
        "Optimization Backlog",
        "Iteration Cycles",
        "Support + Enhancements",
      ],
    },
  ];

  return (
    <section className="process-section section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--brand-gradient-subtle)" }}
      ></div>

      {/* Floating elements */}
      <div className="absolute top-10 right-10 w-20 h-20 border-2 border-blue-200 rounded-full opacity-30 float"></div>
      <div
        className="absolute bottom-20 left-10 w-16 h-16 border-2 border-green-200 rounded-full opacity-30 float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 !text-blue-700 rounded-full px-4 py-2 text-sm font-medium mb-6 reveal">
            <Rocket className="w-4 h-4" color="blue" />
            How We Work
          </div>

          <h2
            className="text-4xl lg:text-5xl font-bold mb-6 reveal stagger-1"
            style={{ color: "var(--text-primary)" }}
          >
            A streamlined process for{" "}
            <span className="text-gradient">every service</span>
          </h2>

          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed reveal stagger-2"
            style={{ color: "var(--text-secondary)" }}
          >
            Whether you need a new website, marketing campaigns, branding, SEO,
            custom development, or automation — we follow the same clear 4-step
            system to deliver predictable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 1;

            return (
              <div
                key={index}
                className={`reveal stagger-${index + 1} ${
                  isEven ? "lg:mt-12" : ""
                }`}
              >
                <div className="relative">
                  {/* Connection line for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-20 left-full w-12 h-0.5 bg-linear-to-r from-blue-300 to-transparent"></div>
                  )}

                  <div className="card card-premium card-hover group">
                    <div className="flex items-start gap-6">
                      {/* Step number and icon */}
                      <div className="flex flex-col items-center gap-4 shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div
                          className="text-3xl font-bold group-hover:text-blue-500 transition-colors duration-300"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {step.number}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-4">
                        <div className="space-y-2">
                          <h3
                            className="text-2xl font-bold group-hover:text-blue-600 transition-colors duration-300"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {step.title}
                          </h3>
                          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 rounded-full px-3 py-1 text-sm font-medium">
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {step.duration}
                          </div>
                        </div>

                        <p
                          className="leading-relaxed"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {step.description}
                        </p>

                        <div className="space-y-2">
                          <h4
                            className="font-semibold"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Key Deliverables:
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {step.deliverables.map(
                              (deliverable, deliverableIndex) => (
                                <div
                                  key={deliverableIndex}
                                  className="flex items-center gap-2 text-sm"
                                  style={{ color: "var(--text-secondary)" }}
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                  {deliverable}
                                </div>
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16 reveal">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
            <h3
              className="text-2xl font-bold mb-4 !text-gray-500"
            >
              Ready to Start Your Journey?
            </h3>
            <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
              Let&apos;s discuss your project and create a custom roadmap for
              your success.
            </p>
            <a href="/contact" className="btn btn-primary px-8 py-4 text-lg">
              Schedule Free Consultation
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
