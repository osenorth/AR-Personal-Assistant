import React from "react";
import Image from "next/image";
import ReactStars from "react-stars";
import * as styles from "./TestimonialCard.module.css";

const TestimonialCard = ({ message, name, avatar, rating }) => {
  return (
    <div className={styles.cardContainer}>
      <Image src={avatar} alt={name} className={styles.avatar} />
      <div className={styles.testInfo}>
        <p className="text-primary">{`“${message}”`}</p>
        <p>{name}</p>
        <ReactStars
          count={5}
          value={rating}
          size={30}
          edit={false}
          color1={"#CCC"}
        />
      </div>
    </div>
  );
};

export default TestimonialCard;
