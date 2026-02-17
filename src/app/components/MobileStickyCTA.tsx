"use client";

import { Phone, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const MobileStickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 200px
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-white border-t border-gray-200 shadow-xl p-4">
        <div className="flex gap-3">
          <a
            href="/contact"
            className="flex-1 text-white font-semibold py-3 px-4 rounded-xl text-center transition-all duration-200 flex items-center justify-center gap-2"
            style={{ background: "var(--brand-gradient)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <MessageCircle className="w-5 h-5" />
            Get Started
          </a>

          <a
            href="tel:+1234567890"
            className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white p-3 rounded-xl transition-colors duration-200"
            aria-label="Call us"
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>

        {/* Trust indicator */}
        <div className="text-center mt-2">
          <p className="text-xs text-gray-500">
            ✨ Free consultation • 24/7 support
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileStickyCTA;
