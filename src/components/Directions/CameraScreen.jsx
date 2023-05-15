import React, { useState, useRef } from "react";
import Webcam from "react-webcam";

export default function () {
  const webcamRef = useRef(null);
  return (
    <div>
      <Webcam ref={webcamRef} audio={false} facingMode="environment"/>
    </div>
  );
}
