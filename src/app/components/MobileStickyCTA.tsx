"use client";

import { Phone, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { trackCallNowClick } from "../utils/gtm";

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
      <div className="bg-white border-t-4 border-gray-900 shadow-[0px_-8px_0px_0px_rgba(0,0,0,1)] p-4">
        <div className="flex gap-3">
          <a
            href="/contact"
            className="flex-1 bg-brand-primary text-white border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black py-4 px-4 rounded-xl text-center transition-all duration-200 flex items-center justify-center gap-2 text-lg active:translate-y-1 active:shadow-none"
          >
            <MessageCircle className="w-6 h-6" />
            Get Started
          </a>

          <a
            href="tel:+918939036141"
            id="phone"
            onClick={() =>
              trackCallNowClick({
                location: "mobile_sticky_cta_phone_button",
                pagePath: window.location.pathname,
              })
            }
            className="flex items-center justify-center bg-brand-accent border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-gray-900 p-4 rounded-xl transition-colors duration-200 active:translate-y-1 active:shadow-none"
            aria-label="Call us"
          >
            <Phone className="w-7 h-7" />
          </a>
        </div>

        {/* Trust indicator */}
        <div className="text-center mt-3">
          <p className="text-xs text-gray-700 font-bold tracking-widest uppercase">
            ✨ Free consultation • 24/7 support
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileStickyCTA;
