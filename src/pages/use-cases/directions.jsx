import { useState, useEffect } from "react";
import Map from "../../components/Directions/Map";
import useDeviceOrientation from "../../components/Directions/useDeviceOrientation";
import CameraScreen from "../../components/Directions/CameraScreen";

export default function () {
  const {  beta } = useDeviceOrientation();
  const isGround = () => {
    if (beta > -90 && beta < 60) {
      return true;
    } else {
      return false;
    }
  };
  const [mapState, setMapState] = useState({
    start: "",
    destination: "",
    direction: null,
    distance: "",
    duration: "",
    message: "Please Enter Your Location and Destination to Navigate",
  });

  const updateMapState = (newState) => {
    setMapState((prevState) => ({ ...prevState, ...newState }));
  };
  return (
    <div>
      {isGround() ? (
        <Map mapState={mapState} updateMapState={updateMapState} />
      ) : (
        <CameraScreen />
      )}
    </div>
  );
}
