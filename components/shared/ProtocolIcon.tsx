"use client";

import { useState } from "react";
import styles from "./ProtocolIcon.module.css";

interface ProtocolIconProps {
  name: string;
  iconUrl: string;
  size?: number;
}

function getInitials(name: string): string {
  return name
    .split(/[\s.]+/)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function ProtocolIcon({
  name,
  iconUrl,
  size = 48,
}: ProtocolIconProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={styles.wrapper}
      style={{ width: size, height: size, borderRadius: size > 32 ? 12 : 8 }}
    >
      {!failed ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={iconUrl}
          alt={`${name} icon`}
          width={size}
          height={size}
          className={styles.img}
          onError={() => setFailed(true)}
          loading="lazy"
        />
      ) : (
        <span
          className={styles.fallback}
          style={{ fontSize: size > 32 ? "1rem" : "0.7rem" }}
        >
          {getInitials(name)}
        </span>
      )}
    </div>
  );
}
