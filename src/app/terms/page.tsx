import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "BizzGrow terms of service - the terms and conditions for using our services.",
};

export default function TermsPage() {
  return (
    <main className="py-20">
      <div className="site-container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="muted mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
            <p className="muted mb-4">
              By accessing and using BizzGrow&apos;s services, you accept and
              agree to be bound by the terms and provision of this agreement.
              These Terms of Service govern your use of our website and
              services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Services Description</h2>
            <p className="muted mb-4">
              BizzGrow provides digital transformation services including web
              design and development, digital marketing, branding, and creative
              content services. We reserve the right to modify or discontinue
              services at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
            <p className="muted mb-4">You agree to:</p>
            <ul className="list-disc list-inside muted space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use our services in compliance with applicable laws</li>
              <li>
                Not engage in any activity that interferes with our services
              </li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
            <p className="muted mb-4">
              Payment terms are specified in individual service agreements.
              Unless otherwise agreed, payments are due within 30 days of
              invoice date. Late payments may incur additional fees. All prices
              are subject to change with notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="muted mb-4">
              Upon full payment, clients receive ownership of custom-developed
              materials specifically created for their project. BizzGrow retains
              rights to general methodologies, techniques, and pre-existing
              intellectual property.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="muted mb-4">
              BizzGrow&apos;s liability is limited to the amount paid for
              services. We are not liable for indirect, incidental, or
              consequential damages. Services are provided &quot;as is&quot;
              without warranties beyond those required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Termination</h2>
            <p className="muted mb-4">
              Either party may terminate services with written notice. Upon
              termination, payment is due for work completed. These terms
              survive termination where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="muted">
              For questions regarding these terms, contact us at:
              <br />
              Email: legal@bizzgrow.com
              <br />
              Phone: +1 (XXX) XXX-XXXX
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
