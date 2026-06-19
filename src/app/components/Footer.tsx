"use client";

import {
  Phone,
  MapPin,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { trackCallNowClick } from "../utils/gtm";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-[#f2ede4] pt-20 pb-8">
      <div className="absolute inset-0 bg-pattern opacity-35 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 grid gap-8 rounded-[2.5rem] border border-border bg-surface px-6 py-8 shadow-[0_28px_80px_-55px_rgba(33,48,58,0.55)] md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-10">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Ready when you are
            </p>
            <h2 className="max-w-xl text-4xl font-black leading-[0.95] tracking-tight md:text-6xl">
              Let’s turn the next visit into a real inquiry.
            </h2>
          </div>
          <div className="flex flex-col justify-between gap-5 lg:items-end lg:text-right">
            <a
              href="mailto:info@bizzgrowlabs.com"
              data-cursor="EMAIL US"
              className="inline-flex w-fit items-center justify-center rounded-full border border-border bg-brand-mint px-5 py-3 text-lg font-semibold text-foreground transition-transform hover:-translate-y-0.5"
            >
              info@bizzgrowlabs.com
            </a>
            <p className="max-w-md text-base text-muted">
              End-to-end digital transformation for ambitious founders who want systems that scale.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 mb-16">
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="rounded-2xl border border-border bg-surface p-2 shadow-[0_18px_40px_-30px_rgba(33,48,58,0.45)]">
                <Image
                  src="/logo.png"
                  alt="BizzGrowLabs Logo"
                  width={40}
                  height={40}
                  unoptimized
                />
              </div>
              <h3 className="text-3xl font-black tracking-tight">BizzGrowLabs</h3>
            </Link>

            <p className="max-w-md text-lg font-medium text-foreground">
              We build unapologetically bold digital ecosystems that automate operations and scale revenue.
            </p>

            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "https://linkedin.com/company/bizzgrow", label: "LinkedIn" },
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-surface text-foreground transition-transform hover:-translate-y-0.5"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-5">
            <h4 className="inline-block border-b border-border pb-2 text-xl font-semibold">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-lg font-medium text-foreground transition-colors hover:text-brand-primary"
                  >
                    <ArrowRight className="h-4 w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-5">
            <h4 className="inline-block border-b border-border pb-2 text-xl font-semibold">
              Contact
            </h4>
            <div className="space-y-5">
              <a
                href="tel:+918939036141"
                className="flex items-center gap-4 group"
                onClick={() =>
                  trackCallNowClick({ location: "footer", pagePath: "/" })
                }
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-brand-secondary">
                  <Phone className="h-5 w-5 text-foreground" />
                </div>
                <span className="text-lg font-semibold text-foreground">
                  +91 8939036141
                </span>
              </a>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-brand-mint">
                  <MapPin className="h-5 w-5 text-foreground" />
                </div>
                <div className="text-base font-medium text-foreground">
                  <p>106, A Proad, Choolai</p>
                  <p>Chennai-112, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row mb-12">
          <p className="text-base font-medium text-muted">
            &copy; {currentYear} BizzGrowLabs. Built to scale. Designed to dominate.
          </p>

          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-base font-medium text-foreground underline decoration-2 underline-offset-4 transition-colors hover:text-brand-primary"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-base font-medium text-foreground underline decoration-2 underline-offset-4 transition-colors hover:text-brand-primary"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
      
      {/* Massive Awwwards Typography Reveal */}
      <div className="w-full flex justify-center items-center overflow-hidden pointer-events-none select-none border-t border-border/40 pt-8 mt-8 px-4">
        <h2 className="text-[clamp(2rem,8vw,14rem)] font-black text-foreground/5 tracking-tighter leading-[0.75] uppercase text-center w-full whitespace-nowrap">
          BizzGrowLabs
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
