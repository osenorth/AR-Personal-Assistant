import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/ossistant-logo.svg";
import { HiOutlineMail } from "react-icons/hi";
import * as styles from "./SubscribeLetter.module.css";

const SubscribeLetter = () => {
  const [email, setEmail] = useState("");

  const submitToSubscribe = (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.subscribeContainer}>
      <Image src={logo} className={styles.logoImg} alt="ossistant-logo" />
      <div className={styles.subscribeInfo}>
        <p className="text-subheading landing-button">Subscribe to our News Letter</p>
        <form className={styles.subscribeForm} onSubmit={submitToSubscribe}>
          <HiOutlineMail
            size={20}
            className={`text-subheading ${styles.emailIcon}`}
          />
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            className={`text-subheading ${styles.emailInput}`}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="primary-btn landing-button">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeLetter;
