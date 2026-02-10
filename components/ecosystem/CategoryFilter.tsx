"use client";

import { filterCategories, categoryLabels } from "@/data/protocols";
import styles from "./CategoryFilter.module.css";

interface CategoryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
  showMafiaOnly: boolean;
  onToggleMafia: (value: boolean) => void;
  showLiveOnly: boolean;
  onToggleLive: (value: boolean) => void;
}

export default function CategoryFilter({
  selected,
  onSelect,
  showMafiaOnly,
  onToggleMafia,
  showLiveOnly,
  onToggleLive,
}: CategoryFilterProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        {filterCategories.map((cat) => (
          <button
            key={cat}
            className={`${styles.tab} ${selected === cat ? styles.tabActive : ""}`}
            onClick={() => onSelect(cat)}
          >
            {categoryLabels[cat] || cat}
          </button>
        ))}
      </div>

      <div className={styles.toggles}>
        <button
          className={`${styles.toggle} ${showMafiaOnly ? styles.toggleActive : ""}`}
          onClick={() => onToggleMafia(!showMafiaOnly)}
        >
          <span className={styles.toggleIcon}>&#x1F525;</span>
          Mega Mafia
        </button>
        <button
          className={`${styles.toggle} ${showLiveOnly ? styles.toggleActive : ""}`}
          onClick={() => onToggleLive(!showLiveOnly)}
        >
          <span className={styles.toggleDot} />
          Live Only
        </button>
      </div>
    </div>
  );
}
