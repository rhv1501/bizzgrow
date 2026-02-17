import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how BizzGrow helped businesses transform their digital presence with measurable results. Real client success stories and case studies.",
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "E-commerce Transformation",
      client: "Local Retail Store",
      challenge: "Outdated website with 0% online sales",
      solution:
        "Complete redesign, payment integration, inventory management, SEO optimization",
      results: [
        "300% increase in online sales",
        "45% reduction in cart abandonment",
        "2x monthly traffic growth",
      ],
      tech: ["Next.js", "Shopify API", "Google Analytics", "SEO optimization"],
    },
    {
      title: "Brand & Digital Marketing",
      client: "Healthcare Startup",
      challenge: "No brand identity, low market awareness",
      solution:
        "Brand identity design, website development, social media strategy, content marketing",
      results: [
        "85% brand recognition increase",
        "150% lead generation growth",
        "40% cost-per-acquisition reduction",
      ],
      tech: ["React", "CMS integration", "Marketing automation", "Analytics"],
    },
    {
      title: "Process Automation",
      client: "Professional Services Firm",
      challenge: "Manual processes, time-consuming admin work",
      solution:
        "Workflow automation, CRM integration, client portal, reporting dashboard",
      results: [
        "60% time savings on admin tasks",
        "95% client satisfaction rate",
        "40% revenue increase",
      ],
      tech: ["Next.js", "CRM API", "Automation tools", "Dashboard analytics"],
    },
  ];

  return (
    <main className="py-20">
      <div className="site-container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Client Success Stories</h1>
          <p className="text-lg muted">
            Real transformations, measurable results. See how we help businesses
            scale sustainably.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, i) => (
            <article
              key={i}
              className="card card-animate reveal"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
                  <p className="muted mb-4">{study.client}</p>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Challenge</h3>
                    <p className="muted">{study.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Solution</h3>
                    <p className="muted">{study.solution}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm rounded-full"
                          style={{
                            backgroundColor: "var(--brand-light)",
                            color: "var(--brand-navy)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Results</h3>
                  <ul className="space-y-3">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div
                          className="w-2 h-2 rounded-full mt-2"
                          style={{ backgroundColor: "var(--brand-primary)" }}
                        ></div>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <button className="btn btn-primary">
                      View Full Case Study
                    </button>
                  </div>
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
