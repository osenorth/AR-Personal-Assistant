import React, { useState, useCallback, useRef } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import * as styles from "./Direction.module.css";
import { GiPathDistance } from "react-icons/gi";
import { MdOutlineClear } from "react-icons/md";
import { ImLocation } from "react-icons/im";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 28.570690510749024,
  lng: 77.19824676484188,
};

export default function ({ mapState, updateMapState }) {
  const { start, destination, direction, distance, duration, message } =
    mapState;
  const originRef = useRef();
  const destinationRef = useRef();
  const [map,setMap] = useState(null); 
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_CLOUD_API_KEY,
    libraries: ["places"],
  });

  const onLoad = useCallback((map) => {
    setMap(map);
    map.setZoom(15);
  }, []);

  const onUnmount = useCallback((map) => {
    setMap(null);
  }, []);

  const calculateRoute = async () => {
    if (originRef.current.value == "" || destinationRef.current.value == "") {
      updateMapState({
        message: "No Possible Route from Location and Destination.",
      });
      return;
    }
    const directionService = new google.maps.DirectionsService();
    try {
      const results = await directionService.route({
        origin: originRef.current.value,
        destination: destinationRef.current.value,
        travelMode: google.maps.TravelMode.DRIVING,
      });
      updateMapState({
        direction: results,
        distance: results.routes[0].legs[0].distance.text,
        duration: results.routes[0].legs[0].duration.text,
      });
    } catch (e) {
      setMessage("No Possible Route from Location and Destination.");
      console.log(e);
    }
  };

  const clearRoute = async () => {
    updateMapState({
      distance: "",
      direction: null,
      duration: "",
    });
    originRef.current.value = "";
    destinationRef.current.value = "";
  };
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
      {direction && <DirectionsRenderer directions={direction} />}
      <div className={styles.navigationModal}>
        <div className={styles.inputs}>
          <Autocomplete>
            <input
              type="text"
              value={start}
              onChange={(e) => updateMapState({
                start: e.target.value 
              })}
              ref={originRef}
              placeholder={"Your Location"}
            />
          </Autocomplete>
          <Autocomplete>
            <input
              type="text"
              value={destination}
              onChange={(e) => updateMapState({
                destination: e.target.value 
              })}
              ref={destinationRef}
              placeholder={"Your Destination"}
            />
          </Autocomplete>
          {direction ? (
            <div onClick={clearRoute}>
              <MdOutlineClear className={styles.navigate} />
            </div>
          ) : (
            <div onClick={calculateRoute}>
              <GiPathDistance className={styles.navigate} />
            </div>
          )}
        </div>
        {direction ? (
          <div className={styles.info}>
            <div>Distance : {distance}</div>
            <div>Duration : {duration}</div>
          </div>
        ) : (
          <>{message}</>
        )}
        <ImLocation
          className={styles.panBack}
          onClick={() => {
            map.panTo(center);
            map.setZoom(15);
          }}
        />
      </div>
    </GoogleMap>
  ) : (
    <>Loading</>
  );
}
