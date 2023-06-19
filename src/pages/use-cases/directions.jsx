import { useState, useEffect } from "react";
import Map from "../../components/Directions/Map";
import CameraScreen from "../../components/Directions/CameraScreen";

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

  return (
    <div>
      {activeComponent === "map" ? (
        <Map mapState={mapState} updateMapState={updateMapState} toggleComponent={toggleComponent} />
      ) : (
        <CameraScreen mapState={mapState} toggleComponent={toggleComponent}/>
      )}
    </div>
  );
}
