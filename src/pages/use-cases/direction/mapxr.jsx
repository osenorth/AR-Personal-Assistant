import { useRef, useCallback, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import { CharacterAnimationsProvider } from "./Animations";
import XrHitMap from "./xrhitmap";
import Interface from "../../../components/Directions/Interface";
const mapXR = () => {
  const [overlayContent, setOverlayContent] = useState(null);
  const interfaceRef = useCallback((node) => {
    if (node != null) {
      setOverlayContent(node);
    }
  });
  return (
    <>
      <CharacterAnimationsProvider>
        <ARButton
          sessionInit={{
            requiredFeatures: ["hit-test"],
            optionalFeatures: ["dom-overlay"],
            domOverlay: { root: overlayContent },
          }}
        />
        <Canvas className="map-canvas">
          <XR>
            <XrHitMap />
          </XR>
        </Canvas>
        <Interface ref={interfaceRef} />
      </CharacterAnimationsProvider>
    </>
  );
};

export default mapXR;
