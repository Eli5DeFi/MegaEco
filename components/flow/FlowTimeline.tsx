"use client";

import { useState } from "react";
import { flowCategories } from "@/data/flows";
import FlowCategory from "./FlowCategory";
import styles from "./FlowTimeline.module.css";

export default function FlowTimeline() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className={styles.timeline}>
      <div className={styles.header}>
        <h2 className={styles.title}>Protocol Flow</h2>
        <p className={styles.subtitle}>
          Step-by-step guide to interacting with MegaETH ecosystem protocols
        </p>
        <button
          className={styles.playPause}
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? "Pause animations" : "Play animations"}
        >
          {isPlaying ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <rect x="3" y="2" width="4" height="12" rx="1" />
              <rect x="9" y="2" width="4" height="12" rx="1" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4 2L14 8L4 14V2Z" />
            </svg>
          )}
          <span>{isPlaying ? "Pause" : "Play"}</span>
        </button>
      </div>

      <div className={styles.categories}>
        {/* Vertical connector line */}
        <div className={styles.verticalLine} />

        {flowCategories.map((category, index) => (
          <FlowCategory
            key={category.id}
            category={category}
            index={index}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
}
