"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { X, Home, User, Briefcase, FileText, Mail, BookOpen, Rocket } from "lucide-react";
import { trackCallNowClick } from "../utils/gtm";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavigation = ({ isOpen, onClose }: MobileNavigationProps) => {
  const navigationItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/services", label: "Services", icon: Briefcase },
    { href: "/portfolio", label: "Portfolio", icon: FileText },
    { href: "/about", label: "About", icon: User },
    { href: "/blog", label: "Blog", icon: BookOpen },
    { href: "/careers", label: "Careers", icon: Rocket },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  const sidebarVariants = {
    closed: {
      x: "-100%",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const backdropVariants = {
    closed: { opacity: 0, transition: { duration: 0.3 } },
    open: { opacity: 1, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    closed: { x: -20, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    }),
  };

  return (
    <>
      <motion.div
        variants={backdropVariants}
        initial="closed"
        animate="open"
        exit="closed"
        className="fixed inset-0 z-40 bg-foreground/25 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.nav
        variants={sidebarVariants}
        initial="closed"
        animate="open"
        exit="closed"
        className="fixed left-0 top-0 z-50 h-full w-[85vw] max-w-sm overflow-y-auto border-r border-border bg-surface shadow-[0_30px_80px_-45px_rgba(33,48,58,0.5)]"
      >
        <div className="flex h-full flex-col bg-pattern">
          <div className="flex items-center justify-between border-b border-border px-6 py-5">
            <h2 className="text-2xl font-black tracking-tight">BizzGrow</h2>

            <button
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-brand-mint text-foreground shadow-[0_18px_40px_-30px_rgba(33,48,58,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-none"
              aria-label="Close navigation"
            >
              <X className="w-6 h-6" strokeWidth={3} />
            </button>
          </div>

          <div className="flex-1 px-6 py-8">
            <ul className="space-y-3">
              {navigationItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.li
                    key={item.href}
                    custom={index}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-center gap-4 rounded-2xl border border-border bg-[#fbfaf7] px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-primary hover:bg-brand-mint/60"
                    >
                      <IconComponent
                        className="w-5 h-5 text-foreground"
                        strokeWidth={2.5}
                      />
                      <span className="text-lg font-semibold text-foreground">
                        {item.label}
                      </span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          <div className="border-t border-border p-6">
            <motion.div
              custom={navigationItems.length}
              variants={itemVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="space-y-5 text-center"
            >
              <Link
                href="/contact"
                onClick={onClose}
                className="btn-primary block w-full text-center text-base"
              >
                Start a project
              </Link>

              <div className="pt-1 text-center">
                <a
                  href="tel:+919150302455"
                  onClick={() =>
                    trackCallNowClick({
                      location: "mobile_navigation_phone_link",
                      pagePath: window.location.pathname,
                    })
                  }
                  className="font-semibold text-foreground underline decoration-2 underline-offset-4 transition-colors duration-200 hover:text-brand-primary"
                >
                  +91 9150302455
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default MobileNavigation;
