"use client";

import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<null | string>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("subscribing");

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("subscribed");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      className="py-16"
      style={{ backgroundColor: "var(--brand-light)" }}
    >
      <div className="site-container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Stay Ahead of Digital Trends
        </h2>
        <p className="muted mb-8 max-w-2xl mx-auto">
          Get weekly insights on digital transformation, growth strategies, and
          industry best practices. Join 2,000+ business owners who trust our
          expertise.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your business email"
              className="flex-1 px-4 py-3 border rounded-lg"
              required
            />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === "subscribing"}
            >
              {status === "subscribing" ? "Subscribing..." : "Subscribe"}
            </button>
          </div>

          <div className="mt-3 text-sm">
            {status === "subscribed" && (
              <p className="text-green-600">
                ✓ Successfully subscribed! Check your email for confirmation.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600">
                Something went wrong. Please try again.
              </p>
            )}
            {!status && (
              <p className="muted">
                No spam. Unsubscribe anytime. Read our privacy policy.
              </p>
            )}
          </div>
        </form>

        <div className="flex justify-center items-center gap-8 mt-8 text-sm muted">
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--brand-primary)" }}
            ></div>
            <span>Weekly insights</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--brand-primary)" }}
            ></div>
            <span>Industry trends</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--brand-primary)" }}
            ></div>
            <span>Growth strategies</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
