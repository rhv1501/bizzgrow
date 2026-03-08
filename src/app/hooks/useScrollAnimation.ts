"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const useScrollAnimation = <T extends HTMLElement = HTMLElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion) {
      // Show elements immediately without animation
      gsap.set(element, { opacity: 1, y: 0 });
      return;
    }

    // Set initial state
    gsap.set(element, { opacity: 0, y: 30 });

    // Create scroll animation
    const animation = gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return ref;
};

export const useStaggerAnimation = <T extends HTMLElement = HTMLElement>(
  selector: string,
) => {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const elements = container.querySelectorAll(selector);

    if (elements.length === 0) return;

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion) {
      gsap.set(elements, { opacity: 1, y: 0 });
      return;
    }

    // Set initial state
    gsap.set(elements, { opacity: 0, y: 30 });

    // Create staggered animation
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    timeline.to(elements, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1, // 100ms delay between each element
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selector]);

  return containerRef;
};

export const useCounterAnimation = (endValue: number, duration: number = 2) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion) {
      element.textContent = endValue.toString();
      return;
    }

    const obj = { value: 0 };

    const animation = gsap.to(obj, {
      value: endValue,
      duration: duration,
      ease: "power2.out",
      onUpdate: () => {
        element.textContent = Math.round(obj.value).toString();
      },
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      animation.kill();
    };
  }, [endValue, duration]);

  return ref;
};