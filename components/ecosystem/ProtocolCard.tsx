"use client";

import { Protocol } from "@/data/protocols";
import { getStatusLabel } from "@/lib/utils";
import ProtocolIcon from "@/components/shared/ProtocolIcon";
import styles from "./ProtocolCard.module.css";

interface ProtocolCardProps {
  protocol: Protocol;
  index: number;
}

function getStatusClass(status: string): string {
  switch (status) {
    case "live":
      return styles.statusLive;
    case "coming_soon":
      return styles.statusComingSoon;
    case "invite_only":
      return styles.statusInviteOnly;
    default:
      return "";
  }
}

export default function ProtocolCard({ protocol, index }: ProtocolCardProps) {
  return (
    <div
      className={styles.card}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className={styles.header}>
        <ProtocolIcon
          name={protocol.name}
          iconUrl={protocol.icon}
          size={48}
        />
        <div className={styles.meta}>
          <h4 className={styles.name}>{protocol.name}</h4>
          <div className={styles.badges}>
            <span className={`${styles.status} ${getStatusClass(protocol.status)}`}>
              {protocol.status === "live" && <span className={styles.liveDot} />}
              {getStatusLabel(protocol.status)}
            </span>
            {protocol.isMegaMafia && (
              <span className={styles.mafia}>&#x1F525; Mafia</span>
            )}
          </div>
        </div>
      </div>

      <p className={styles.description}>{protocol.description}</p>

      <div className={styles.links}>
        {protocol.links.website && (
          <a
            href={protocol.links.website}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label={`Visit ${protocol.name} website`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle
                cx="8"
                cy="8"
                r="6.5"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M1.5 8H14.5M8 1.5C9.5 3.5 10.5 5.5 10.5 8C10.5 10.5 9.5 12.5 8 14.5C6.5 12.5 5.5 10.5 5.5 8C5.5 5.5 6.5 3.5 8 1.5Z"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
          </a>
        )}
        {protocol.links.twitter && (
          <a
            href={protocol.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label={`Visit ${protocol.name} on Twitter`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M9.52 6.77L15.48 0H14.07L8.89 5.88L4.76 0H0L6.25 8.9L0 16H1.41L6.87 9.79L11.24 16H16L9.52 6.77ZM7.59 8.97L6.96 8.09L1.92 1.04H4.09L8.15 6.73L8.78 7.61L14.07 15.01H11.9L7.59 8.97Z" />
            </svg>
          </a>
        )}
        {protocol.links.docs && (
          <a
            href={protocol.links.docs}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label={`View ${protocol.name} docs`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 1.5H10L13 4.5V14.5H3V1.5Z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              <path
                d="M10 1.5V4.5H13"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              <path
                d="M5.5 8.5H10.5M5.5 10.5H10.5M5.5 6.5H8"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
