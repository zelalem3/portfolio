"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
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
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

    const show = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (delay > 0) {
        timeoutRef.current = setTimeout(() => {
          el.classList.add("is-visible");
        }, delay);
      } else {
        el.classList.add("is-visible");
      }
    };

    const hide = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      el.classList.remove("is-visible");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show();
            if (once) observer.unobserve(el);
          } else if (!once) {
            hide();
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(el);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
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