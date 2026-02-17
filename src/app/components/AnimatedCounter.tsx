"use client";

import { useEffect, useState } from "react";

// Animated Counter Hook
const useCountAnimation = (targetNumber: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * targetNumber);

      setCount(currentCount);

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(targetNumber);
      }
    };

    requestAnimationFrame(updateCount);
  }, [targetNumber, duration, isVisible]);

  // Intersection Observer to trigger animation when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`stat-${targetNumber}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [targetNumber]);

  return count;
};

// StatCard Component
interface StatCardProps {
  number: number;
  suffix: string;
  label: string;
  icon: string;
  color: string;
}

const StatCard = ({ number, suffix, label, icon, color }: StatCardProps) => {
  const animatedNumber = useCountAnimation(number);

  return (
    <div id={`stat-${number}`} className="text-center group">
      {/* Icon */}
      <div className="mb-4">
        <div
          className={`w-16 h-16 mx-auto rounded-2xl ${color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          <span className="text-2xl" role="img" aria-label={label}>
            {icon}
          </span>
        </div>
      </div>

      {/* Animated Number */}
      <div className="mb-2">
        <span className="text-4xl lg:text-5xl font-bold text-white">
          {animatedNumber}
        </span>
        <span className="text-4xl lg:text-5xl font-bold text-white/80">
          {suffix}
        </span>
      </div>

      {/* Label */}
      <div className="text-white/70 font-medium text-sm lg:text-base">
        {label}
      </div>

      {/* Decorative line */}
      <div
        className={`w-12 h-1 mx-auto mt-3 rounded-full ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      ></div>
    </div>
  );
};

export default StatCard;
