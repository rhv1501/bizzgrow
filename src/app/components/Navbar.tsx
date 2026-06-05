"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import MobileNavigation from "./MobileNavigation";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white border-b-4 border-gray-900 shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 group relative z-10">
          <Image
            src="/logo.png"
            alt="BizzGrow Logo"
            width={40}
            height={40}
            priority
            className="group-hover:rotate-12 transition-transform duration-300"
            unoptimized
          />
          <span className="text-2xl font-black text-gray-900 tracking-tight">BizzGrow</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2 bg-white border-4 border-gray-900 px-8 py-3 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          {["About", "Services", "Portfolio", "Careers", "Blog"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-sm font-black text-gray-900 hover:text-brand-primary transition-colors relative group uppercase tracking-widest"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4 relative z-10">
          <Link
            href="/contact"
            className="btn-primary text-sm px-6 py-3"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden relative w-12 h-12 bg-[#FFD500] rounded-xl flex flex-col justify-center items-center group z-10 border-4 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
              open ? "rotate-45 translate-y-1" : "-translate-y-1"
            }`}
          ></span>
          <span
            className={`w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
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
