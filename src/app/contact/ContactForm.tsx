"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { markContactSuccess, trackLeadFormSuccess } from "../utils/gtm";

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

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhone = (phone: string) => {
    // Strip everything except digits
    const digitsOnly = phone.replace(/\D/g, "");
    return digitsOnly.length >= 10;
  };

  const isFormValid =
    name.trim().length >= 2 && 
    isValidEmail(email.trim()) && 
    isValidPhone(phone) &&
    company.trim().length >= 2 &&
    message.trim().length >= 10;
    
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
        markContactSuccess();
        trackLeadFormSuccess({
          formName: "contact_form",
          pagePath: "/contact",
          service: searchParams.get("sub") || searchParams.get("service"),
        });

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
    <main className="py-20 md:py-32 bg-background relative selection:bg-brand-primary selection:text-foreground">
      <div className="absolute inset-0 bg-pattern opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tight leading-[1] mb-6">
            Let&apos;s Talk <span className="text-brand-primary">Business</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold text-muted max-w-2xl mx-auto">
            Have a project or question? Send us a message and we&apos;ll get back to you faster than your current agency.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-surface rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 lg:p-16 border border-border shadow-md md:shadow-md">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <label className="block">
              <span className="text-sm font-black uppercase tracking-widest text-foreground mb-2 block">Name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-background border border-border rounded-2xl px-5 py-4 text-lg font-bold text-foreground focus:outline-none focus:bg-surface focus:shadow-md transition-all"
                required
                placeholder="John Doe"
              />
            </label>

            <label className="block">
              <span className="text-sm font-black uppercase tracking-widest text-foreground mb-2 block">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-background border border-border rounded-2xl px-5 py-4 text-lg font-bold text-foreground focus:outline-none focus:bg-surface focus:shadow-md transition-all"
                required
                placeholder="john@company.com"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <label className="block">
              <span className="text-sm font-black uppercase tracking-widest text-foreground mb-2 block">Phone</span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-background border border-border rounded-2xl px-5 py-4 text-lg font-bold text-foreground focus:outline-none focus:bg-surface focus:shadow-md transition-all"
                required
                placeholder="+1 234 567 8900"
              />
            </label>

            <label className="block">
              <span className="text-sm font-black uppercase tracking-widest text-foreground mb-2 block">Company</span>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full bg-background border border-border rounded-2xl px-5 py-4 text-lg font-bold text-foreground focus:outline-none focus:bg-surface focus:shadow-md transition-all"
                required
                placeholder="Acme Corp"
              />
            </label>
          </div>

          <label className="block mb-10">
            <span className="text-sm font-black uppercase tracking-widest text-foreground mb-2 block">Message</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-background border border-border rounded-2xl px-5 py-4 text-lg font-bold text-foreground focus:outline-none focus:bg-surface focus:shadow-md transition-all resize-y min-h-[200px]"
              required
              placeholder="Tell us about your project..."
            />
          </label>

          <div className="flex flex-col gap-6">
            <button
              type="submit"
              disabled={isDisabled}
              className={`w-full md:w-auto md:mx-auto ${
                status === "sent"
                  ? "bg-brand-primary text-foreground"
                  : status === "error"
                    ? "bg-brand-primary text-white"
                    : "bg-brand-secondary text-foreground hover:bg-brand-primary hover:text-white"
              } border border-border shadow-md hover:-translate-y-2 hover:shadow-md transition-all duration-300 font-black text-xl px-12 py-5 rounded-full flex items-center justify-center gap-3 uppercase tracking-wider ${isDisabled && status !== "sent" ? "opacity-50 hover:translate-y-0 hover:shadow-md cursor-not-allowed bg-surface text-muted" : ""}`}
            >
              {status === "sending" && (
                <svg
                  className="animate-spin h-6 w-6"
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
              )}
              {status === "sent" && (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              )}
              {status === "error" && (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              )}
              {status === "sending" && "Sending..."}
              {status === "sent" && "Message Sent!"}
              {status === "error" && "Try Again"}
              {!status && "Send Message"}
            </button>

            {status === "sent" && (
              <p className="text-lg font-bold text-foreground text-center bg-brand-mint border border-border p-4 rounded-xl shadow-md">
                Thank you! We&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-lg font-bold text-foreground text-center bg-brand-primary border border-border p-4 rounded-xl shadow-md">
                Something went wrong. Please check your information and try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
