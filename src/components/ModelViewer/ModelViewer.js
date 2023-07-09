import "@google/model-viewer";
import React, { useState, useRef, useEffect } from "react";
import * as styles from "./ModuleViewer.module.css";

const ModelViewer = ({
  modelName,
  modelGender,
  type,
  position,
  rotatedModel,
  // scaledModel,
}) => {
  console.log("top-position", position);
  const modelRef = useRef(null);
  let cameraTarget = position;
  const [scale, setScale] = useState(1);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);

  useEffect(() => {
    if (modelRef?.current) {
      const status = modelRef.current.getAttribute("ar-status");
      console.log(status);

      if (status === "not-presenting") {
        cameraTarget = position;
        setScale("40 40 40");
      } else {
        // console.log("ar");
        cameraTarget = "0.00001545m -10m -10m";
        setScale("1 1 1");
      }
    }
  }, [modelRef?.current]);

  const handleARParams = () => {
    // cameraTarget = "0.00001545m -10m -10m";
    // setScale("1 1 1");
  };

  console.log(cameraTarget, scale);

  return (
    <div className={styles.XRContainer}>
      X
      <input
        type="number"
        value={x}
        onChange={(event) => setX(event.target.value)}
      />
      Y
      <input
        type="number"
        value={y}
        onChange={(event) => setY(event.target.value)}
      />
      Z
      <input
        type="number"
        value={z}
        onChange={(event) => setZ(event.target.value)}
      />
      scale
      <input
        type="number"
        value={scale}
        onChange={(event) => setScale(event.target.value)}
      />
      <model-viewer
        orientation={
          rotatedModel ? "0 0 50deg" : type === "yoga" ? "0 0 25deg" : "0 0 0"
        }
        scale={`${scale} ${scale} ${scale}`}
        ref={modelRef}
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        poster="poster.webp"
        shadow-intensity={type === "yoga" ? "0" : "1"}
        autoplay
        // camera-target="0m -3m -3m" // female
        camera-target={`${x}m ${y}m ${z}m`} // male
        // camera-target={cameraTarget}
        src={`/models/${modelGender}/${modelName}.glb`}
        // skybox-image="/src/assets/gym_4k.hdr"
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
