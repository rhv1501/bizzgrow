import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "BizzGrow privacy policy - how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="py-20">
      <div className="site-container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="muted mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="muted mb-4">
              We collect information you provide directly to us, such as when
              you create an account, contact us, or use our services. This may
              include your name, email address, phone number, company
              information, and any other information you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              How We Use Your Information
            </h2>
            <p className="muted mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside muted space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Send you marketing communications (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
            <p className="muted mb-4">
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except as
              described in this policy. We may share your information with
              trusted service providers who assist us in operating our website
              and conducting our business.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="muted mb-4">
              We implement appropriate security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction. However, no method of transmission
              over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
            <p className="muted mb-4">
              We use cookies and similar tracking technologies to improve your
              experience on our website, analyze usage patterns, and deliver
              personalized content. You can control cookie settings through your
              browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="muted mb-4">
              You have the right to access, update, or delete your personal
              information. You may also opt out of marketing communications at
              any time. To exercise these rights, please contact us using the
              information below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="muted">
              If you have any questions about this Privacy Policy, please
              contact us at:
              <br />
              Email: privacy@bizzgrow.com
              <br />
              Phone: +1 (XXX) XXX-XXXX
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
