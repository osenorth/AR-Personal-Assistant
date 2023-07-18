import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/ossistant-logo.svg";
import orgLogo from "../../assets/osenorth-logo.svg";
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
      {/* <div className={styles.subscribeInfo}>
        <p className="text-subheading">Subscribe to our News Letter</p>
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
          <button className="primary-btn">Subscribe</button>
        </form>
      </div> */}

      <div className={styles.orgContainer}>
        <Image src={orgLogo} className={styles.orgLogo} alt="osenorth-logo" />
        <div className={styles.orgInfo}>
          <h4 className={`text-heading ${styles.orgName}`}>About Osenorth</h4>
          <p className="text-subheading">
            A remote creative agency, busy designing and building functional,
            emotional, and beautiful digital products and experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscribeLetter;
