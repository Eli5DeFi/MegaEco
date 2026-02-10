import FlowTimeline from "@/components/flow/FlowTimeline";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.label}>MegaETH Mainnet</span>
            <h1 className={styles.title}>
              Explore the
              <br />
              <span className={styles.gradient}>MegaETH Ecosystem</span>
            </h1>
            <p className={styles.subtitle}>
              Step-by-step animated guide to interacting with live protocols —
              from yield farming to trading to on-chain games.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statValue}>30+</span>
                <span className={styles.statLabel}>Protocols</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statValue}>10</span>
                <span className={styles.statLabel}>Mega Mafia</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statValue}>3</span>
                <span className={styles.statLabel}>Categories</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <FlowTimeline />
      </section>
    </div>
  );
}
