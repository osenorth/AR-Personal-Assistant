import React from "react";
import Image from "next/image";
import { MdPerson4 } from "react-icons/md";
import { TbAugmentedReality } from "react-icons/tb";
import { BiAnalyse } from "react-icons/bi";
import { CgGym } from "react-icons/cg";
import fitnessHero from "../../assets/fitness-hero.svg";
import * as styles from "./Features.module.css";

const FitnessFeatures = () => {
  return (
    <section className={styles.featuresContainer}>
      <div className={styles.featuresImageContainer}>
        <h1 className={styles.featureHeading}>Empower your Fitness</h1>
        <h4 className={`text-primary ${styles.featureSubheading}`}>
          Fit smarter, not harder
        </h4>
        <Image
          src={fitnessHero}
          alt="Here are the features of Virtual Fitness Trainer"
          className={styles.featuresAvatar}
        />
      </div>
      <div className={styles.featuresInfo}>
        <p className={styles.featureDes}>
          Elevate your fitness game with our Virtual Fitness Trainer! Get
          personalized workout plans and real-time feedback to stay motivated
          and engaged. Our cutting-edge AR and AI technology keeps you on track
          to achieve your goals. Join us now and transform your fitness journey
          today!
        </p>
        <div className={styles.featuresRow}>
          <div className={styles.featuresCol}>
            <TbAugmentedReality className={styles.featureIcon} size={50} />
            <h4 className={`${styles.featureLabel} text-heading`}>
              Get trained in Augmented Reality
            </h4>
            <p className={styles.featureDesc}>
              Experience the 3D Demonstration of workouts and yoga in AR,
              creating a unique and immersive experience.
            </p>
          </div>
          <div className={styles.featuresCol}>
            <MdPerson4 className={styles.featureIcon} size={50} />
            <h4 className={`${styles.featureLabel} text-heading`}>
              Efficient Body Tracking
            </h4>
            <p className={styles.featureDesc}>
              We keep an eye on your performance using AI based efficient
              posture body tracking.
            </p>
          </div>
        </div>
        <div className={styles.featuresRow}>
          <div className={styles.featuresCol}>
            <BiAnalyse className={styles.featureIcon} size={50} />
            <h4 className={`${styles.featureLabel} text-heading`}>
              Real-time Performance Analysis
            </h4>
            <p className={styles.featureDesc}>
              Receive instant analysis to optimize your performance and avoid
              injuries.
            </p>
          </div>
          <div className={styles.featuresCol}>
            <CgGym className={styles.featureIcon} size={50} />
            <h4 className={`${styles.featureLabel} text-heading`}>
              Exciting range of trainings
            </h4>
            <p className={styles.featureDesc}>
              We provide a wide range of training exercises and yoga according
              to your fitness goals and preference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitnessFeatures;
