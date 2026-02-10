"use client";

import styles from "./SegmentedBar.module.css";

interface SegmentedBarProps {
  segments: number;
  filled: number;
  animated?: boolean;
}

export default function SegmentedBar({
  segments,
  filled,
  animated = false,
}: SegmentedBarProps) {
  return (
    <div className={styles.bar}>
      {Array.from({ length: segments }, (_, i) => (
        <div
          key={i}
          className={`${styles.segment} ${
            i < filled ? styles.filled : ""
          } ${animated ? styles.animated : ""}`}
          style={{ animationDelay: `${i * 60}ms` }}
        />
      ))}
    </div>
  );
}
