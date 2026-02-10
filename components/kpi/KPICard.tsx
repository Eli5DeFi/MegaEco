"use client";

import { KPICategory } from "@/data/kpis";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useCountUp } from "@/hooks/useCountUp";
import SegmentedBar from "./SegmentedBar";
import ProgressBar from "./ProgressBar";
import styles from "./KPICard.module.css";

interface KPICardProps {
  kpi: KPICategory;
  index: number;
}

export default function KPICard({ kpi, index }: KPICardProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.15,
  });

  const animatedProgress = useCountUp({
    end: kpi.overallProgress,
    duration: 1500,
    enabled: isVisible,
  });

  return (
    <div
      ref={ref}
      className={`${styles.card} ${isVisible ? styles.visible : ""}`}
      style={{ "--card-delay": `${index * 150}ms` } as React.CSSProperties}
    >
      <div className={styles.header}>
        <span className={styles.number}>{kpi.number}</span>
        <h3 className={styles.title}>{kpi.title}</h3>
      </div>

      <div className={styles.headline}>
        <span className={styles.headlineValue}>{kpi.headline}</span>
      </div>

      <p className={styles.description}>{kpi.description}</p>

      <div className={styles.overallProgress}>
        <div className={styles.progressHeader}>
          <span className={styles.progressLabel}>Overall Progress</span>
          <span className={styles.progressValue}>
            {animatedProgress}%
          </span>
        </div>
        <ProgressBar progress={kpi.overallProgress} animated={isVisible} />
        <span className={styles.overallLabel}>{kpi.overallLabel}</span>
      </div>

      <div className={styles.metrics}>
        {kpi.subMetrics.map((metric, i) => (
          <div key={i} className={styles.metric}>
            <div className={styles.metricHeader}>
              <span className={styles.metricLabel}>{metric.label}</span>
              <span className={styles.metricValue}>
                {metric.current}
                {metric.unit && (
                  <span className={styles.metricUnit}>{metric.unit}</span>
                )}
              </span>
            </div>
            <p className={styles.metricDesc}>{metric.description}</p>
            {metric.segments ? (
              <SegmentedBar
                segments={metric.segments}
                filled={
                  typeof metric.current === "number"
                    ? metric.current
                    : 0
                }
                animated={isVisible}
              />
            ) : (
              <ProgressBar progress={metric.progress} animated={isVisible} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
