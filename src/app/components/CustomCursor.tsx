"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth spring physics for the trailing dot
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia("(pointer: fine)").matches) {
      requestAnimationFrame(() => setIsDesktop(true));
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over a link, button, or an element with data-cursor
      const isInteractive = target.closest("a, button, input, [data-cursor]");
      if (isInteractive) {
        setIsHovering(true);
        const customText = target.closest("[data-cursor]")?.getAttribute("data-cursor");
        setCursorText(customText || "");
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Tiny leading dot that tracks perfectly */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-foreground rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      
      {/* Larger trailing ring that expands on hover */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] flex items-center justify-center text-[10px] font-mono font-bold tracking-widest uppercase overflow-hidden backdrop-blur-md"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        initial={{ width: 32, height: 32, backgroundColor: "rgba(255, 253, 249, 0)", border: "1px solid rgba(33, 48, 58, 0.2)" }}
        animate={{
          width: isHovering ? (cursorText ? 80 : 48) : 32,
          height: isHovering ? (cursorText ? 80 : 48) : 32,
          backgroundColor: isHovering ? "rgba(33, 48, 58, 0.1)" : "rgba(33, 48, 58, 0)",
          border: isHovering ? "1px solid rgba(33, 48, 58, 0.5)" : "1px solid rgba(33, 48, 58, 0.2)",
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.span 
          className="text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering && cursorText ? 1 : 0 }}
        >
          {cursorText}
        </motion.span>
      </motion.div>
    </>
  );
}
