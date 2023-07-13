import React, { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrHitModel from "../../components/XRHitModel/XRHitModel";
import * as styles from "./XRHitModelContainer.module.css";

const XrHitModelContainer = ({
  modelName,
  modelGender = "female",
  zRotationMul = 0.33,
  scaleMul = 0.3,
  type,
  zPos,
}) => {
  const [isARSupported, setISARSupported] = useState(true);
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

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
    setDimensions({
      width: canvasRef.current?.offsetWidth,
      height: canvasRef.current?.offsetHeight,
    });
  }, []);

  return (
    <div className={styles.XRContainer} ref={canvasRef}>
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
            modelGender={modelGender}
            zRotationMul={zRotationMul}
            scaleMul={
              (scaleMul * Math.max(dimensions.width, dimensions.height)) / 600
            }
            type={type}
            zPos={zPos}
          />
        </XR>
      </Canvas>
    </div>
  );
};

export default XrHitModelContainer;
