"use client";

import { Protocol } from "@/data/protocols";
import ProtocolCard from "./ProtocolCard";
import styles from "./ProtocolGrid.module.css";

interface ProtocolGridProps {
  protocols: Protocol[];
}

export default function ProtocolGrid({ protocols }: ProtocolGridProps) {
  if (protocols.length === 0) {
    return (
      <div className={styles.empty}>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          className={styles.emptyIcon}
        >
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <path
            d="M18 18L30 30M30 18L18 30"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <p className={styles.emptyText}>No protocols match your filters</p>
        <p className={styles.emptyHint}>Try adjusting your search or category</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {protocols.map((protocol, index) => (
        <ProtocolCard key={protocol.slug} protocol={protocol} index={index} />
      ))}
    </div>
  );
}
