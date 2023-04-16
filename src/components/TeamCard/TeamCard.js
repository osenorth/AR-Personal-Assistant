import React from "react";
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import * as styles from "./TeamCard.module.css";

const TeamCard = ({ name, role, avatar, link }) => {
  return (
    <div className={`${styles.cardContainer} secondary-background`}>
      <div className={styles.imageContainer}>
        <Image src={avatar} alt={name} className={styles.avatarImg} />
      </div>
      <div className={styles.devInfo}>
        <h4 className={`${styles.devName} text-primary`}>{name}</h4>
        <p>{role}</p>
        <a href={link} target="_blank" className={styles.link}>
          <BsLinkedin size={40} className={styles.linkIcon} />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
