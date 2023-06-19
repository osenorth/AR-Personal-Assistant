import React, { useState, useCallback, useRef } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import MapAI from "./MapAI";
import * as styles from "./Direction.module.css";
import { GiPathDistance } from "react-icons/gi";
import { ImLocation } from "react-icons/im";
import { MdOutlineClear } from "react-icons/md";
import { Box, ButtonGroup, Button, TextField } from "@mui/material";
import AssistantDirectionIcon from "@mui/icons-material/AssistantDirection";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 28.570690510749024,
  lng: 77.19824676484188,
};

export default function ({ mapState, updateMapState, toggleComponent }) {
  const { travelMode, direction, distance, duration, message } = mapState;
  const originRef = useRef();
  const destinationRef = useRef();
  const [map, setMap] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
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
    updateMapState({
      start: originRef.current.value,
      destination: destinationRef.current.value,
    });
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
        travelMode: google.maps.TravelMode[`${travelMode}`],
      });
      updateMapState({
        direction: results,
        distance: results.routes[0].legs[0].distance.text,
        duration: results.routes[0].legs[0].duration.text,
      });
    } catch (e) {
      updateMapState({
        message: "No Possible Route from Location and Destination.",
      });
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

  const handleTravelModeChange = (mode) => {
    updateMapState({
      travelMode: mode,
    });
    setShowOptions(false);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        zoomControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
    >
      <Marker position={center} />
      {direction && <DirectionsRenderer directions={direction} />}
      <Box className={styles.navigationModal}>
        <div className={styles.inputs}>
          <div className={styles.textinput}>
            <Autocomplete>
              <TextField
                label={"start"}
                inputRef={originRef}
                placeholder="Your Location"
                defaultValue={mapState.start}
                sx={{
                  margin: "5px",
                }}
              />
            </Autocomplete>
            <Autocomplete>
              <TextField
                label="end"
                inputRef={destinationRef}
                placeholder="Your Destination"
                defaultValue={mapState.destination}
                sx={{
                  margin: "5px",
                }}
              />
            </Autocomplete>
          </div>
          {direction ? (
            <>
              <div onClick={clearRoute}>
                <MdOutlineClear className={styles.navigate} />
              </div>
            </>
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
        <Box>
          {showOptions && (
            <ButtonGroup>
              {["DRIVING", "TRANSIT", "WALKING", "BICYCLING"].map((mode) => (
                <Button
                  sx={{
                    backgroundColor: "blue",
                    color: "white",
                    "&:hover": { color: "blue" },
                  }}
                  key={mode}
                  onClick={() => handleTravelModeChange(mode)}
                >
                  {mode}
                </Button>
              ))}
            </ButtonGroup>
          )}
          {!showOptions && (
            <Button
              sx={{
                backgroundColor: "blue",
                color: "white",
                "&:hover": { color: "blue" },
              }}
              onClick={() => setShowOptions(!showOptions)}
            >
              {travelMode}
            </Button>
          )}
        </Box>
      </Box>
      {mapState.start != "" && mapState.destination != "" ? (
        <>
          <Box
            className={styles.navigateAR}
            sx={{
              fontSize: 64,
            }}
          >
            <AssistantDirectionIcon onClick={toggleComponent} />
          </Box>
          <MapAI mapState={mapState} />
        </>
      ) : (
        <></>
      )}
    </GoogleMap>
  ) : (
    <>Loading</>
  );
}
