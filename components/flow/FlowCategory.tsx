"use client";

import { FlowCategory as FlowCategoryType } from "@/data/flows";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import FlowStep from "./FlowStep";
import styles from "./FlowCategory.module.css";

interface FlowCategoryProps {
  category: FlowCategoryType;
  index: number;
  isPlaying: boolean;
}

export default function FlowCategory({
  category,
  index,
  isPlaying,
}: FlowCategoryProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <div
      ref={ref}
      className={`${styles.category} ${isVisible && isPlaying ? styles.visible : ""}`}
      style={
        {
          "--category-color": category.cssColor,
          "--category-delay": `${index * 200}ms`,
        } as React.CSSProperties
      }
    >
      <div className={styles.categoryHeader}>
        <div className={styles.dot} />
        <span className={styles.icon}>{category.icon}</span>
        <h3 className={styles.name}>{category.name}</h3>
        <span className={styles.count}>{category.steps.length} steps</span>
      </div>

      <div className={styles.steps}>
        {category.steps.map((step, stepIndex) => (
          <FlowStep
            key={step.id}
            step={step}
            categoryColor={category.cssColor}
            index={stepIndex}
            isVisible={isVisible && isPlaying}
          />
        ))}
      </div>
    </div>
  );
}
