import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrHitModel from "../../components/XRHitModel/XRHitModel";
import * as styles from "./XRHitModelContainer.module.css";

const XrHitModelContainer = ({ modelName, zRotationMul, scaleMul }) => {
  const [isARSupported, setISARSupported] = useState(true);

  async function browserHasImmersiveArCompatibility() {
    if (window.navigator.xr) {
      const isSupported = await navigator.xr.isSessionSupported("immersive-ar");
      console.info(
        `[AR-Support] ${
          isSupported
            ? "Browser supports immersive-ar"
            : "Browser does not support immersive-ar"
        }`
      );
      return isSupported;
    }
    return false;
  }

  async function start() {
    const immersiveArSupported = await browserHasImmersiveArCompatibility();
    setISARSupported(immersiveArSupported);
  }

  useEffect(() => {
    start();
  }, []);

  return (
    <div className={styles.XRContainer}>
      {isARSupported ? (
        <ARButton
          sessionInit={{
            requiredFeatures: ["hit-test"],
          }}
          className={styles.arButton}
        />
      ) : (
        <button className={styles.arButton}>
          Try AR mode on mobile using chrome
        </button>
      )}
      <Canvas>
        <XR>
          <XrHitModel
            modelName={modelName}
            zRotationMul={zRotationMul}
            scaleMul={scaleMul}
          />
        </XR>
      </Canvas>
    </div>
  );
};

export default XrHitModelContainer;
