import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Pose } from "@mediapipe/pose";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import { angleBetweenThreePoints } from "../../helpers/Utils";
import * as styles from "./FitnessTrainer.module.css";

const Crunches = () => {
  const exrInfo = {
    crunches: {
      index: [12, 24, 26],
      ul: 130,
      ll: 50,
    },
  };

  let count = 0;
  let dir = 0;
  let angle = 0;
  let speech = null;
  let camera = null;

  const speak = (count) => {
    const object = new SpeechSynthesisUtterance(count);
    object.lang = "en-US";
    speech.speak(object);
  };

  // Get Time
  useEffect(() => {
    const startTime = new Date();
    const startTimeSec = startTime.getSeconds();

    localStorage.setItem("crunchesStartTime", startTimeSec);
    speech = window.speechSynthesis;

    const handleRouteChange = () => {
      if (camera) camera.stop();
    };
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const countTextbox = useRef(null);

  function onResult(results) {
    if (results.poseLandmarks) {
      const position = results.poseLandmarks;

      // set height and width of canvas
      canvasRef.current.width = webcamRef.current.video.videoWidth;
      canvasRef.current.height = webcamRef.current.video.videoHeight;

      const width = canvasRef.current.width;
      const height = canvasRef.current.height;

      //ratios between 0-1, covert them to pixel positions
      const upadatedPos = [];
      const indexArray = exrInfo.crunches.index;

      for (let i = 0; i < 3; i += 1) {
        upadatedPos.push({
          x: position[indexArray[i]].x * width,
          y: position[indexArray[i]].y * height,
        });
      }

      angle = Math.round(angleBetweenThreePoints(upadatedPos));

      // Count reps
      // 0 is down, 1 is up
      if (angle > exrInfo.crunches.ul) {
        if (dir === 0) {
          dir = 1;
        }
      }
      if (angle < exrInfo.crunches.ll) {
        if (dir === 1) {
          count = count + 1;
          speak(count);
          dir = 0;
        }
      }

      //console.log(count.current)
      const canvasElement = canvasRef.current;
      const canvasCtx = canvasElement.getContext("2d");
      canvasCtx.save();

      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      //canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height)

      for (let i = 0; i < 2; i++) {
        canvasCtx.beginPath();
        canvasCtx.moveTo(upadatedPos[i].x, upadatedPos[i].y);
        canvasCtx.lineTo(upadatedPos[i + 1].x, upadatedPos[i + 1].y);
        canvasCtx.lineWidth = 2;
        canvasCtx.strokeStyle = "white";
        canvasCtx.stroke();
      }
      for (let i = 0; i < 3; i++) {
        canvasCtx.beginPath();
        canvasCtx.arc(upadatedPos[i].x, upadatedPos[i].y, 10, 0, Math.PI * 2);
        canvasCtx.fillStyle = "#AAFF00";
        canvasCtx.fill();
      }
      canvasCtx.font = "20px DM Sans";
      canvasCtx.fillText(angle, upadatedPos[1].x + 10, upadatedPos[1].y + 40);
      canvasCtx.restore();
    }
  }

  useEffect(() => {
    count = 0;
    dir = 0;

    const pose = new Pose({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
      },
    });
    pose.setOptions({
      selfieMode: true,
      modelComplexity: 1,
      smoothLandmarks: true,
      minDetectionConfidence: 0.6,
      minTrackingConfidence: 0.5,
    });

    pose.onResults(onResult);

    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      camera = new cam.Camera(webcamRef.current.video, {
        onFrame: async () => {
          if (countTextbox?.current?.value) countTextbox.current.value = count;
          if (webcamRef?.current?.video)
            await pose.send({ image: webcamRef.current.video });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }
  });

  function resetCount() {
    count = 0;
    dir = 0;
  }

  return (
    <div className={styles.workoutContainer}>
      <div className={styles.cameraContainer}>
        <Webcam ref={webcamRef} className={styles.webcamContainer} />
        <canvas ref={canvasRef} className={styles.canvasContainer} />
      </div>
      <div className={styles.resultsContainer}>
        <h4 className={`text-primary ${styles.workoutTitle}`}>Crunches</h4>
        <iframe
          title="Crunches"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking="true"
          execution-while-out-of-viewport="true"
          execution-while-not-rendered="true"
          web-share="true"
          src="https://sketchfab.com/models/6132a41bc3d7442ea330fd4c26c0c217/embed?autostart=1&dnt=1"
          className={styles.modelContrainer}
        ></iframe>
        <div className={styles.countSettings}>
          <div className={styles.countDisplay}>
            <p className="text-subheading">Count</p>
            <input
              defaultValue="0"
              ref={countTextbox}
              className={styles.countInput}
            />
            <button
              className={`primary-btn ${styles.controlButtons}`}
              onClick={resetCount}
            >
              Reset
            </button>
          </div>
          <div className={styles.countControls}>
            <Link
              href="/workouts"
              className={styles.link}
              onClick={() => camera.stop()}
            >
              <button className={`primary-btn ${styles.controlButtons}`}>
                Explore More Workouts
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crunches;
