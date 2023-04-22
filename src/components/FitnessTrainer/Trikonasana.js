import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Pose } from "@mediapipe/pose";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import angleBetweenThreePoints from "../../helpers/Utils";
import * as styles from "./FitnessTrainer.module.css";

const Trikonasana = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  let camera = null;

  var t = new Date().getTime();
  let speech = null;

  const speak = (count) => {
    const object = new SpeechSynthesisUtterance(count);
    object.lang = "en-US";
    speech.speak(object);
  };

  useEffect(() => {
    speech = window.speechSynthesis;

    const handleRouteChange = () => {
      if (camera) camera.stop();
    };
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  function onResult(results) {
    if (results.poseLandmarks) {
      const position = results.poseLandmarks;
      canvasRef.current.width = webcamRef.current.video.videoWidth;
      canvasRef.current.height = webcamRef.current.video.videoHeight;

      const width = canvasRef.current.width;
      const height = canvasRef.current.height;

      // index 12,14,16 11,13,15, range 125,145
      const leftHand = [];
      const rightHand = [];
      for (let i = 11; i < 17; i++) {
        let obj = {};
        obj["x"] = position[i].x * width;
        obj["y"] = position[i].y * height;
        if (i % 2 === 0) {
          rightHand.push(obj);
        } else {
          leftHand.push(obj);
        }
      }

      // index 12,24,26, range 125,145
      const back = [];
      const indexBack = [12, 24, 26];
      for (let i = 0; i < 3; i++) {
        let obj = {};
        obj["x"] = position[indexBack[i]].x * width;
        obj["y"] = position[indexBack[i]].y * height;
        back.push(obj);
      }

      const angleBack = Math.round(angleBetweenThreePoints(back));
      const angleLeftHand = Math.round(angleBetweenThreePoints(leftHand));
      const angleRightHand = Math.round(angleBetweenThreePoints(rightHand));

      let inRangeBack;
      let inRangeLeftHand;
      let inRangeRightHand;
      if (angleBack >= 120 && angleBack <= 140) {
        inRangeBack = true;
      } else {
        inRangeBack = false;
      }
      if (angleLeftHand >= 165 && angleLeftHand <= 195) {
        inRangeLeftHand = true;
      } else {
        inRangeLeftHand = false;
      }
      if (angleRightHand >= 165 && angleRightHand <= 195) {
        inRangeRightHand = true;
      } else {
        inRangeRightHand = false;
      }

      const canvasElement = canvasRef.current;
      const canvasCtx = canvasElement.getContext("2d");
      canvasCtx.save();
      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      //canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height)

      for (let i = 0; i < 2; i++) {
        canvasCtx.beginPath();
        canvasCtx.lineWidth = 8;

        canvasCtx.moveTo(back[i].x, back[i].y);
        canvasCtx.lineTo(back[i + 1].x, back[i + 1].y);
        if (inRangeBack) {
          canvasCtx.strokeStyle = "green";
        } else {
          canvasCtx.strokeStyle = "red";
        }
        canvasCtx.stroke();

        canvasCtx.beginPath();
        canvasCtx.moveTo(leftHand[i].x, leftHand[i].y);
        canvasCtx.lineTo(leftHand[i + 1].x, leftHand[i + 1].y);
        if (inRangeLeftHand) {
          canvasCtx.strokeStyle = "green";
        } else {
          canvasCtx.strokeStyle = "red";
        }
        canvasCtx.stroke();

        canvasCtx.beginPath();
        canvasCtx.moveTo(rightHand[i].x, rightHand[i].y);
        canvasCtx.lineTo(rightHand[i + 1].x, rightHand[i + 1].y);
        if (inRangeRightHand) {
          canvasCtx.strokeStyle = "green";
        } else {
          canvasCtx.strokeStyle = "red";
        }
        canvasCtx.stroke();
      }

      for (let i = 0; i < 3; i++) {
        canvasCtx.beginPath();
        //right hand
        canvasCtx.arc(rightHand[i].x, rightHand[i].y, 8, 0, Math.PI * 2);
        //left hand
        canvasCtx.arc(leftHand[i].x, leftHand[i].y, 8, 0, Math.PI * 2);
        canvasCtx.fillStyle = "#AAFF00";
        canvasCtx.fill();

        canvasCtx.beginPath();
        canvasCtx.arc(back[i].x, back[i].y, 8, 0, Math.PI * 2);
        canvasCtx.fillStyle = "#AAFF00";
        canvasCtx.fill();
      }

      if (!(inRangeBack && inRangeLeftHand && inRangeRightHand)) {
        t = new Date().getTime();
      }

      // canvasCtx.fillStyle = "green";
      canvasCtx.font = "20px DM Sans";
      canvasCtx.fillText(angleLeftHand, leftHand[1].x + 20, leftHand[1].y + 20);
      canvasCtx.fillText(
        angleRightHand,
        rightHand[1].x - 120,
        rightHand[1].y + 20
      );
      canvasCtx.fillText(angleBack, back[1].x, back[1].y + 40);

      canvasCtx.fillStyle = "#458ff6";
      canvasCtx.fillRect(0, 0, 200, 50);
      canvasCtx.fillStyle = "white";
      canvasCtx.font = "20px DM Sans";

      const timer = canvasCtx.fillText(
        "Seconds holded: ".concat(
          String(Math.round((new Date().getTime() - t) / 1000))
        ),
        10,
        40
      );

      canvasCtx.restore();
      speak(timer);
    }
  }

  useEffect(() => {
    const pose = new Pose({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
      },
    });
    pose.setOptions({
      selfieMode: true,
      modelComplexity: 1,
      smoothLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    pose.onResults(onResult);

    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      camera = new cam.Camera(webcamRef.current.video, {
        onFrame: async () => {
          if (webcamRef?.current?.video)
            await pose.send({ image: webcamRef.current.video });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }
  });

  return (
    <div className={styles.workoutContainer}>
      <div className={styles.cameraContainer}>
        <Webcam ref={webcamRef} className={styles.webcamContainer} />
        <canvas ref={canvasRef} className={styles.canvasContainer} />
      </div>
      <div className={styles.resultsContainer}>
        <div>
          <h4 className={`text-subheading ${styles.workoutTitle}`}>
            Try to mimic this posture to perform
          </h4>
          <h4 className={`text-primary ${styles.workoutTitle}`}>Trikonasana</h4>
        </div>
        <iframe
          title="Trikonasana"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking="true"
          execution-while-out-of-viewport="true"
          execution-while-not-rendered="true"
          web-share="true"
          src="https://sketchfab.com/models/d918634a622a48518766575ebbc21cec/embed?autostart=1&dnt=1"
          className={styles.modelContrainer}
        ></iframe>
        <div className={styles.countControls}>
          <Link
            href="/yoga"
            className={styles.link}
            onClick={() => camera.stop()}
          >
            <button className={`primary-btn ${styles.controlButtons}`}>
              Explore More Yoga
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Trikonasana;
