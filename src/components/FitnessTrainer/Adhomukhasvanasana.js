import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Pose } from "@mediapipe/pose";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import angleBetweenThreePoints from "../../helpers/Utils";
import * as styles from "./FitnessTrainer.module.css";

const Adhomukhasvanasana = () => {
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
      console.log("Going Back");
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
      const leftLeg = [];
      const rightLeg = [];
      const righthip = [];
      const lefthip = [];
      const hiparr = [11, 12, 23, 24, 25, 26];

      //index 11,13,15 left hand, angle range 0-5
      //index 12,14,16 right hand, angle range 0-5
      //index 23,25,27 left leg, angle range 0-5
      //index 24,26,28 right leg, angle range 0-5
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
      for (let i = 23; i < 29; i++) {
        let obj = {};
        obj["x"] = position[i].x * width;
        obj["y"] = position[i].y * height;
        if (i % 2 === 0) {
          rightLeg.push(obj);
        } else {
          leftLeg.push(obj);
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
      const leftLegAngle = Math.round(angleBetweenThreePoints(leftLeg));
      const rightLegAngle = Math.round(angleBetweenThreePoints(rightLeg));
      const rightHipAngle = Math.round(angleBetweenThreePoints(righthip));
      const leftHipAngle = Math.round(angleBetweenThreePoints(lefthip));

      const canvasElement = canvasRef.current;
      const canvasCtx = canvasElement.getContext("2d");
      canvasCtx.save();
      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      //canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height)

      let inRangeRightHand;
      if (rightHandAngle >= 160 && rightHandAngle <= 180) {
        inRangeRightHand = true;
      } else {
        inRangeRightHand = false;
      }

      let inRangeLeftHand;
      if (leftHandAngle >= 160 && leftHandAngle <= 180) {
        inRangeLeftHand = true;
      } else {
        inRangeLeftHand = false;
      }

      let inRangeRightLeg;
      if (rightLegAngle >= 160 && rightLegAngle <= 180) {
        inRangeRightLeg = true;
      } else {
        inRangeRightLeg = false;
      }

      let inRangeLeftLeg;
      if (leftLegAngle >= 160 && leftLegAngle <= 180) {
        inRangeLeftLeg = true;
      } else {
        inRangeLeftLeg = false;
      }

      let inRangeRightHip;
      if (rightHipAngle >= 60 && rightHipAngle <= 90) {
        inRangeRightHip = true;
      } else {
        inRangeRightHip = false;
      }

      let inRangeLeftHip;
      if (leftHipAngle >= 60 && leftHipAngle <= 90) {
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

        //right leg
        canvasCtx.beginPath();
        canvasCtx.moveTo(rightLeg[i].x, rightLeg[i].y);
        canvasCtx.lineTo(rightLeg[i + 1].x, rightLeg[i + 1].y);
        if (inRangeRightLeg) {
          canvasCtx.strokeStyle = "green";
        } else {
          canvasCtx.strokeStyle = "red";
        }
        canvasCtx.stroke();

        //left leg
        canvasCtx.beginPath();
        canvasCtx.moveTo(leftLeg[i].x, leftLeg[i].y);
        canvasCtx.lineTo(leftLeg[i + 1].x, leftLeg[i + 1].y);
        if (inRangeLeftLeg) {
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
        //right leg
        canvasCtx.arc(rightLeg[i].x, rightLeg[i].y, 8, 0, Math.PI * 2);
        //left leg
        canvasCtx.arc(leftLeg[i].x, leftLeg[i].y, 8, 0, Math.PI * 2);

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
        !(
          inRangeRightLeg &&
          inRangeLeftLeg &&
          inRangeLeftHand &&
          inRangeRightHand &&
          inRangeRightHip &&
          inRangeLeftHip
        )
      ) {
        t = new Date().getTime();
      }

      canvasCtx.font = "20px DM Sans";
      canvasCtx.fillText(leftHandAngle, leftHand[1].x + 20, leftHand[1].y + 20);
      canvasCtx.fillText(
        rightHandAngle,
        rightHand[1].x - 120,
        rightHand[1].y + 20
      );
      canvasCtx.fillText(leftLegAngle, leftLeg[1].x + 20, leftLeg[1].y + 20);
      canvasCtx.fillText(
        rightLegAngle,
        rightLeg[1].x - 120,
        rightLeg[1].y + 20
      );
      canvasCtx.fillText(leftHipAngle, lefthip[1].x + 20, lefthip[1].y + 20);
      canvasCtx.fillText(leftHipAngle, lefthip[1].x - 120, lefthip[1].y + 20);

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
      return timer;
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
          <h4 className={`text-primary ${styles.workoutTitle}`}>
            Adho Mukha Svanasana
          </h4>
        </div>
        <iframe
          title="Adho Mukha Svanasana"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking="true"
          execution-while-out-of-viewport="true"
          execution-while-not-rendered="true"
          web-share="true"
          src="https://sketchfab.com/models/ae76cb29b8b84c4299d158cf76977c58/embed?autostart=1&dnt=1"
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

export default Adhomukhasvanasana;
