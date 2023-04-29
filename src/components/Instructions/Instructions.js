import React from "react";
import * as styles from "./Instructions.module.css";

export default function Instructions({ currentPoseData, startYoga }) {
  const diffClass = `${currentPoseData.difficulty}`;
  return (
    <div className={styles.instructionsContainer}>
      <h2 className="text-primary">{currentPoseData.name}</h2>
      <div className={styles.diffContainer}>
        <h3 className="text-subheading">Difficulty</h3>
        <button className={`secondary-btn ${styles[diffClass]}`}>
          {currentPoseData.difficulty}
        </button>
      </div>
      <h3 className={`text-primary ${styles.stepsText}`}>Steps</h3>
      <div className={styles.instructionsList}>
        {currentPoseData.instructions.map((instruction, index) => {
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
        <button className="primary-btn" onClick={startYoga}>
          Start Pose
        </button>
        <a href={currentPoseData.refLink} target="_blank">
          <button className="secondary-btn"> Know More</button>
        </a>
      </div>
    </div>
  );
}
