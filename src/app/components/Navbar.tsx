"use client";

import Link from "next/link";
import { useState } from "react";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 py-4 px-6 md:px-8 transition-all duration-300 shadow-sm mb-2">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              style={{ background: "var(--brand-gradient)" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="text-white"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <h1
              className="text-2xl font-bold"
              style={{ color: "var(--text-secondary)" }}
            >
              BizzGrow
            </h1>
          </Link>
        </div>

        <nav className="flex items-center gap-8">
          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            <li>
              <Link
                href="/about"
                className="text-sm font-medium transition-colors duration-200 relative group"
                style={{ color: "var(--text-secondary)" }}
              >
                About
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full"
                  style={{ backgroundColor: "var(--brand-primary)" }}
                ></span>
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-sm font-medium transition-colors duration-200 relative group"
                style={{ color: "var(--text-secondary)" }}
              >
                Services
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full"
                  style={{ backgroundColor: "var(--brand-primary)" }}
                ></span>
              </Link>
            </li>
            <li>
              <Link
                href="/case-studies"
                className="text-sm font-medium transition-colors duration-200 relative group"
                style={{ color: "var(--text-secondary)" }}
              >
                Case Studies
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full"
                  style={{ backgroundColor: "var(--brand-primary)" }}
                ></span>
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-sm font-medium transition-colors duration-200 relative group"
                style={{ color: "var(--text-secondary)" }}
              >
                Blog
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full"
                  style={{ backgroundColor: "var(--brand-primary)" }}
                ></span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm font-medium transition-colors duration-200 relative group"
                style={{ color: "var(--text-secondary)" }}
              >
                Contact
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full"
                  style={{ backgroundColor: "var(--brand-primary)" }}
                ></span>
              </Link>
            </li>
          </ul>

          {/* Get Started Button - Hidden on mobile to save space */}
          <Link
            href="/contact"
            className="btn btn-primary px-6 py-2.5 text-sm mobile-hidden"
          >
            Get Started
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
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center group"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                open ? "rotate-45 translate-y-0.5" : ""
              }`}
              style={{ backgroundColor: "var(--text-secondary)" }}
            ></span>
            <span
              className={`w-6 h-0.5 transition-all duration-300 mt-1 ${
                open ? "opacity-0" : ""
              }`}
              style={{ backgroundColor: "var(--text-secondary)" }}
            ></span>
            <span
              className={`w-6 h-0.5 transition-all duration-300 mt-1 ${
                open ? "-rotate-45 -translate-y-1.5" : ""
              }`}
              style={{ backgroundColor: "var(--text-secondary)" }}
            ></span>
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation isOpen={open} onClose={() => setOpen(false)} />
    </header>
  );
};

export default Navbar;
