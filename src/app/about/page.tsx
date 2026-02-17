import React from "react";

export default function AboutPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About BizzGrow
          </h2>
          <p className="text-lg muted">
            BizzGrow is a digital transformation startup that helps small and
            medium businesses scale sustainably by combining modern technology,
            automation and design-driven strategies. We offer end-to-end
            solutions including web design, development, marketing, branding and
            creative content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card">
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="muted">
              Empower businesses with simple, effective digital solutions.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-2">Our Approach</h3>
            <p className="muted">
              Design-first, analytics-driven, and focused on measurable growth.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold mb-2">Why Choose Us?</h3>
            <p className="muted">
              Flexible engagement, transparent process, and hands-on support.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
