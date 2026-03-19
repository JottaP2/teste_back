"use client";

import { useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  delayMs?: number;
  threshold?: number;
  rootMargin?: string;
  className?: string;
};

export default function ScrollReveal({
  children,
  delayMs = 0,
  threshold = 0.04,
  rootMargin = "0px 0px 2% 0px",
  className = "",
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        root: null,
        rootMargin,
      }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return (
    <div
      ref={containerRef}
      className={`bg-white dark:bg-black ${className}`}
    >
      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 28px, 0)",
          transitionProperty: "opacity, transform",
          transitionDuration: "560ms",
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          transitionDelay: `${delayMs}ms`,
          willChange: "opacity, transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}