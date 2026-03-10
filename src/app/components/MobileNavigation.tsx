"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  X,
  Home,
  User,
  Briefcase,
  FileText,
  BookOpen,
  Mail,
} from "lucide-react";

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
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    closed: {
      x: -20,
      opacity: 0,
    },
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
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.nav
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 left-0 h-full w-80 max-w-[85vw] z-50"
            style={{ background: "var(--brand-primary)" }}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/15">
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-bold text-white">BizzGrow</h2>
                </div>

                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
                  aria-label="Close navigation"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 px-6 py-8">
                <ul className="space-y-2">
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
                          className="flex items-center gap-4 px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 group"
                        >
                          <IconComponent className="w-5 h-5 text-white/70 group-hover:text-green-400 transition-colors duration-200" />
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>

              {/* CTA Section */}
              <div className="p-6 border-t border-white/15">
                <motion.div
                  custom={navigationItems.length}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="space-y-4"
                >
                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="block w-full bg-green-500 hover:bg-green-400 text-white font-semibold py-3 px-4 rounded-xl text-center transition-colors duration-200"
                  >
                    Get Started
                  </Link>

                  <div className="text-center">
                    <a
                      href="tel:+918939036141"
                      className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                    >
                      +91 8939036141
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNavigation;
