"use client";

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { trackCallNowClick } from "../utils/gtm";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer pt-20 pb-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="BizzGrow Logo"
                width={40}
                height={40}
                unoptimized
              />
              <h3 className="text-2xl font-bold text-white">BizzGrow</h3>
            </div>

            <p className="text-white/80 leading-relaxed">
              Empowering small and medium businesses with cutting-edge digital
              solutions to scale and thrive in the modern marketplace.
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
                    className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-3">
              {[
                {
                  label: "Web Design & Development",
                  href: "/services/website",
                },
                { label: "Digital Marketing", href: "/services/marketing" },
                { label: "Branding & Creative", href: "/services/branding" },
                { label: "SEO & Analytics", href: "/services/seo" },
                { label: "Business Automation", href: "/services/automation" },
                { label: "Custom Development", href: "/services/development" },
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Blog", href: "/blog" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-white/60 mt-0.5 shrink-0" />
                <div>
                  <a
                    href="mailto:bizzgrowlabs@gmail.com"
                    className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                  >
                    bizzgrowlabs@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-white/60 mt-0.5 shrink-0" />
                <div>
                  <a
                    href="tel:+918939036141"
                    onClick={() =>
                      trackCallNowClick({
                        location: "footer_phone_link",
                        pagePath: window.location.pathname,
                      })
                    }
                    className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                  >
                    +91 8939036141
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/60 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">
                    106, A Proad, Choolai
                    <br />
                    Chennai-112
                    <br />
                    India
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <p className="text-white/90 text-sm font-medium mb-2">
                Ready to grow?
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors text-sm font-semibold"
              >
                Start Your Project
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              &copy; {currentYear} BizzGrow. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="/privacy"
                className="text-white/60 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-white/60 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
