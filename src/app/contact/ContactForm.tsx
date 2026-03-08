"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ContactForm() {
  const searchParams = useSearchParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | "sending" | "sent" | "error">(
    null,
  );

  useEffect(() => {
    const mainService = searchParams.get("service");
    const subService = searchParams.get("sub");
    const directMessage = searchParams.get("message");

    // Don't overwrite if the user already typed.
    if (message.trim() !== "") return;

    const selected = subService || mainService;
    if (!selected && !directMessage) return;

    const template =
      directMessage ||
      `Hi BizzGrow,\n\nI’d like a quote for: ${selected}\n\nBusiness goals (what should this improve?):\n- \n\nWhat’s your current situation? (website/ads/social/SEO):\n- \n\nTimeline (if any):\n- \n\nAnything else we should know:\n- `;

    setMessage(template);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const isFormValid =
    name.trim() !== "" && email.trim() !== "" && message.trim() !== "";
  const isDisabled = !isFormValid || status === "sending";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, company, message }),
      });

      if (res.ok) {
        setStatus("sent");

        setTimeout(() => {
          window.location.replace("/contact/thank-you");
        }, 1500);

        setTimeout(() => {
          setName("");
          setEmail("");
          setPhone("");
          setCompany("");
          setMessage("");
        }, 1000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="muted">
            Have a project or question? Send us a message.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto card">
          <label className="block mb-4">
            <span className="muted">Name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border rounded px-3 py-2"
              required
            />
          </label>

          <label className="block mb-4">
            <span className="muted">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border rounded px-3 py-2"
              required
            />
          </label>

          <label className="block mb-4">
            <span className="muted">Phone (Optional)</span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full border rounded px-3 py-2"
              placeholder="+91 8939036141"
            />
          </label>

          <label className="block mb-4">
            <span className="muted">Company (Optional)</span>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="mt-1 block w-full border rounded px-3 py-2"
              placeholder="Your company name"
            />
          </label>

          <label className="block mb-4">
            <span className="muted">Message</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full border rounded px-3 py-2"
              rows={6}
              required
            />
          </label>

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              disabled={isDisabled}
              className={`btn ${
                status === "sent"
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : status === "error"
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "btn-primary"
              } ${isDisabled ? "opacity-50 cursor-not-allowed" : ""} transition-all duration-300`}
            >
              {status === "sending" && (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              )}
              {status === "sent" && (
                <>
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Message Sent!
                </>
              )}
              {status === "error" && (
                <>
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                  Try Again
                </>
              )}
              {!status && "Send Message"}
            </button>

            {status === "sent" && (
              <p className="text-sm text-green-600 text-center">
                Thank you! We&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600 text-center">
                Something went wrong. Please check your information and try
                again.
              </p>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
