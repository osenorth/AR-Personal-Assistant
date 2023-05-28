import React from "react";
import Image from "next/image";
import { MdPerson4 } from "react-icons/md";
import { TbAugmentedReality } from "react-icons/tb";
import { BiAnalyse } from "react-icons/bi";
import { MdKeyboardVoice } from "react-icons/md";
import tourEarth from "../../assets/tour-earth.svg";
import * as styles from "./Features.module.css";

const TourGuideFeatures = () => {
  return (
    <section className={styles.featuresContainer}>
      <div className={styles.featuresImageContainer}>
        <h1 className={styles.featureHeading}>Immersive Tour Experience</h1>
        <h4 className={`text-primary ${styles.featureSubheading}`}>
          Explore travelling
        </h4>
        <Image
          src={tourEarth}
          alt="Here are the features of Virtual Fitness Trainer"
          className={styles.featuresAvatar}
        />
      </div>
      <div className={styles.featuresInfo}>
        <p className={styles.featureDes}>
          Embark on extraordinary adventures with our Immersive AR/VR Tour
          Guide! Experience destinations like never before as our
          state-of-the-art technology transports you to captivating worlds. With
          interactive storytelling, virtual exploration, and expert guidance,
          discover the wonders of the world from the comfort of your own home.
          Join us now and redefine the way you travel
        </p>
        <div className={styles.featuresRow}>
          <div className={styles.featuresCol}>
            <TbAugmentedReality className={styles.featureIcon} size={50} />
            <h4 className={`${styles.featureLabel} text-heading`}>
              Navigating World
            </h4>
            <p className={styles.featureDesc}>
              Embark on extraordinary adventures and explore the world like
              never before with our immersive AR/VR Tour Guide
            </p>
          </div>
          <div className={styles.featuresCol}>
            <MdPerson4 className={styles.featureIcon} size={50} />
            <h4 className={`${styles.featureLabel} text-heading`}>
              Immersive AR Bot helping
            </h4>
            <p className={styles.featureDesc}>
              Let our Immersive AR Bot be your guide as it helps you navigate
              and discover captivating destinations in a whole new way.
            </p>
          </div>
        </div>
        <div className={styles.featuresRow}>
          <div className={styles.featuresCol}>
            <BiAnalyse className={styles.featureIcon} size={50} />
            <h4 className={`${styles.featureLabel} text-heading`}>
              Get city overview
            </h4>
            <p className={styles.featureDesc}>
              Experience cities like never before with our virtual exploration
              and expert guidance, providing you with comprehensive city
              overviews from the comfort of your own home.
            </p>
          </div>
          <div className={styles.featuresCol}>
            <MdKeyboardVoice className={styles.featureIcon} size={50} />
            <h4 className={`${styles.featureLabel} text-heading`}>
              Voice Recognition
            </h4>
            <p className={styles.featureDesc}>
              Enjoy a seamless and interactive experience as our advanced voice
              recognition technology ensures a personalized and effortless
              journey through the wonders of the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourGuideFeatures;
