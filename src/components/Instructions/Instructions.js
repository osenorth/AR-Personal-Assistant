import React from "react";
import * as styles from "./Instructions.module.css";

export default function Instructions({ data, startSession }) {
  const diffClass = `${data.difficulty}`;
  return (
    <div className={styles.instructionsContainer}>
      <h2 className="text-primary">{data.name}</h2>
      <div className={styles.diffContainer}>
        <h3 className="text-subheading">Difficulty</h3>
        <button className={`secondary-btn ${styles[diffClass]}`}>
          {data.difficulty}
        </button>
      </div>
      <h3 className={`text-primary ${styles.stepsText}`}>Steps</h3>
      <div className={styles.instructionsList}>
        {data.instructions.map((instruction, index) => {
          return (
            <div className={styles.instruction} key={index}>
              <button className={`primary-btn ${styles.noButton}`}>
                {index + 1}
              </button>
              <p>{instruction}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.actionButtons}>
        <button className="primary-btn" onClick={startSession}>
          Start Session
        </button>
        <a href={data.refLink} target="_blank">
          <button className="secondary-btn"> Know More</button>
        </a>
      </div>
    </div>
  );
}
