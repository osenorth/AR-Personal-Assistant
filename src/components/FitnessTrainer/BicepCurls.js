import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Pose } from "@mediapipe/pose";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import angleBetweenThreePoints from "../../helpers/Utils";
import bicepCurlsDemo from "../../assets/bicepcurls.gif";
import * as styles from "./FitnessTrainer.module.css";

const BicepCurls = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const countTextbox = useRef(null);

  let count = 0;
  let dir = 0;
  let camera = null;
  let speech = null;

  const speak = (count) => {
    const object = new SpeechSynthesisUtterance(count);
    object.lang = "en-US";
    if (object === 0) {
      speech.speak("Please Start Again");
    } else {
      speech.speak(object);
    }
  };

  useEffect(() => {
    const startTime = new Date();
    const startTimeSec = startTime.getSeconds();

    localStorage.setItem("bicepStartTime", startTimeSec);
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

      const leftHand = [];
      const rightHand = [];

      const righthip = [];
      const lefthip = [];
      const hiparr = [11, 12, 23, 24, 25, 26];

      //index 11,13,15 left hand, angle range 0-5
      //index 12,14,16 right hand, angle range 0-5

      //index 12,24,26 right hip, angle range 60-90
      //index 11,23,25 left hip, angle range 60-90
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

      for (let i = 0; i < 6; i++) {
        let p = hiparr[i];
        let obj = {};
        obj["x"] = position[p].x * width;
        obj["y"] = position[p].y * height;
        if (p % 2 === 0) {
          righthip.push(obj);
        } else {
          lefthip.push(obj);
        }
      }

      const leftHandAngle = Math.round(angleBetweenThreePoints(leftHand));
      const rightHandAngle = Math.round(angleBetweenThreePoints(rightHand));

      const rightHipAngle = Math.round(angleBetweenThreePoints(righthip));
      const leftHipAngle = Math.round(angleBetweenThreePoints(lefthip));

      const canvasElement = canvasRef.current;
      const canvasCtx = canvasElement.getContext("2d");
      canvasCtx.save();
      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      //canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height)

      let inRangeRightHand;
      if (rightHandAngle <= 20) {
        inRangeRightHand = true;
      } else {
        inRangeRightHand = false;
      }

      let inRangeLeftHand;
      if (leftHandAngle <= 20) {
        inRangeLeftHand = true;
      } else {
        inRangeLeftHand = false;
      }

      let inRangeRightHip;
      if (rightHipAngle >= 170 && rightHipAngle <= 180) {
        inRangeRightHip = true;
      } else {
        inRangeRightHip = false;
      }

      let inRangeLeftHip;
      if (leftHipAngle >= 170 && leftHipAngle <= 180) {
        inRangeLeftHip = true;
      } else {
        inRangeLeftHip = false;
      }

      for (let i = 0; i < 2; i++) {
        canvasCtx.beginPath();
        canvasCtx.lineWidth = 8;

        //right hand
        canvasCtx.moveTo(rightHand[i].x, rightHand[i].y);
        canvasCtx.lineTo(rightHand[i + 1].x, rightHand[i + 1].y);
        if (inRangeRightHand) {
          canvasCtx.strokeStyle = "green";
        } else {
          canvasCtx.strokeStyle = "red";
        }
        canvasCtx.stroke();

        //lefthand
        canvasCtx.beginPath();
        canvasCtx.moveTo(leftHand[i].x, leftHand[i].y);
        canvasCtx.lineTo(leftHand[i + 1].x, leftHand[i + 1].y);
        if (inRangeLeftHand) {
          canvasCtx.strokeStyle = "green";
        } else {
          canvasCtx.strokeStyle = "red";
        }
        canvasCtx.stroke();

        //right hip
        canvasCtx.beginPath();
        canvasCtx.moveTo(righthip[i].x, righthip[i].y);
        canvasCtx.lineTo(righthip[i + 1].x, righthip[i + 1].y);
        if (inRangeRightHip) {
          canvasCtx.strokeStyle = "green";
        } else {
          canvasCtx.strokeStyle = "red";
        }
        canvasCtx.stroke();

        //left hip
        canvasCtx.beginPath();
        canvasCtx.moveTo(lefthip[i].x, lefthip[i].y);
        canvasCtx.lineTo(lefthip[i + 1].x, lefthip[i + 1].y);
        if (inRangeLeftHip) {
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
        //right hip
        canvasCtx.arc(righthip[i].x, righthip[i].y, 8, 0, Math.PI * 2);
        //left hip
        canvasCtx.arc(lefthip[i].x, lefthip[i].y, 8, 0, Math.PI * 2);

        canvasCtx.fillStyle = "#AAFF00";
        canvasCtx.fill();
      }

      if (
        inRangeLeftHand === true &&
        inRangeRightHand === true &&
        inRangeRightHip === true &&
        inRangeLeftHip === true
      ) {
        if (dir === 0) {
          count = count + 1;
          speak(count);
          dir = 1;
        }
      }

      if (
        !(
          inRangeLeftHand === true &&
          inRangeRightHand === true &&
          inRangeRightHip === true &&
          inRangeLeftHip === true
        )
      ) {
        dir = 0;
      }

      canvasCtx.font = "20px DM Sans";
      canvasCtx.fillText(leftHandAngle, leftHand[1].x + 20, leftHand[1].y + 20);
      canvasCtx.fillText(
        rightHandAngle,
        rightHand[1].x - 120,
        rightHand[1].y + 20
      );

      canvasCtx.fillText(leftHipAngle, lefthip[1].x + 20, lefthip[1].y + 20);
      canvasCtx.fillText(leftHipAngle, lefthip[1].x - 120, lefthip[1].y + 20);

      canvasCtx.restore();
    }
  }

  useEffect(() => {
    const pose = new Pose({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
      },
    });
    pose.setOptions({
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
  }

  return (
    <div className={styles.workoutContainer}>
      <div className={styles.cameraContainer}>
        <Webcam ref={webcamRef} className={styles.webcamContainer} />
        <canvas ref={canvasRef} className={styles.canvasContainer} />
      </div>
      <div className={styles.resultsContainer}>
        <h4 className={`text-primary ${styles.workoutTitle}`}>Bicep Curls</h4>
        <div className={styles.demoContainer}>
          <Image
            src={bicepCurlsDemo}
            alt="bicepcurls-demo"
            className={styles.demoImage}
          />
        </div>
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

export default BicepCurls;
