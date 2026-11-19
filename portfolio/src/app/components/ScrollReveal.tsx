"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
  /** false = replay every time (default). true = only once */
  once?: boolean;
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (timeoutRef.current !== null) {
            window.clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
          }

          if (entry.isIntersecting) {
            timeoutRef.current = window.setTimeout(() => {
              el.classList.add("is-visible");
              timeoutRef.current = null;
            }, delay);

            if (once) {
              observer.unobserve(el);
            }
          } else if (!once) {
            el.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -48px 0px",
      }
    );

    observer.observe(el);

    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
      observer.disconnect();
    };
  }, [delay, once]);

  const directionClass =
    direction === "left"
      ? "reveal-left"
      : direction === "right"
        ? "reveal-right"
        : direction === "scale"
          ? "reveal-scale"
          : "reveal-up";

  return (
    <div
      ref={ref}
      className={`scroll-reveal-js ${directionClass} ${className}`}
    >
      {children}
    </div>
  );
}