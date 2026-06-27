"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import MobileNavigation from "./MobileNavigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change or when transition starts
  useEffect(() => {
    setOpen(false);

    const handleTransitionStart = () => setOpen(false);
    window.addEventListener("start-page-transition", handleTransitionStart);
    
    return () => {
      window.removeEventListener("start-page-transition", handleTransitionStart);
    };
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className={`group relative z-10 flex items-center gap-3 rounded-full border px-3 py-2 transition-all duration-300 ${
            scrolled
              ? "border-border bg-surface/90 shadow-[0_18px_40px_-34px_rgba(33,48,58,0.45)] backdrop-blur"
              : "border-transparent bg-transparent"
          }`}
        >
          <Image
            src="/logo-cropped.png"
            alt="BizzGrow Logo"
            width={44}
            height={44}
            className="transition-transform duration-300 group-hover:-rotate-6"
            unoptimized
          />
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-border bg-surface/90 px-2 py-2 shadow-[0_24px_60px_-45px_rgba(33,48,58,0.5)] backdrop-blur lg:flex">
          {["About", "Services", "Portfolio", "Blog"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-brand-mint/70 hover:text-foreground"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex relative z-10">
          <Link href="/contact" className="btn-primary text-sm">
            Start a project
          </Link>
        </div>

        <button
          className="group relative z-10 flex h-12 w-12 flex-col items-center justify-center rounded-full border border-border bg-surface shadow-[0_18px_40px_-32px_rgba(33,48,58,0.45)] transition-all active:translate-y-1 active:shadow-none lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-5 bg-foreground transition-all duration-300 ${
              open ? "rotate-45 translate-y-1" : "-translate-y-1"
            }`}
          ></span>
          <span
            className={`h-0.5 w-5 bg-foreground transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`h-0.5 w-5 bg-foreground transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-1" : "translate-y-1"
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <MobileNavigation isOpen={open} onClose={() => setOpen(false)} />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
