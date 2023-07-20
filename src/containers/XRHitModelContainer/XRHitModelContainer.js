import React, { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrHitModel from "../../components/XRHitModel/XRHitModel";
import * as styles from "./XRHitModelContainer.module.css";
import LoadingScreen from "./LoadingScreen";

const XrHitModelContainer = ({
  modelName,
  modelGender = "female",
  zRotationMul = 0.33,
  scaleMul = 0.3,
  type,
}) => {
  const [isARSupported, setISARSupported] = useState(true);
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [loaded, setLoaded] = useState(false);

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

  async function checkSupport() {
    const immersiveArSupported = await browserHasImmersiveArCompatibility();
    setISARSupported(immersiveArSupported);
  }

  useEffect(() => {
    checkSupport();
    setDimensions({
      width: canvasRef.current?.offsetWidth,
      height: canvasRef.current?.offsetHeight,
    });
  }, []);

  const ViewAR = () => {
    return isARSupported ? (
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
    );
  };

  return (
    <div className={styles.XRContainer} ref={canvasRef}>
      {loaded && <ViewAR />}
      <LoadingScreen
        loaded={loaded}
        setLoaded={setLoaded}
      />
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
          />
        </XR>
      </Canvas>
    </div>
  );
};

export default XrHitModelContainer;
