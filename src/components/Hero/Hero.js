import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as styles from "./Hero.module.css";
import hero from "../../assets/hero.svg";
import meta from "../../assets/meta.svg";
import minecraft from "../../assets/minecraft.svg";
import lonelyplanet from "../../assets/lonelyplanet.svg";

const Hero = () => {
  return (
    <section
      className={`secondary-background ${styles.heroContainer}`}
      id="about"
    >
      <div className={`${styles.heroInfo}`}>
        <h1 className={styles.heroHeading}>Revolutionize your workday</h1>
        <h4 className={`text-primary ${styles.heroSubheading}`}>
          Your Productivity is Our Duty
        </h4>
        <p className={styles.heroDes}>
          Say goodbye to cluttered screens and hello to a new world of
          productivity with our AR personal assistant. With 3D visualization,
          interactive interfaces, and intelligent automation, our platform lets
          you effortlessly manage your workload and achieve your goals - all in
          one seamless and stylish package.
        </p>

        <div className={styles.heroButtons}>
          <Link href={"/#services"} className="primary-btn">
            Explore
          </Link>
          <Link href={"/#features"} className="secondary-btn">
            Know More
          </Link>
        </div>
        <div className={`${styles.trustedOrgs} ${styles.deskOrgs}`}>
          <p className="text-subheading">Trusted By :</p>
          <div className={styles.orgList}>
            <Image src={meta} alt="Meta" className={styles.orgImg} />
            <Image src={minecraft} alt="Minecraft" className={styles.orgImg} />
            <Image
              src={lonelyplanet}
              alt="Lonely Planet"
              className={styles.orgImg}
            />
          </div>
        </div>
      </div>

      <div className={`${styles.heroImageContainer}`}>
        <Image
          src={hero}
          alt="Your Productivity is Our Duty"
          className={styles.heroImg}
        />
        <div className={`${styles.trustedOrgs} ${styles.mobileOrgs} `}>
          <p className="text-subheading">Trusted By :</p>
          <div className={styles.orgList}>
            <Image src={meta} alt="Meta" className={styles.orgImg} />
            <Image src={minecraft} alt="Minecraft" className={styles.orgImg} />
            <Image
              src={lonelyplanet}
              alt="Lonely Planet"
              className={styles.orgImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
