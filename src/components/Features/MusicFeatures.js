import React from "react";
import Image from "next/image";
import { TbAugmentedReality } from "react-icons/tb";
import { MdOutlineTouchApp } from "react-icons/md";
import { BiMusic } from "react-icons/bi";
import { BiHistory } from "react-icons/bi";
import fitnessHero from "../../assets/fitness-hero.svg";
import musicIllustration from "../../assets/music-3D-illustration.svg"
import * as styles from "./Features.module.css";

const MusicFeatures = () => {
  return (
    <section className={styles.featuresContainer}>
      <div className={styles.featuresImageContainer}>
        <h1 className={styles.featureHeading}>Supercharge your Music</h1>
        <h4 className={`text-primary ${styles.featureSubheading}`}>
        Immerse Yourself in Audio Experiences
        </h4>
        <Image
          src={musicIllustration}
          alt="Here are the features of Virtual Fitness Trainer"
          className={styles.featuresAvatar}
        />
      </div>
      <div className={styles.featuresInfo}>
        <p className={styles.featureDes}>
        Welcome to the future of music exploration. The AR Spotify Music Feature combines the power of Augmented Reality with the vast library of Spotify to take you on captivating musical journeys like never before. 
        Step into a world of audio immersion as you visualize the music and interact with your favorite artists and songs. Whether you're a music enthusiast or a casual listener, get ready to experience music in a whole new way. 
        </p>
        <div className={styles.featuresRow}>
          <div className={styles.featuresCol}>
            <TbAugmentedReality className={styles.featureIcon} size={50} />
            <h4 className={`${styles.featureLabel} text-heading`}>
              Visualize the Music
            </h4>
            <p className={styles.featureDesc}>
            Step into the beats and melodies as our experience brings songs to life with stunning visualizations and captivating audio experiences.
            </p>
          </div>
          <div className={styles.featuresCol}>
            <BiMusic className={styles.featureIcon} size={50} />
            <h4 className={`${styles.featureLabel} text-heading`}>
              View Tailored Genres
            </h4>
            <p className={styles.featureDesc}>
            Experience a handpicked selection of genres based on current popular music around the world. Discover new songs that align with your tastes.
            </p>
          </div>
        </div>
        <div className={styles.featuresRow}>
          <div className={styles.featuresCol}>
            <BiHistory className={styles.featureIcon} size={50} />
            <h4 className={`${styles.featureLabel} text-heading`}>
              Interact with your Listening History
            </h4>
            <p className={styles.featureDesc}>
            Step back in time and relive your musical moments with the songs that have shaped your musical taste.
            Travel through the timeline of your musical taste and revisit songs you enjoyed in the past. 
            </p>
          </div>
          <div className={styles.featuresCol}>
            <MdOutlineTouchApp className={styles.featureIcon} size={50} />
            <h4 className={`${styles.featureLabel} text-heading`}>
              Connect with your Custom 3D Assistant
            </h4>
            <p className={styles.featureDesc}>
              Redefine your viewing experience with genre-wise animated 3D models dancing to your favourite tunes. You can even switch between the model configurations, all according to your taste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicFeatures;
