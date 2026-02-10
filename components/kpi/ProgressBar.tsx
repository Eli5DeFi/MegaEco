"use client";

import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
  progress: number;
  animated?: boolean;
  color?: string;
}

export default function ProgressBar({
  progress,
  animated = false,
  color,
}: ProgressBarProps) {
  return (
    <div className={styles.track}>
      <div
        className={`${styles.fill} ${animated ? styles.animated : ""}`}
        style={{
          width: `${Math.min(100, Math.max(0, progress))}%`,
          ...(color ? { background: color } : {}),
        }}
      />
    </div>
  );
}
