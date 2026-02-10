"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/", label: "Flow" },
  { href: "/kpi", label: "KPIs" },
  { href: "/ecosystem", label: "Ecosystem" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <div className={styles.logo}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="6" fill="#E8E4FF" />
              <path
                d="M7 14L14 7L21 14L14 21L7 14Z"
                fill="#0A0104"
                stroke="#0A0104"
                strokeWidth="1.5"
              />
              <path
                d="M10 14L14 10L18 14L14 18L10 14Z"
                fill="#E8E4FF"
              />
            </svg>
          </div>
          <span className={styles.brandText}>MegaETH</span>
          <span className={styles.brandSub}>Ecosystem</span>
        </Link>

        <div className={`${styles.links} ${menuOpen ? styles.linksOpen : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${
                pathname === link.href ? styles.linkActive : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
              {pathname === link.href && (
                <span className={styles.activeIndicator} />
              )}
            </Link>
          ))}
        </div>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
