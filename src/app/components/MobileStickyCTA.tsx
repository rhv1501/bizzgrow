"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const MobileStickyCTA = () => {
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
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="border-t border-border bg-surface/95 p-3 shadow-[0_-20px_60px_-40px_rgba(33,48,58,0.5)] backdrop-blur">
        <Link
          href="/contact"
          className="btn-primary flex w-full items-center justify-center text-base active:translate-y-0.5"
        >
          Start a project
        </Link>
      </div>
    </div>
  );
};

export default MobileStickyCTA;
