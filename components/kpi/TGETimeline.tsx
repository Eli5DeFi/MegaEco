"use client";

import { tgeFlow } from "@/data/kpis";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import styles from "./TGETimeline.module.css";

export default function TGETimeline() {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`${styles.timeline} ${isVisible ? styles.visible : ""}`}
    >
      <h4 className={styles.title}>TGE Flow</h4>

      <div className={styles.flow}>
        {tgeFlow.steps.map((step, i) => (
          <div key={step} className={styles.step}>
            <div
              className={`${styles.stepDot} ${
                i === 0 ? styles.stepDotActive : ""
              }`}
            />
            <span className={styles.stepLabel}>{step}</span>
            {i < tgeFlow.steps.length - 1 && (
              <div className={styles.connector}>
                <svg width="40" height="2" viewBox="0 0 40 2">
                  <line
                    x1="0"
                    y1="1"
                    x2="40"
                    y2="1"
                    stroke="var(--text-muted)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <p className={styles.note}>{tgeFlow.updateNote}</p>
    </div>
  );
}
