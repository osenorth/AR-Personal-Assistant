import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import yogaData from "../../data/YogaData";
import * as poseDetection from "@tensorflow-models/pose-detection";
import * as tf from "@tensorflow/tfjs";
import { POINTS, keypointConnections } from "../../data/YogaPoints";
import { drawPoint, drawSegment } from "../../helpers/Utils";
import Webcam from "react-webcam";
import Instructions from "../Instructions/Instructions";
import XrHitModelContainer from "../../containers/XRHitModelContainer/XRHitModelContainer";
import * as styles from "./FitnessTrainer.module.css";

let flag = false,
  reps = 0,
  newBest = false;
let skeletonColor = "rgb(255,0,0)";
let interval = null;

const YogaCanvas = () => {
  const [startingTime, setStartingTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [poseTime, setPoseTime] = useState(0);
  const [bestPerform, setBestPerform] = useState(0);
  const [isStartPose, setIsStartPose] = useState(false);
  const [modelGender, setModelGender] = useState("female");

  const router = useRouter();
  const [currentPose, setCurrentPose] = useState(null);
  const [currentPoseData, setCurrentPoseData] = useState(null);
  const [speech, setSpeech] = useState(null);

  let poseMapping = {
    vrikshasana: "Tree",
    utkatasana: "Chair",
    bhujangasana: "Cobra",
    adhomukhasvanasana: "Dog",
    trikonasana: "Traingle",
    virabhadrasana3: "Warrior",
    sarvangasana: "Shoulderstand",
  };

  const speak = (speechText) => {
    const object = new SpeechSynthesisUtterance(speechText);
    object.lang = "en-US";
    speech.speak(object);
  };

  useEffect(() => {
    if (router.isReady) {
      const { pose } = router.query;
      setCurrentPose(poseMapping[pose]);
      setCurrentPoseData(yogaData.poseData[poseMapping[pose]]);
    }
  }, [router.isReady]);

  const startYoga = (value) => {
    setIsStartPose(value);
    speak("Let's Do some Yoga !");
  };

  function stopPose() {
    setIsStartPose(false);
    if (interval) clearInterval(interval);
  }

  useEffect(
    () => {
      setCurrentTime(0);
      setPoseTime(0);
      setBestPerform(0);
      setSpeech(window.speechSynthesis);
    },
    // eslint-disable-next-line
    [currentPose]
  );

  useEffect(() => {
    if (speech) {
      if (flag && poseTime > 0) speak(poseTime);
      if (poseTime > bestPerform) {
        setBestPerform(poseTime);
        newBest = true;
      }
    }
  }, [poseTime]);

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const CLASS_NO = {
    Chair: 0,
    Cobra: 1,
    Dog: 2,
    No_Pose: 3,
    Shoulderstand: 4,
    Traingle: 5,
    Tree: 6,
    Warrior: 7,
  };

  function get_center_point(landmarks, left_bodypart, right_bodypart) {
    let left = tf.gather(landmarks, left_bodypart, 1);
    let right = tf.gather(landmarks, right_bodypart, 1);
    const center = tf.add(tf.mul(left, 0.5), tf.mul(right, 0.5));
    return center;
  }

  function get_pose_size(landmarks, torso_size_multiplier = 2.5) {
    let hips_center = get_center_point(
      landmarks,
      POINTS.LEFT_HIP,
      POINTS.RIGHT_HIP
    );
    let shoulders_center = get_center_point(
      landmarks,
      POINTS.LEFT_SHOULDER,
      POINTS.RIGHT_SHOULDER
    );
    let torso_size = tf.norm(tf.sub(shoulders_center, hips_center));
    let pose_center_new = get_center_point(
      landmarks,
      POINTS.LEFT_HIP,
      POINTS.RIGHT_HIP
    );
    pose_center_new = tf.expandDims(pose_center_new, 1);

    pose_center_new = tf.broadcastTo(pose_center_new, [1, 17, 2]);
    let d = tf.gather(tf.sub(landmarks, pose_center_new), 0, 0);
    let max_dist = tf.max(tf.norm(d, "euclidean", 0));

    // normalizing scale
    let pose_size = tf.maximum(
      tf.mul(torso_size, torso_size_multiplier),
      max_dist
    );
    return pose_size;
  }

  function normalize_pose_landmarks(landmarks) {
    let pose_center = get_center_point(
      landmarks,
      POINTS.LEFT_HIP,
      POINTS.RIGHT_HIP
    );
    pose_center = tf.expandDims(pose_center, 1);
    pose_center = tf.broadcastTo(pose_center, [1, 17, 2]);
    landmarks = tf.sub(landmarks, pose_center);

    let pose_size = get_pose_size(landmarks);
    landmarks = tf.div(landmarks, pose_size);
    return landmarks;
  }

  function landmarks_to_embedding(landmarks) {
    // normalizing landmarks 2D
    landmarks = normalize_pose_landmarks(tf.expandDims(landmarks, 0));
    let embedding = tf.reshape(landmarks, [1, 34]);
    return embedding;
  }

  const runMovenet = async () => {
    const detectorConfig = {
      modelType: poseDetection.movenet.modelType.SINGLEPOSE_THUNDER,
    };
    const detector = await poseDetection.createDetector(
      poseDetection.SupportedModels.MoveNet,
      detectorConfig
    );
    const poseClassifier = await tf.loadLayersModel(
      "https://models.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json"
      // model
    );
    interval = setInterval(() => {
      detectPose(detector, poseClassifier);
    }, 1500);
  };

  const detectPose = async (detector, poseClassifier) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      let notDetected = 0;
      const video = webcamRef.current.video;
      const pose = await detector.estimatePoses(video);
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      try {
        const keypoints = pose[0]?.keypoints;
        let input = null;
        if (keypoints && keypoints.length > 0) {
          input = keypoints?.map((keypoint) => {
            if (keypoint.score > 0.4) {
              if (
                !(keypoint.name === "left_eye" || keypoint.name === "right_eye")
              ) {
                drawPoint(ctx, keypoint.x, keypoint.y, 8, "rgb(255,255,255)");
                let connections = keypointConnections[keypoint.name];
                try {
                  connections.forEach((connection) => {
                    let conName = connection.toUpperCase();
                    drawSegment(
                      ctx,
                      [keypoint.x, keypoint.y],
                      [
                        keypoints[POINTS[conName]].x,
                        keypoints[POINTS[conName]].y,
                      ],
                      skeletonColor
                    );
                  });
                } catch (err) {}
              }
            } else {
              notDetected += 1;
            }
            return [keypoint.x, keypoint.y];
          });
        }
        if (notDetected > 4) {
          skeletonColor = "rgb(255,0,0)";
          return;
        }
        const processedInput = landmarks_to_embedding(input);
        const classification = poseClassifier.predict(processedInput);

        classification.array().then((data) => {
          const classNo = CLASS_NO[currentPose];
          if (data[0][classNo] > 0.97) {
            flag = true;
            reps += 1;
            setPoseTime(reps);
            skeletonColor = "rgb(0,255,0)";
          } else {
            flag = false;
            if (reps > 0) {
              speak("You holded for" + reps + "seconds last time!");
            }
            if (newBest) {
              speak("Congrats ! You've got your new best !");
            }
            reps = 0;
            setPoseTime(0);
            newBest = false;
            skeletonColor = "rgb(255,0,0)";
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    if (isStartPose) {
      runMovenet();
    }
  }, [isStartPose]);

  if (!currentPoseData)
    return (
      <div className={styles.loading}>
        <h2 className={`text-primary`}>Loading ...</h2>
      </div>
    );

  return (
    <div className={styles.workoutContainer}>
      <title>Ossistant</title>
      <div
        className={`${styles.detectContainer} ${
          isStartPose && styles.infoContainer
        }`}
      >
        {isStartPose ? (
          <>
            <Webcam
              className={styles.yogaWebcam}
              ref={webcamRef}
              width="640px"
              height="480px"
            />
            <canvas
              ref={canvasRef}
              className={styles.yogaCanvas}
              width="640px"
              height="480px"
            ></canvas>
          </>
        ) : (
          currentPoseData && (
            <Instructions data={currentPoseData} startSession={startYoga} />
          )
        )}
      </div>
      <div className={styles.resultsContainer}>
        <div className={styles.viewerTop}>
          {isStartPose && (
            <h4 className={`text-subheading ${styles.workoutTitle}`}>
              Try to mimic this posture to perform
            </h4>
          )}
          <h4 className={`text-primary ${styles.workoutTitle}`}>
            {isStartPose ? currentPoseData.name : "View in 3D"}
          </h4>
          <div className={styles.genderContainer}>
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
            <button
              className={
                modelGender === "male" ? "primary-btn" : "secondary-btn"
              }
              onClick={() => setModelGender("male")}
            >
              Male
            </button>
          </div>
        </div>

        {currentPoseData &&
          (currentPoseData.modelAvailable ? (
            <XrHitModelContainer
              modelName={currentPoseData.label}
              modelGender={modelGender}
              type="yoga"
            />
          ) : (
            <iframe
              title={currentPoseData.name}
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking="true"
              execution-while-out-of-viewport="true"
              execution-while-not-rendered="true"
              web-share="true"
              src={currentPoseData.modelLink}
              className={styles.modelContrainer}
            ></iframe>
          ))}
        {isStartPose && (
          <div className={styles.countDisplay}>
            <div>
              <p className="text-subheading">Pose Time (sec)</p>
              <input value={poseTime} className={styles.countInput} readOnly />
            </div>
            <div>
              <p className="text-primary">Best (sec)</p>
              <input
                value={bestPerform}
                className={`${styles.countInput} text-primary`}
                readOnly
              />
            </div>
            <button
              className={`secondary-btn ${styles.controlButtons}`}
              onClick={stopPose}
            >
              Stop Pose
            </button>
          </div>
        )}
        <Link href="/yoga" className={styles.link} onClick={stopPose}>
          <button className={`primary-btn ${styles.controlButtons}`}>
            Explore More Yoga
          </button>
        </Link>
      </div>
    </div>
  );
};

export default YogaCanvas;
