import "@google/model-viewer";
import React, { useState, useRef, useEffect } from "react";
import * as styles from "./ModuleViewer.module.css";

const ModelViewer = ({
  modelName,
  modelGender,
  type,
  position,
  rotatedModel,
}) => {
  const modelRef = useRef(null);
  // let cameraTarget = position;

  // useEffect(() => {
  //   if (modelRef?.current) {
  //     const status = modelRef.current.getAttribute("ar-status");

  //     if (status === "not-presenting") {
  //       cameraTarget = position;
  //     }
  //   }
  // }, [modelRef?.current]);

  return (
    <div className={styles.XRContainer}>
      <model-viewer
        orientation={
          rotatedModel ? "0 0 50deg" : type === "yoga" ? "0 0 25deg" : "0 0 0"
        }
        ref={modelRef}
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        poster="poster.webp"
        exposure="2"
        environment-image={
          "https://cdn.polyhaven.com/asset_img/primary/wrestling_gym.png?height=780"
        }
        skybox-image={
          "https://cdn.polyhaven.com/asset_img/primary/wrestling_gym.png?height=780"
        }
        shadow-intensity={type === "yoga" ? "0" : "1"}
        autoplay
        // cameraTarget={cameraTarget}
        src={`/models/${modelGender}/${modelName}.glb`}
      >
        <div
          className={`${styles.progressBar}${styles.hide}`}
          slot="progress-bar"
        >
          <div className={styles.updateBar}></div>
        </div>
        <button
          slot="ar-button"
          id="ar-button"
          className={styles.arButton}
          onClick={() => handleARParams()}
        >
          View AR
        </button>
        <button slot="ar-failure" id="ar-failure" className={styles.arButton}>
          Try AR mode on mobile using Chrome
        </button>
        <div id="ar-prompt">
          <img src="https://modelviewer.dev/shared-assets/icons/hand.png" />
        </div>
      </model-viewer>
    </div>
  );
};

export default ModelViewer;
