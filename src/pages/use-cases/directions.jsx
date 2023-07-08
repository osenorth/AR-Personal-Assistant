import { useState, useEffect } from "react";
import Map from "../../components/Directions/Map";
import { useRef, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import { CharacterAnimationsProvider } from "../../helpers/Animations";
import XrHitMap from "./direction/xrhitmap";
import Interface from "../../components/Directions/Interface";

export default function () {
  const [mapState, setMapState] = useState({
    start: "",
    destination: "",
    travelMode: "DRIVING",
    direction: null,
    distance: "",
    duration: "",
    message: "Please Enter Your Location and Destination to Navigate",
  });

  const [activeComponent, setActiveComponent] = useState("map");

  const updateMapState = (newState) => {
    setMapState((prevState) => ({ ...prevState, ...newState }));
  };

  const toggleComponent = () => {
    setActiveComponent((prevComponent) =>
      prevComponent === "map" ? "camera" : "map"
    );
  };

  const [overlayContent, setOverlayContent] = useState(null);
  const interfaceRef = useCallback((node) => {
    if (node != null) {
      setOverlayContent(node);
    }
  });

  return (
    <div>
      {activeComponent === "map" ? (
        <Map
          mapState={mapState}
          updateMapState={updateMapState}
          toggleComponent={toggleComponent}
        />
      ) : (
        // <CameraScreen mapState={mapState} toggleComponent={toggleComponent}/>
        <>
          {/* <CharacterAnimationsProvider> */}
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
            <Interface
              ref={interfaceRef}
              mapState={mapState}
              toggleComponent={toggleComponent}
            />
          {/* </CharacterAnimationsProvider> */}
        </>
      )}
    </div>
  );
}
