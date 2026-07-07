"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { consumeContactSuccessFlag } from "../../utils/gtm";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  ArrowRight,
  Home,
  Phone,
  MessageCircle,
} from "lucide-react";

const ThankYouPage = () => {
  const router = useRouter();
  useEffect(() => {
    // We check if they came from the contact form
    if (!consumeContactSuccessFlag()) {
      // In production you might want to redirect them back, but for testing it's fine to let them see it
      // router.replace("/contact");
    }
  }, [router]);

  return (
    <main className="min-h-screen pt-32 pb-20 bg-background relative selection:bg-brand-primary selection:text-foreground flex items-center justify-center">
      <div className="absolute inset-0 bg-pattern opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl text-center">
        {/* HUGE CHECKMARK */}
        <div className="mb-12 inline-flex justify-center relative">
          <div className="w-32 h-32 md:w-40 md:h-40 bg-brand-secondary rounded-full border border-border shadow-md flex items-center justify-center z-10 animate-bounce">
            <CheckCircle2
              className="w-20 h-20 md:w-24 md:h-24 text-foreground"
              strokeWidth={3}
            />
          </div>
          {/* Decorative shapes behind checkmark */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary rounded-full blur-3xl opacity-40 -mr-10 -mt-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-primary rounded-full blur-3xl opacity-40 -ml-10 -mb-10 pointer-events-none"></div>
        </div>

        {/* MAIN MESSAGE */}
        <h1 className="text-5xl md:text-8xl font-black text-foreground tracking-tight uppercase leading-[1.1] mb-6">
          Request{" "}
          <span className="bg-brand-mint px-4 py-2 inline-block border border-border shadow-md -rotate-2">
            Received
          </span>
        </h1>
        <p className="text-xl md:text-3xl font-bold text-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
          We’ve got your message. Our team is reviewing the details and will hit
          you back within 24 hours.
        </p>

        {/* NEXT STEPS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto mb-16 text-left">
          <div className="bg-surface p-8 rounded-4xl border border-border shadow-md hover:-translate-y-2 hover:shadow-md transition-transform">
            <div className="w-14 h-14 bg-brand-mint rounded-full border border-border flex items-center justify-center shadow-md mb-6 text-2xl font-black">
              1
            </div>
            <h3 className="text-2xl font-black text-foreground uppercase mb-3">
              Strategy Review
            </h3>
            <p className="text-lg font-bold text-muted">
              Our team is currently analyzing your request, your industry, and
              the exact tools needed to scale your operation.
            </p>
          </div>
          <div className="bg-surface p-8 rounded-4xl border border-border shadow-md hover:-translate-y-2 hover:shadow-md transition-transform">
            <div className="w-14 h-14 bg-brand-secondary rounded-full border border-border flex items-center justify-center shadow-md mb-6 text-2xl font-black">
              2
            </div>
            <h3 className="text-2xl font-black text-foreground uppercase mb-3">
              Prepare to Scale
            </h3>
            <p className="text-lg font-bold text-muted">
              If there is a fit, we will schedule a ruthless, no-fluff discovery
              call to map out your growth strategy.
            </p>
          </div>
        </div>

        {/* DIRECT CONTACT OPTIONS */}
        <div className="max-w-3xl mx-auto mb-16 bg-brand-primary rounded-4xl border border-border p-8 md:p-12 shadow-md text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-black text-foreground uppercase mb-4">
              Too Urgent to Wait?
            </h3>
            <p className="text-xl font-bold text-foreground mb-8 max-w-xl mx-auto">
              If you need immediate execution, bypass the queue and reach out to
              our founders directly.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+919150302455"
                className="bg-surface text-foreground hover:bg-brand-secondary border border-border rounded-xl px-8 py-4 text-xl font-black uppercase tracking-wider shadow-md hover:shadow-md hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Call Us
              </a>
              <a
                href="https://wa.me/919150302455"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-foreground hover:bg-[#128C7E] hover:text-white border border-border rounded-xl px-8 py-4 text-xl font-black uppercase tracking-wider shadow-md hover:shadow-md hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* CTAS */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/"
            className="w-full sm:w-auto bg-foreground text-white hover:text-foreground hover:bg-brand-primary border border-border rounded-xl px-10 py-5 text-xl font-black uppercase tracking-widest shadow-md hover:shadow-md hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group"
          >
            <Home className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
            Back to Home
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto bg-surface text-foreground hover:bg-brand-secondary border border-border rounded-xl px-10 py-5 text-xl font-black uppercase tracking-widest shadow-md hover:shadow-md hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group"
          >
            Explore Services
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ThankYouPage;
