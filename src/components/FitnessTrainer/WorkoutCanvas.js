import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Webcam from "react-webcam";
import { Pose } from "@mediapipe/pose";
import * as cam from "@mediapipe/camera_utils";
import {
  drawPoint,
  drawSegment,
  angleBetweenThreePoints,
} from "../../helpers/Utils";
import { POINTS, LINES } from "../../data/WorkoutPoints";
import workoutData from "../../data/WorkoutData";
import Instructions from "../Instructions/Instructions";
// import XrHitModelContainer from "../../containers/XRHitModelContainer/XRHitModelContainer";
import ModelViewer from "../ModelViewer/ModelViewer";
import * as styles from "./FitnessTrainer.module.css";

const WorkoutCanvas = () => {
  const [currentWorkout, setCurrentWorkout] = useState();
  const [currentWorkoutData, setCurrentWorkoutData] = useState(null);
  const [isStartSession, setisStartSession] = useState(false);
  const [counter, setCounter] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [status, setStatus] = useState(true);
  const [speech, setSpeech] = useState(null);
  const [modelGender, setModelGender] = useState("male");
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const router = useRouter();

  let camera = null;

  let sets = 0,
    reps = 0,
    direction = 0;

  // to keep a track of reps count
  let leftCounter = 0,
    rightCounter = 0;

  let setscount = 0;
  let leftUp = false,
    leftDown = false;

  let rightUp = false,
    rightDown = false;

  // to keep a track of range of motion achieved
  let leftMaxAngle = 10,
    rightMaxAngle = 10,
    interval = null;

  useEffect(() => {
    if (router.isReady) {
      const { exercise } = router.query;
      setCurrentWorkout(exercise);
      setCurrentWorkoutData(workoutData.exerciseData[exercise]);
      setSpeech(window.speechSynthesis);
      setCounter(0);
    }
  }, [router.isReady]);

  const speak = (speechText) => {
    const object = new SpeechSynthesisUtterance(speechText);
    object.lang = "en-US";
    speech.speak(object);
  };

  useEffect(() => {
    if (speech) {
      if (counter > 0) speak(counter);
    }
  }, [counter]);

  useEffect(() => {
    if (speech) {
      speak(feedback);
    }
  }, [feedback]);

  const plank = (landmarks) => {
    const leftShoulder = landmarks[POINTS.LEFT_SHOULDER];
    const leftElbow = landmarks[POINTS.LEFT_ELBOW];
    const leftWrist = landmarks[POINTS.LEFT_WRIST];
    const leftHip = landmarks[POINTS.LEFT_HIP];
    const leftKnee = landmarks[POINTS.LEFT_KNEE];

    let elbow = angleBetweenThreePoints(leftShoulder, leftElbow, leftWrist);
    let shoulder = angleBetweenThreePoints(leftElbow, leftShoulder, leftHip);
    let hip = angleBetweenThreePoints(leftShoulder, leftHip, leftKnee);

    if (elbow > 160 && shoulder > 40 && hip > 140) {
      if (!leftUp) {
        leftUp = true;
        interval = setInterval(() => {
          reps += 1;
          setCounter(reps);
        }, 1000);
      }
    } else {
      leftUp = false;
      clearInterval(interval);
      if (reps > 0) {
        speak("You holded Plank for" + reps + "seconds last time!");
      }
      reps = 0;
      setCounter(0);
    }
  };

  const pushUps = (landmarks) => {
    const leftShoulder = landmarks[POINTS.LEFT_SHOULDER];
    const leftElbow = landmarks[POINTS.LEFT_ELBOW];
    const leftWrist = landmarks[POINTS.LEFT_WRIST];
    const leftHip = landmarks[POINTS.LEFT_HIP];
    const leftKnee = landmarks[POINTS.LEFT_KNEE];

    let elbow = angleBetweenThreePoints(leftShoulder, leftElbow, leftWrist);
    let shoulder = angleBetweenThreePoints(leftElbow, leftShoulder, leftHip);
    let hip = angleBetweenThreePoints(leftShoulder, leftHip, leftKnee);

    // Check to ensure right form before starting the program
    if (elbow > 160 && shoulder > 40 && hip > 140) {
      setStatus(true);
    }

    // Check for full range of motion for the pushup
    if (status) {
      if (direction === 0) {
        // Tracking "Down" movement
        if (elbow <= 90 && hip > 140) {
          reps += 0.5;
          direction = 1;
        }
      } else {
        setFeedback("Fix Your posture");
      }
    }

    if (direction === 1) {
      // Tracking "Up" movement
      if (elbow > 160 && shoulder > 40 && hip > 140) {
        reps += 0.5;
        direction = 0;
      } else {
        setFeedback("Fix Your posture");
      }
    }

    if (Number.isInteger(reps)) {
      setCounter(reps);
    }
    return 0;
  };

  const pikeWalk = (landmarks) => {
    const leftShoulder = landmarks[POINTS.LEFT_SHOULDER];
    const leftElbow = landmarks[POINTS.LEFT_ELBOW];
    const leftWrist = landmarks[POINTS.LEFT_WRIST];
    const leftHip = landmarks[POINTS.LEFT_HIP];
    const leftKnee = landmarks[POINTS.LEFT_KNEE];

    let elbow = angleBetweenThreePoints(leftShoulder, leftElbow, leftWrist);
    let shoulder = angleBetweenThreePoints(leftElbow, leftShoulder, leftHip);
    let hip = angleBetweenThreePoints(leftShoulder, leftHip, leftKnee);

    // Check to ensure right form before starting the program
    if (elbow > 160 && shoulder > 40 && hip > 140) {
      setStatus(true);
    }

    // Check for full range of motion for the plank walk
    if (status) {
      if (direction === 0) {
        // Tracking movement of going "Behind"
        if (elbow > 160 && shoulder > 40 && hip < 75) {
          reps += 0.5;
          direction = 1;
        }
      } else {
        setFeedback("Fix Your posture");
      }
    }

    if (direction === 1) {
      // Tracking movement of going "Front"
      if (elbow > 160 && shoulder > 40 && hip > 140) {
        reps += 0.5;
        direction = 0;
      } else {
        setFeedback("Fix Your posture");
      }
    }

    if (Number.isInteger(reps)) {
      setCounter(reps);
    }
    return 0;
  };

  const burpees = (landmarks) => {
    const nose = landmarks[POINTS.NOSE];
    const leftShoulder = landmarks[POINTS.LEFT_SHOULDER];
    const leftElbow = landmarks[POINTS.LEFT_ELBOW];
    const leftWrist = landmarks[POINTS.LEFT_WRIST];
    const leftHip = landmarks[POINTS.LEFT_HIP];
    const leftKnee = landmarks[POINTS.LEFT_KNEE];
    const leftAnkle = landmarks[POINTS.LEFT_ANKLE];

    let shoulder = angleBetweenThreePoints(leftElbow, leftShoulder, leftHip);
    let hip = angleBetweenThreePoints(leftShoulder, leftHip, leftKnee);
    let knee = angleBetweenThreePoints(leftHip, leftKnee, leftAnkle);

    // Check to ensure right form before starting the program
    if (shoulder > 160 && hip > 140 && knee > 160 && nose.y >= leftWrist.y) {
      setStatus(true);
    }

    // Check for full range of motion for the pushup
    if (status) {
      if (direction === 0) {
        // Tracking "Down" movement
        if (shoulder > 60 && knee > 160 && hip > 140) {
          reps += 0.5;
          direction = 1;
        }
      } else {
        setFeedback("Fix Your posture");
      }
    }

    if (direction === 1) {
      // Tracking "Up" movement
      if (shoulder < 90 && knee < 90 && hip < 90) {
        reps += 0.5;
        direction = 0;
      } else {
        setFeedback("Fix Your posture");
      }
    }

    if (Number.isInteger(reps)) {
      setCounter(reps);
    }
    return 0;
  };

  const bicycleCrunches = (landmarks) => {
    const leftHip = landmarks[POINTS.LEFT_HIP];
    const leftKnee = landmarks[POINTS.LEFT_KNEE];
    const leftAnkle = landmarks[POINTS.LEFT_ANKLE];

    const rightHip = landmarks[POINTS.RIGHT_HIP];
    const rightKnee = landmarks[POINTS.RIGHT_KNEE];
    const rightAnkle = landmarks[POINTS.RIGHT_ANKLE];

    let leftKneeAngle = angleBetweenThreePoints(leftHip, leftKnee, leftAnkle);

    let rightKneeAngle = angleBetweenThreePoints(
      rightHip,
      rightKnee,
      rightAnkle
    );

    // Check to ensure right form before starting the program
    if (leftKneeAngle < 50 || rightKneeAngle < 50) {
      setStatus(true);
    }

    // Check for full range of motion for the plank walk
    if (status) {
      if (direction === 0) {
        // Tracking crunch towards Right
        if (rightKneeAngle > 160 || leftKneeAngle > 160) {
          reps += 0.5;
          direction = 1;
        }
      } else {
        setFeedback("Fix Your posture");
      }
    }

    if (direction === 1) {
      // Tracking crunch towards Left
      if (rightKneeAngle < 50 || leftKneeAngle < 50) {
        reps += 0.5;
        direction = 0;
      } else {
        setFeedback("Fix Your posture");
      }
    }

    if (Number.isInteger(reps)) {
      setCounter(reps);
    }
    return 0;
  };

  const pullUps = (landmarks) => {
    const nose = landmarks[POINTS.NOSE];
    const rightShoulder = landmarks[POINTS.RIGHT_SHOULDER];
    const rightElbow = landmarks[POINTS.RIGHT_ELBOW];
    const rightWrist = landmarks[POINTS.RIGHT_WRIST];

    const elbow = angleBetweenThreePoints(
      rightShoulder,
      rightElbow,
      rightWrist
    );

    // Check to ensure right form before starting workout
    if (elbow <= 70 && nose.y >= rightWrist.y) {
      setStatus(false);
    }

    // Check for full range of motion for the pullup
    if (status) {
      if (direction === 0) {
        // Tracking "Up" movement
        if (elbow > 160 && nose.y >= rightWrist.y) {
          reps += 0.5;
          direction = 1;
        }
      } else {
        setFeedback("Fix Your Posture");
      }
    }

    if (direction === 1) {
      // Tracking "Down" movement
      if (elbow <= 70 && nose.y < rightWrist.y) {
        reps += 0.5;
        direction = 0;
      } else {
        setFeedback("Fix Your Posture");
      }
    }

    if (Number.isInteger(reps)) {
      setCounter(reps);
    }
    return 0;
  };

  const jumpingJacks = (landmarks) => {
    const nose = landmarks[POINTS.NOSE];
    const rightWrist = landmarks[POINTS.RIGHT_WRIST];
    const leftHip = landmarks[POINTS.LEFT_HIP];
    const rightHip = landmarks[POINTS.RIGHT_HIP];
    const leftKnee = landmarks[POINTS.LEFT_KNEE];
    const rightKnee = landmarks[POINTS.RIGHT_KNEE];

    const midHip = {
      x: (leftHip.x + rightHip.x) / 2,
      y: (leftHip.y + rightHip.y) / 2,
    };

    const angleBetweenLegs = angleBetweenThreePoints(
      leftKnee,
      midHip,
      rightKnee
    );

    // Check to ensure right form before starting workout
    if (angleBetweenLegs <= 25 && nose.y > rightWrist.y) {
      setStatus(true);
    }

    // Check for full range of motion for the pullup
    if (status) {
      if (direction === 0) {
        // Tracking "Jump" movement
        if (angleBetweenLegs >= 45 && nose.y > rightWrist.y) {
          reps += 0.5;
          direction = 1;
        }
      } else {
        setFeedback("Fix Your posture");
      }
    }

    if (direction === 1) {
      // Tracking "Land" movement
      if (angleBetweenLegs <= 25 && nose.y < rightWrist.y) {
        reps += 0.5;
        direction = 0;
      } else {
        setFeedback("Fix Your posture");
      }
    }

    if (Number.isInteger(reps)) {
      setCounter(reps);
      // speak(counter);
    }
    return 0;
  };

  const squats = (landmarks) => {
    const rightHip = landmarks[POINTS.RIGHT_HIP];
    const rightKnee = landmarks[POINTS.RIGHT_KNEE];
    const rightAnkle = landmarks[POINTS.RIGHT_ANKLE];
    const leftHip = landmarks[POINTS.LEFT_HIP];
    const leftKnee = landmarks[POINTS.LEFT_KNEE];
    const leftAnkle = landmarks[POINTS.LEFT_ANKLE];

    const leftVector1 = [rightKnee.x - rightHip.x, rightKnee.y - rightHip.y];
    const leftVector2 = [
      rightKnee.x - rightAnkle.x,
      rightKnee.y - rightAnkle.y,
    ];
    const rightVector1 = [leftKnee.x - leftHip.x, leftKnee.y - leftHip.y];
    const rightVector2 = [leftKnee.x - leftAnkle.x, leftKnee.y - leftAnkle.y];

    const leftDot =
      leftVector1[0] * leftVector2[0] + leftVector1[1] * leftVector2[1];
    const leftMod_a = Math.sqrt(
      leftVector1[0] * leftVector1[0] + leftVector1[1] * leftVector1[1]
    );
    const leftMod_b = Math.sqrt(
      leftVector2[0] * leftVector2[0] + leftVector2[1] * leftVector2[1]
    );

    const rightDot =
      rightVector1[0] * rightVector2[0] + rightVector1[1] * rightVector2[1];
    const rightMod_a = Math.sqrt(
      rightVector1[0] * rightVector1[0] + rightVector1[1] * rightVector1[1]
    );
    const rightMod_b = Math.sqrt(
      rightVector2[0] * rightVector2[0] + rightVector2[1] * rightVector2[1]
    );

    const leftAngle = (
      (Math.acos(leftDot / (leftMod_a * leftMod_b)) * 180) /
      3.14
    ).toFixed(2);
    leftMaxAngle = Math.max(leftMaxAngle, leftAngle);

    const rightAngle = (
      (Math.acos(rightDot / (rightMod_a * rightMod_b)) * 180) /
      3.14
    ).toFixed(2);
    rightMaxAngle = Math.max(rightMaxAngle, rightAngle);

    if (leftAngle <= 120) {
      leftDown = true;
    } else if (leftAngle >= 160) {
      leftUp = true;
    }

    if (rightAngle <= 120) {
      rightDown = true;
    } else if (rightAngle >= 160) {
      rightUp = true;
    }

    if (
      leftUp === true &&
      leftDown === true &&
      rightUp === true &&
      rightDown === true
    ) {
      if (leftUp === true && leftDown === true) {
        leftCounter += 1;
        leftUp = false;
        leftDown = false;
      }
      if (rightUp === true && rightDown === true) {
        rightCounter += 1;
        rightUp = false;
        rightDown = false;
      }
      if ((leftCounter + rightCounter) % 4 === 0) {
        reps = (leftCounter + rightCounter) / 4;

        leftMaxAngle = 10;
        rightMaxAngle = 10;
      }
    }

    if ((leftCounter + rightCounter) / 4 === 5) {
      leftCounter = 0;
      rightCounter = 0;
      reps = Math.trunc((leftCounter + rightCounter) / 4);
      setscount += 1;
      sets = setscount;
    }
    setCounter(sets * 4 + reps);
    return 0;
  };

  function bicepCurls(landmarks) {
    const rightShoulder = landmarks[POINTS.RIGHT_SHOULDER];
    const rightElbow = landmarks[POINTS.RIGHT_ELBOW];
    const rightWrist = landmarks[POINTS.RIGHT_WRIST];
    const leftShoulder = landmarks[POINTS.LEFT_SHOULDER];
    const leftElbow = landmarks[POINTS.LEFT_ELBOW];
    const leftWrist = landmarks[POINTS.LEFT_WRIST];

    const leftVector1 = [
      rightElbow.x - rightShoulder.x,
      rightElbow.y - rightShoulder.y,
    ];
    const leftVector2 = [
      rightElbow.x - rightWrist.x,
      rightElbow.y - rightWrist.y,
    ];
    const rightVector1 = [
      leftElbow.x - leftShoulder.x,
      leftElbow.y - leftShoulder.y,
    ];
    const rightVector2 = [leftElbow.x - leftWrist.x, leftElbow.y - leftWrist.y];

    const leftDot =
      leftVector1[0] * leftVector2[0] + leftVector1[1] * leftVector2[1];
    const leftMod_a = Math.sqrt(
      leftVector1[0] * leftVector1[0] + leftVector1[1] * leftVector1[1]
    );
    const leftMod_b = Math.sqrt(
      leftVector2[0] * leftVector2[0] + leftVector2[1] * leftVector2[1]
    );

    const rightDot =
      rightVector1[0] * rightVector2[0] + rightVector1[1] * rightVector2[1];
    const rightMod_a = Math.sqrt(
      rightVector1[0] * rightVector1[0] + rightVector1[1] * rightVector1[1]
    );
    const rightMod_b = Math.sqrt(
      rightVector2[0] * rightVector2[0] + rightVector2[1] * rightVector2[1]
    );

    const leftAngle = (
      (Math.acos(leftDot / (leftMod_a * leftMod_b)) * 180) /
      3.14
    ).toFixed(2);
    leftMaxAngle = Math.max(leftMaxAngle, leftAngle);

    const rightAngle = (
      (Math.acos(rightDot / (rightMod_a * rightMod_b)) * 180) /
      3.14
    ).toFixed(2);
    rightMaxAngle = Math.max(rightMaxAngle, rightAngle);

    if (leftAngle <= 25) {
      leftDown = true;
    } else if (leftAngle >= 130) {
      leftUp = true;
    }

    if (rightAngle <= 25) {
      rightDown = true;
    } else if (rightAngle >= 130) {
      rightUp = true;
    }

    if (
      leftUp === true &&
      leftDown === true &&
      rightUp === true &&
      rightDown === true
    ) {
      if (leftUp === true && leftDown === true) {
        leftCounter += 1;
        leftUp = false;
        leftDown = false;
      }
      if (rightUp === true && rightDown === true) {
        rightCounter += 1;
        rightUp = false;
        rightDown = false;
      }
      if ((leftCounter + rightCounter) % 4 === 0) {
        reps = (leftCounter + rightCounter) / 4;
        leftMaxAngle = 10;
        rightMaxAngle = 10;
      }
    }

    if ((leftCounter + rightCounter) / 4 === 5) {
      leftCounter = 0;
      rightCounter = 0;
      reps = Math.trunc((leftCounter + rightCounter) / 4);
      setscount += 1;
      sets = setscount;
    }

    setCounter(sets * 4 + reps);
    return 0;
  }

  function lungs(landmarks) {
    const rightHip = landmarks[POINTS.RIGHT_HIP];
    const rightKnee = landmarks[POINTS.RIGHT_KNEE];
    const rightAnkle = landmarks[POINTS.RIGHT_ANKLE];
    const leftHip = landmarks[POINTS.LEFT_HIP];
    const leftKnee = landmarks[POINTS.LEFT_KNEE];
    const leftAnkle = landmarks[POINTS.LEFT_ANKLE];

    const leftVector1 = [rightKnee.x - rightHip.x, rightKnee.y - rightHip.y];
    const leftVector2 = [
      rightKnee.x - rightAnkle.x,
      rightKnee.y - rightAnkle.y,
    ];
    const rightVector1 = [leftKnee.x - leftHip.x, leftKnee.y - leftHip.y];
    const rightVector2 = [leftKnee.x - leftAnkle.x, leftKnee.y - leftAnkle.y];

    const leftDot =
      leftVector1[0] * leftVector2[0] + leftVector1[1] * leftVector2[1];
    const leftMod_a = Math.sqrt(
      leftVector1[0] * leftVector1[0] + leftVector1[1] * leftVector1[1]
    );
    const leftMod_b = Math.sqrt(
      leftVector2[0] * leftVector2[0] + leftVector2[1] * leftVector2[1]
    );

    const rightDot =
      rightVector1[0] * rightVector2[0] + rightVector1[1] * rightVector2[1];
    const rightMod_a = Math.sqrt(
      rightVector1[0] * rightVector1[0] + rightVector1[1] * rightVector1[1]
    );
    const rightMod_b = Math.sqrt(
      rightVector2[0] * rightVector2[0] + rightVector2[1] * rightVector2[1]
    );

    const leftAngle = (
      (Math.acos(leftDot / (leftMod_a * leftMod_b)) * 180) /
      3.14
    ).toFixed(2);
    leftMaxAngle = Math.max(leftMaxAngle, leftAngle);

    const rightAngle = (
      (Math.acos(rightDot / (rightMod_a * rightMod_b)) * 180) /
      3.14
    ).toFixed(2);
    rightMaxAngle = Math.max(rightMaxAngle, rightAngle);

    if (leftAngle <= 95) {
      leftDown = true;
    } else if (leftAngle >= 140) {
      leftUp = true;
    }

    if (rightAngle <= 95) {
      rightDown = true;
    } else if (rightAngle >= 140) {
      rightUp = true;
    }

    if (
      leftUp === true &&
      leftDown === true &&
      rightUp === true &&
      rightDown === true
    ) {
      if (leftUp === true && leftDown === true) {
        leftCounter += 1;
        leftUp = false;
        leftDown = false;
      }
      if (rightUp === true && rightDown === true) {
        rightCounter += 1;
        rightUp = false;
        rightDown = false;
      }
      if ((leftCounter + rightCounter) % 4 === 0) {
        reps = (leftCounter + rightCounter) / 4;
        leftMaxAngle = 10;
        rightMaxAngle = 10;
      }
    }

    if ((leftCounter + rightCounter) / 4 === 5) {
      leftCounter = 0;
      rightCounter = 0;
      reps = Math.trunc((leftCounter + rightCounter) / 4);
      setscount += 1;
      sets = setscount;
    }

    setCounter(sets * 4 + reps);
    return 0;
  }

  const sitUps = (landmarks) => {
    const leftShoulder = landmarks[POINTS.LEFT_SHOULDER];
    const leftHip = landmarks[POINTS.LEFT_HIP];
    const leftKnee = landmarks[POINTS.LEFT_KNEE];

    const hip = angleBetweenThreePoints(leftShoulder, leftHip, leftKnee);

    // Check to ensure right form before starting the program
    if (hip > 120) {
      setStatus(true);
    }

    // Tracking "Up" movement
    if (status) {
      if (direction === 0) {
        if (hip < 50) {
          reps += 0.5;
          direction = 1;
        }
      } else {
        setFeedback("Fix Your Posture");
      }
    }

    // Tracking "Down" movement
    if (direction === 1) {
      if (hip > 120) {
        reps += 0.5;
        direction = 0;
      } else {
        setFeedback("Fix Your Posture");
      }
    }

    if (Number.isInteger(reps)) {
      setCounter(reps);
    }

    return 0;
  };

  const calculateExercise = (landmarks) => {
    if (currentWorkout === "pushups") {
      pushUps(landmarks);
    } else if (currentWorkout === "pullups") {
      pullUps(landmarks);
    } else if (currentWorkout === "squats") {
      squats(landmarks);
    } else if (currentWorkout === "bicepcurls") {
      bicepCurls(landmarks);
    } else if (currentWorkout === "lungs") {
      lungs(landmarks);
    } else if (currentWorkout === "bicyclecrunches") {
      bicycleCrunches(landmarks);
    } else if (currentWorkout === "plank") {
      plank(landmarks);
    } else if (currentWorkout === "pikewalk") {
      pikeWalk(landmarks);
    } else if (currentWorkout === "burpees") {
      burpees(landmarks);
    } else if (currentWorkout === "jumpingjacks") {
      jumpingJacks(landmarks);
    } else if (currentWorkout === "situps") {
      sitUps(landmarks);
    }
  };

  function onResult(results) {
    if (results.poseLandmarks) {
      const landmarks = results.poseLandmarks;
      canvasRef.current.width = webcamRef.current.video.videoWidth;
      canvasRef.current.height = webcamRef.current.video.videoHeight;

      const canvasElement = canvasRef.current;
      const canvasCtx = canvasElement.getContext("2d");
      canvasCtx.save();
      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      canvasCtx.drawImage(
        results.image,
        0,
        0,
        canvasElement.width,
        canvasElement.height
      );
      if (landmarks && landmarks.length > 0) {
        const excludedPoints = [
          1, 2, 3, 4, 5, 6, 9, 10, 19, 20, 21, 22, 29, 30, 31, 32,
        ];
        for (let i = 0; i < landmarks.length; i++) {
          if (!excludedPoints.includes(i)) {
            const landmark = landmarks[i];
            drawPoint(
              canvasCtx,
              landmark.x * canvasElement.width,
              landmark.y * canvasElement.height,
              8,
              "rgb(255,255,255)"
            );
          }
        }

        LINES.forEach((line) => {
          const firstPoint = landmarks[line[0]];
          const secondPoint = landmarks[line[1]];

          drawSegment(
            canvasCtx,
            [
              firstPoint.x * canvasElement.width,
              firstPoint.y * canvasElement.height,
            ],
            [
              secondPoint.x * canvasElement.width,
              secondPoint.y * canvasElement.height,
            ],
            "#00FF00"
          );
        });

        calculateExercise(landmarks);
      }
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
      upperBodyOnly: false,
      smoothLandmarks: true,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.7,
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

      if (isStartSession) camera.start();
    }
  }, [isStartSession]);

  if (!currentWorkoutData)
    return (
      <div className={styles.loading}>
        <h2 className={`text-primary`}>Loading ...</h2>
      </div>
    );

  const resetCount = () => {
    setCounter(0);
  };

  const startSession = () => {
    setisStartSession(true);
    speak("Lets start a workout session");
  };

  const stopSession = () => {
    setisStartSession(false);
    // router.reload();
  };

  return (
    <div className={styles.workoutContainer}>
      <title>Ossistant</title>
      <div
        className={`${styles.detectContainer} ${
          isStartSession && styles.infoContainer
        }`}
      >
        {isStartSession ? (
          <>
            <Webcam className={styles.workoutWebcam} ref={webcamRef} />
            <canvas ref={canvasRef} className={styles.workoutCanvas}></canvas>
          </>
        ) : (
          currentWorkoutData && (
            <Instructions
              data={currentWorkoutData}
              startSession={startSession}
            />
          )
        )}
      </div>
      <div className={styles.resultsContainer}>
        <div className={styles.viewerTop}>
          {isStartSession && (
            <h4 className={`text-subheading ${styles.workoutTitle}`}>
              Try to mimic this workout
            </h4>
          )}
          <h4 className={`text-primary ${styles.workoutTitle}`}>
            {isStartSession ? currentWorkoutData.name : "View in 3D"}
          </h4>
          {currentWorkoutData?.modelAvailable && (
            <div className={styles.genderContainer}>
              <button
                className={
                  modelGender === "male" ? "primary-btn" : "secondary-btn"
                }
                onClick={() => setModelGender("male")}
              >
                Male
              </button>
              <button
                className={
                  modelGender === "female" ? "primary-btn" : "secondary-btn"
                }
                onClick={() => {
                  setModelGender("female");
                }}
              >
                Female
              </button>
            </div>
          )}
        </div>
        <ModelViewer
          modelName={currentWorkout}
          modelGender={modelGender}
          position={
            modelGender === "female" || currentWorkoutData.scaledModel
              ? "0m 100m 0m"
              : "0m 1000m 0m"
          }
          rotatedModel={currentWorkoutData.rotatedModel}
          scaledModel={currentWorkoutData.scaledModel}
          type="workout"
        />
        {/* {currentWorkoutData &&
          (currentWorkoutData.modelAvailable ? (
            <XrHitModelContainer
              modelName={currentWorkout}
              modelGender={modelGender}
              zRotationMul={currentWorkoutData.zRotationMul}
              scaleMul={currentWorkoutData.scaleMul}
              type="workout"
            />
          ) : (
            <iframe
              title={currentWorkoutData.name}
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking="true"
              execution-while-out-of-viewport="true"
              execution-while-not-rendered="true"
              web-share="true"
              src={currentWorkoutData.modelLink}
              className={styles.modelContrainer}
            ></iframe>
          ))} */}
        {isStartSession && (
          <div className={styles.countDisplay}>
            <p className="text-subheading">Count</p>
            <input value={counter} className={styles.countInput} readOnly />
            <button
              className={`primary-btn ${styles.controlButtons}`}
              onClick={resetCount}
            >
              Reset
            </button>
            <button
              className={`secondary-btn ${styles.controlButtons}`}
              onClick={stopSession}
            >
              Stop Session
            </button>
          </div>
        )}
        <Link href="/workouts" className={styles.link} onClick={stopSession}>
          <button className={`primary-btn ${styles.controlButtons}`}>
            Explore More Workouts
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WorkoutCanvas;
