"use client";

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { trackCallNowClick } from "../utils/gtm";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-accent pt-24 pb-8 relative overflow-hidden border-t-4 border-gray-900">
      <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Massive Footer CTA */}
        <div className="text-center mb-24 border-b-4 border-gray-900 pb-20">
          <h2 className="text-6xl md:text-[8rem] lg:text-[12rem] font-black text-gray-900 tracking-tighter leading-none mb-8">
            SAY HELLO.
          </h2>
          <a href="mailto:info@bizzgrowlabs.com" className="inline-block bg-white text-gray-900 font-black text-2xl md:text-4xl px-12 py-6 rounded-full border-4 border-gray-900 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all">
            info@bizzgrowlabs.com
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="bg-white p-2 rounded-xl border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Image
                  src="/logo.png"
                  alt="BizzGrow Logo"
                  width={40}
                  height={40}
                  unoptimized
                />
              </div>
              <h3 className="text-4xl font-black text-gray-900 tracking-tight">BizzGrow</h3>
            </Link>

            <p className="text-gray-800 text-xl font-bold pr-8">
              We make brands unignorable. No fluff, just results.
            </p>

            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-14 h-14 rounded-2xl bg-white border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-gray-900 transition-transform hover:-translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <IconComponent className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-2xl font-black text-gray-900 border-b-4 border-gray-900 inline-block pb-2">Menu</h4>
            <ul className="space-y-4">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Our Work", href: "/portfolio" },
                { label: "Insights", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-800 font-black text-xl hover:text-brand-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-5 h-5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-2xl font-black text-gray-900 border-b-4 border-gray-900 inline-block pb-2">Location</h4>
            <div className="space-y-6">
              <a href="tel:+918939036141" className="flex items-center gap-4 group" onClick={() => trackCallNowClick({location: "footer", pagePath: "/"})}>
                <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Phone className="w-5 h-5 text-gray-900" />
                </div>
                <span className="text-gray-900 font-black text-xl">+91 8939036141</span>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-900 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <MapPin className="w-5 h-5 text-gray-900" />
                </div>
                <div className="text-gray-900 font-bold text-lg">
                  <p>106, A Proad, Choolai</p>
                  <p>Chennai-112, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t-4 border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-900 font-bold text-lg">
            &copy; {currentYear} BizzGrow. Making things awesome.
          </p>

          <div className="flex gap-8">
            <Link href="/privacy" className="text-gray-900 hover:text-brand-primary font-black text-lg transition-colors underline decoration-2 underline-offset-4">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-900 hover:text-brand-primary font-black text-lg transition-colors underline decoration-2 underline-offset-4">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
