"use client";

import { kpiCategories, mafiaApps } from "@/data/kpis";
import KPICard from "@/components/kpi/KPICard";
import TGETimeline from "@/components/kpi/TGETimeline";
import styles from "./kpi.module.css";

export default function KPIPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <span className={styles.label}>Road to TGE</span>
          <h1 className={styles.title}>KPI Tracker</h1>
          <p className={styles.subtitle}>
            Track the three key performance indicators that unlock the MegaETH
            Token Generation Event.
          </p>
        </header>

        <TGETimeline />

        <div className={styles.grid}>
          {kpiCategories.map((kpi, index) => (
            <KPICard key={kpi.id} kpi={kpi} index={index} />
          ))}
        </div>

        <section className={styles.mafiaSection}>
          <h3 className={styles.mafiaTitle}>Mega Mafia Apps Status</h3>
          <p className={styles.mafiaSubtitle}>
            10 core apps required for KPI 01 completion
          </p>
          <div className={styles.mafiaGrid}>
            {mafiaApps.map((app) => (
              <div
                key={app.name}
                className={`${styles.mafiaApp} ${
                  app.active ? styles.mafiaAppActive : ""
                }`}
              >
                <div className={styles.mafiaIcon}>
                  {app.active ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8L6.5 11.5L13 4.5"
                        stroke="var(--accent-yield)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <circle
                        cx="8"
                        cy="8"
                        r="5"
                        stroke="var(--text-muted)"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                      />
                    </svg>
                  )}
                </div>
                <span className={styles.mafiaName}>{app.name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
