import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as styles from "./ServiceCard.module.css";

const ServiceCard = ({ title, desc, poster, route, exploreText }) => {
  return (
    <div className={`${styles.cardContainer} secondary-background`}>
      <div className={styles.imageContainer}>
        <Image src={poster} alt={title} className={styles.serviceImg} />
      </div>
      <h4 className={`${styles.serviceTitle} text-subHeading`}>{title}</h4>
      <p>{desc}</p>
      <div className={styles.serviceButtons}>
        <Link href={route} className={styles.serviceLink}>
          <button className="primary-btn landing-button">{exploreText}</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
