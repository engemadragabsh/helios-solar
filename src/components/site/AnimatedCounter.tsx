"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type CounterProps = {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
};

export function AnimatedCounter({ to, duration = 2000, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const startedRef = useRef(false);

  useEffect(() => {
    if (inView && !startedRef.current) {
      startedRef.current = true;
      const start = performance.now();
      const animate = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutExpo for a snappy finish
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(eased * to));
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(to);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
