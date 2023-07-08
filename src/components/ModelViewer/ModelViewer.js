import "@google/model-viewer";
import React, { useState, useEffect } from "react";
import * as styles from "./ModuleViewer.module.css";

const ModelViewer = ({
  modelName,
  modelGender,
  zRotationMul,
  scaleMul,
  type,
  rotatedModel,
  scaledModel,
}) => {
  return (
    <div className={styles.XRContainer}>
      <model-viewer
        orientation={
          rotatedModel ? "0 0 50deg" : type === "yoga" ? "0 0 25deg" : "0 0 0"
        }
        scale="40 40 40"
        // ref={modelRef}
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        poster="poster.webp"
        shadow-intensity={type === "yoga" ? "0" : "1"}
        autoplay
        camera-target={
          modelGender === "female" || type === "yoga" || scaledModel
            ? "0m 100m 0m"
            : "0m 1000m 0m"
        }
        src={`/models/${modelGender}/${modelName}.glb`}
      >
        <div
          className={`${styles.progressBar}${styles.hide}`}
          slot="progress-bar"
        >
          <div className={styles.updateBar}></div>
        </div>
        <button slot="ar-button" className={styles.arButton}>
          View AR
        </button>

        <div id="ar-prompt">
          <img src="https://modelviewer.dev/shared-assets/icons/hand.png" />
        </div>
      </model-viewer>
    </div>
  );
};

export default ModelViewer;
