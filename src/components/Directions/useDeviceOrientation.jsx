import { useState, useEffect } from "react";

const useDeviceOrientation = () => {
  const [deviceOrientation, setDeviceOrientation] = useState({
    alpha: null,
    beta: null,
    gamma: null,
  });

  useEffect(() => {
    const handleDeviceOrientation = (event) => {
      setDeviceOrientation({
        alpha: event.alpha,
        beta: event.beta,
        gamma: event.gamma,
      });
    };

    window.addEventListener("deviceorientation", handleDeviceOrientation);

    return () => {
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, []);

  return deviceOrientation;
};

export default useDeviceOrientation;
