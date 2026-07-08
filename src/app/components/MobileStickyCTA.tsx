"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface MobileStickyCTAProps {
  href?: string;
  text?: string;
}

const MobileStickyCTA = ({ href = "/contact", text = "Start a project" }: MobileStickyCTAProps = {}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 50px
      setIsVisible(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden pointer-events-none">
      <div className="border-t border-border bg-surface/95 p-3 shadow-[0_-20px_60px_-40px_rgba(33,48,58,0.5)] backdrop-blur pointer-events-auto">
        <Link
          href={href}
          onClick={(e) => {
            if (href.startsWith("#")) {
              e.preventDefault();
              const id = href.substring(1);
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="group relative overflow-hidden flex items-center justify-center gap-3 rounded-full bg-foreground px-10 py-4 transition-transform active:scale-95 w-full"
        >
          <span className="relative z-10 text-sm font-bold text-background uppercase tracking-widest">
            {text}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MobileStickyCTA;
