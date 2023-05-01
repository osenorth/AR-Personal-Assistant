import React, { useState } from "react";
import Image from "next/image";
import orgLogo from "../../assets/osenorth-logo.svg";
import { HiLocationMarker } from "react-icons/hi";
import { MdPhoneInTalk } from "react-icons/md";
import * as styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    profession: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const { fname, lname, email, profession, message } = formData;

  return (
    <section className={styles.contactContainer}>
      <div className={styles.orgContainer}>
        <Image src={orgLogo} className={styles.orgLogo} alt="osenorth-logo" />
        <div className={styles.orgInfo}>
          <h4 className={`text-heading ${styles.orgName}`}>About Osenorth</h4>
          <p className="text-subheading">
            A remote creative agency, busy designing and building functional,
            emotional, and beautiful digital products and experiences.
          </p>
          <div className={styles.locPhone}>
            <div className={styles.locContainer}>
              <HiLocationMarker size={30} className="text-subheading" />
              <p className="text-subheading">
                South Delhi, Vasant Vihar, 110057, India
              </p>
            </div>
            <div className={styles.phoneContainer}>
              <MdPhoneInTalk size={30} className="text-subheading" />
              <p className="text-subheading">+91 9205679929</p>
            </div>
          </div>
        </div>
      </div>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div>
          <h4 className="text-primary">Get In Touch</h4>
          <p className="text-subheading">
            Contact us and unlock your potential today!
          </p>
        </div>
        <div className={styles.names}>
          <div className={styles.inputContainer}>
            <p className="text-subheading">First Name</p>
            <input
              type="text"
              className={styles.inputBox}
              value={fname}
              name="fname"
              placeholder="Enter First Name"
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputContainer}>
            <p className="text-subheading">Last Name</p>
            <input
              type="text"
              className={styles.inputBox}
              value={lname}
              name="lname"
              placeholder="Enter Second Name"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <p className="text-subheading">Email</p>
          <input
            type="email"
            className={styles.inputBox}
            value={email}
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <p className="text-subheading">Profession</p>
          <input
            type="profession"
            className={styles.inputBox}
            value={profession}
            name="profession"
            placeholder="Enter Profession"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <p className="text-subheading">Message</p>
          <input
            type="text"
            className={styles.inputBox}
            value={message}
            name="message"
            placeholder="Enter Your Message"
            onChange={handleChange}
          />
        </div>
        <div className={styles.submitContainer}>
          <button type="submit" className="primary-btn landing-button">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
