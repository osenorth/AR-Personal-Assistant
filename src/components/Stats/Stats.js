import React from "react";
import * as styles from "./Stats.module.css";

const Stats = () => {
  return (
    <section className={`${styles.statsContainer} secondary-background`}>
      <h4 className={`text-heading ${styles.statsLabel}`}>Why Choose us ?</h4>
      <div className={styles.statsList}>
        <div className={styles.statsCard}>
          <h1 className={` ${styles.number} text-primary`}>100+</h1>
          <p>Satisfied Brands</p>
        </div>
        <div className={styles.statsCard}>
          <h1 className={` ${styles.number} text-primary`}>10K+</h1>
          <p>Satisfied Customers</p>
        </div>
        <div className={styles.statsCard}>
          <h1 className={` ${styles.number} text-primary`}>+95%</h1>
          <p>Customer Satisfaction</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
