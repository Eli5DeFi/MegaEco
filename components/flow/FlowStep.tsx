"use client";

import { FlowStep as FlowStepType } from "@/data/flows";
import ProtocolIcon from "@/components/shared/ProtocolIcon";
import styles from "./FlowStep.module.css";

interface FlowStepProps {
  step: FlowStepType;
  categoryColor: string;
  index: number;
  isVisible: boolean;
}

export default function FlowStep({
  step,
  categoryColor,
  index,
  isVisible,
}: FlowStepProps) {
  return (
    <div
      className={`${styles.step} ${isVisible ? styles.visible : ""}`}
      style={
        {
          "--step-color": categoryColor,
          "--step-delay": `${(index + 1) * 200}ms`,
        } as React.CSSProperties
      }
    >
      <div className={styles.connector}>
        <svg
          className={styles.connectorSvg}
          width="24"
          height="2"
          viewBox="0 0 24 2"
        >
          <line
            x1="0"
            y1="1"
            x2="24"
            y2="1"
            stroke={categoryColor}
            strokeWidth="2"
            strokeDasharray="4 4"
            className={isVisible ? styles.drawLine : ""}
          />
        </svg>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <span className={styles.stepNumber} style={{ color: categoryColor }}>
            {String(step.order).padStart(2, "0")}
          </span>
          <span className={styles.action}>{step.action}</span>
        </div>

        <a
          href={step.protocolUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.protocol}
          style={{ borderColor: categoryColor }}
        >
          <ProtocolIcon
            name={step.protocolName}
            iconUrl={step.protocolIcon}
            size={24}
          />
          <span className={styles.protocolName}>{step.protocolName}</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className={styles.externalIcon}
          >
            <path
              d="M4 1.5H12.5V10"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5 1.5L1.5 12.5"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <p className={styles.description}>{step.description}</p>

        {step.subSteps && step.subSteps.length > 0 && (
          <div className={styles.subSteps}>
            {step.subSteps.map((sub) => (
              <a
                key={sub.protocolName}
                href={sub.protocolUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.subStep}
              >
                <ProtocolIcon
                  name={sub.protocolName}
                  iconUrl={sub.protocolIcon}
                  size={24}
                />
                <div className={styles.subContent}>
                  <span className={styles.subName}>{sub.protocolName}</span>
                  <span className={styles.subDesc}>{sub.description}</span>
                </div>
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
        )}
      </div>
    </div>
  );
}
