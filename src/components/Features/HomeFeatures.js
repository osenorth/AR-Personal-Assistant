import React from "react";
import Image from "next/image";
import { MdPerson4 } from "react-icons/md";
import { TbAugmentedReality } from "react-icons/tb";
import { BiAnalyse } from "react-icons/bi";
import { MdKeyboardVoice } from "react-icons/md";
import featureAvatar from "../../assets/feature-avatar.svg";
import * as styles from "./Features.module.css";

const HomeFeatures = () => {
  return (
    <section className={styles.featuresContainer}>
      <div className={styles.featuresImageContainer}>
        <Image
          src={featureAvatar}
          alt="Here are the features of Ossistant"
          className={styles.featuresAvatar}
        />
      </div>
      <div className={styles.featuresInfo}>
        <div className={styles.featuresRow}>
          <div className={styles.featuresCol}>
            <TbAugmentedReality className={styles.featureIcon} size={50} />
            <h4 className={`${styles.featureLabel} text-heading`}>
              Augmented Reality Visualization
            </h4>
            <p className={styles.featureDesc}>
              Experience digital information projected onto the real world,
              creating a unique and immersive experience.
            </p>
          </div>
          <div className={styles.featuresCol}>
            <MdPerson4 className={styles.featureIcon} size={50} />
            <h4 className={`${styles.featureLabel} text-heading`}>
              Personalized Assistance
            </h4>
            <p className={styles.featureDesc}>
              Customized assistance for every user, with personalized
              recommendations and suggestions for daily activities.
            </p>
          </div>
        </div>
        <div className={styles.featuresRow}>
          <div className={styles.featuresCol}>
            <BiAnalyse className={styles.featureIcon} size={50} />
            <h4 className={`${styles.featureLabel} text-heading`}>
              Real-time Object Recognition
            </h4>
            <p className={styles.featureDesc}>
              AR assistant can recognize objects in real-time, providing instant
              information and making your tasks more efficient.
            </p>
          </div>
          <div className={styles.featuresCol}>
            <MdKeyboardVoice className={styles.featureIcon} size={50} />
            <h4 className={`${styles.featureLabel} text-heading`}>
              Voice Recognition
            </h4>
            <p className={styles.featureDesc}>
              Interact with your personal assistant using voice commands,
              allowing for hands-free and convenient assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
