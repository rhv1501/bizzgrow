"use client";

import { Phone, Mail, Linkedin, Instagram, ArrowRight } from "lucide-react";
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
              We help small businesses build better websites, clearer branding,
              and marketing that brings in customers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 mb-16">
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-flex group">
              <div className="rounded-3xl border border-border bg-surface p-4 shadow-[0_18px_40px_-30px_rgba(33,48,58,0.45)] transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-105">
                <Image
                  src="/main-cropped.png"
                  alt="BizzGrowLabs Logo"
                  width={140}
                  height={140}
                  unoptimized
                />
              </div>
            </Link>

            <p className="max-w-md text-lg font-medium text-foreground">
              We build strong websites and marketing systems that make
              businesses easier to trust and easier to buy from.
            </p>

            <div className="flex gap-4">
              {[
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/company/bizzgrowlabs",
                  label: "LinkedIn",
                },
                {
                  icon: Instagram,
                  href: "https://instagram.com/bizzgrowlabs",
                  label: "Instagram",
                },
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
                href="tel:+919150302455"
                className="flex items-center gap-4 group"
                onClick={() =>
                  trackCallNowClick({ location: "footer", pagePath: "/" })
                }
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-brand-secondary">
                  <Phone className="h-5 w-5 text-foreground" />
                </div>
                <span className="text-lg font-semibold text-foreground">
                  +91 9150302455
                </span>
              </a>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-brand-mint">
                  <Mail className="h-5 w-5 text-foreground" />
                </div>
                <div className="text-base font-medium text-foreground">
                  <a
                    href="mailto:info@bizzgrowlabs.com"
                    className="hover:text-brand-primary transition-colors"
                  >
                    info@bizzgrowlabs.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-border pt-8 md:flex-row mb-12 relative z-10">
          <div className="flex items-center gap-3 rounded-full border border-border bg-surface/50 px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Accepting New Projects
            </span>
          </div>

          <p className="text-sm font-medium text-muted">
            &copy; {currentYear} BizzGrowLabs. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative flex w-full overflow-hidden border-t border-border/40 bg-transparent py-3">
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 35s linear infinite;
            display: flex;
            width: max-content;
          }
        `,
          }}
        />
        <div className="animate-infinite-scroll flex-nowrap gap-8 items-center">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex flex-nowrap gap-8 items-center shrink-0"
            >
              {[...Array(2)].map((_, k) => (
                <div
                  key={k}
                  className="flex flex-nowrap gap-8 items-center shrink-0"
                >
                  {[
                    "WEBSITES",
                    "MARKETING",
                    "WEB ARCHITECTURE",
                    "BRAND IDENTITY",
                  ].map((word, j) => (
                    <div
                      key={j}
                      className="flex flex-nowrap items-center gap-8 shrink-0"
                    >
                      <span className="whitespace-nowrap text-xs font-black tracking-[0.2em] uppercase text-muted/70">
                        {word}
                      </span>
                      <span className="shrink-0 h-1.5 w-1.5 rounded-full bg-brand-mint" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
