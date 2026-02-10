"use client";

import { useEffect, useState } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  start?: number;
  enabled?: boolean;
  decimals?: number;
}

export function useCountUp({
  end,
  duration = 2000,
  start = 0,
  enabled = true,
  decimals = 0,
}: UseCountUpOptions): string {
  const [current, setCurrent] = useState(start);

  useEffect(() => {
    if (!enabled) {
      setCurrent(start);
      return;
    }

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease out expo
      const eased = 1 - Math.pow(2, -10 * progress);
      const value = start + (end - start) * eased;

      setCurrent(value);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, start, enabled]);

  return current.toFixed(decimals);
}
