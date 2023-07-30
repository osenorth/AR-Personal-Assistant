import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as styles from "./UserJourney.module.css";

export default function UserJourney({ journeyData }) {
  return (
    <section className={`margin-on-side ${styles.userjourneyContainer}`}>
      <h4 className={`text-heading ${styles.userjourneyLabel}`}>
        How to use ?
      </h4>
      <p className={styles.userjourneyDes}>
        The steps below showcases how should be your journey while using this
        service
      </p>
      <div className={styles.stepsList}>
        {journeyData.map((step) => (
          <div
            className={`${styles.cardContainer} secondary-background`}
            key={step.id}
          >
            <div className={styles.imageContainer}>
              <Image
                src={step.poster}
                alt={step.title}
                className={styles.posterImg}
              />
            </div>
            <div className={styles.stepInfo}>
              <h4 className={`${styles.stepName} text-primary`}>
                {step.title}
              </h4>
              <p>{step.desc}</p>
              {step.demoUrl && step.demoUrl != "" && (
                <Link
                  href={step.demoUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="primary-btn"
                >
                  Demo &gt;
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
