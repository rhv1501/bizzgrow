"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  X,
  Home,
  User,
  Briefcase,
  FileText,
  BookOpen,
  Mail,
  Rocket,
} from "lucide-react";
import { trackCallNowClick } from "../utils/gtm";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavigation = ({ isOpen, onClose }: MobileNavigationProps) => {
  const navigationItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: User },
    { href: "/services", label: "Services", icon: Briefcase },
    { href: "/portfolio", label: "Portfolio", icon: FileText },
    { href: "/careers", label: "Careers", icon: Rocket },
    { href: "/blog", label: "Blog", icon: BookOpen },
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
      {/* Backdrop */}
      <motion.div
        variants={backdropVariants}
        initial="closed"
        animate="open"
        exit="closed"
        className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Sidebar */}
      <motion.nav
        variants={sidebarVariants}
        initial="closed"
        animate="open"
        exit="closed"
        className="fixed top-0 left-0 h-full w-[85vw] max-w-sm z-50 bg-[#FFD500] border-r-4 border-gray-900 shadow-[12px_0px_0px_0px_rgba(0,0,0,1)] overflow-y-auto"
      >
        <div className="flex flex-col h-full bg-pattern">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b-4 border-gray-900 bg-white">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">BizzGrow</h2>

            <button
              onClick={onClose}
              className="w-12 h-12 rounded-full border-4 border-gray-900 bg-brand-primary flex items-center justify-center text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all duration-200"
              aria-label="Close navigation"
            >
              <X className="w-6 h-6" strokeWidth={3} />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 px-6 py-8">
            <ul className="space-y-4">
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
                      className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-[#00E5FF] transition-colors duration-200 group"
                    >
                      <IconComponent className="w-6 h-6 text-gray-900" strokeWidth={2.5} />
                      <span className="font-black text-gray-900 text-xl tracking-wide uppercase">{item.label}</span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* CTA Section */}
          <div className="p-6 border-t-4 border-gray-900 bg-white">
            <motion.div
              custom={navigationItems.length}
              variants={itemVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="space-y-6 text-center"
            >
              <Link
                href="/contact"
                onClick={onClose}
                className="block w-full bg-[#FF3366] text-white font-black text-xl uppercase tracking-widest py-4 px-4 rounded-full border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all duration-200"
              >
                Get Started
              </Link>

              <div className="text-center pt-2">
                <a
                  href="tel:+918939036141"
                  onClick={() =>
                    trackCallNowClick({
                      location: "mobile_navigation_phone_link",
                      pagePath: window.location.pathname,
                    })
                  }
                  className="text-gray-900 font-black text-lg underline decoration-4 underline-offset-4 hover:text-[#FF3366] transition-colors duration-200"
                >
                  +91 8939036141
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
