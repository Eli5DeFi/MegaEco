import styles from "./Footer.module.css";

const externalLinks = [
  { label: "MegaETH", href: "https://www.megaeth.com" },
  { label: "Token", href: "https://www.megaeth.com/token" },
  { label: "Rabbithole", href: "https://rabbithole.megaeth.com/discover" },
  { label: "Explorer", href: "https://megaeth.blockscout.com" },
  { label: "Docs", href: "https://docs.megaeth.com" },
  { label: "Uptime", href: "https://uptime.megaeth.com" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.links}>
          {externalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {link.label}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className={styles.externalIcon}
              >
                <path
                  d="M3.5 1.5H10.5V8.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5 1.5L1.5 10.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </div>
        <div className={styles.divider} />
        <p className={styles.copyright}>
          MegaETH Ecosystem Dashboard — Community built
        </p>
      </div>
    </footer>
  );
}
