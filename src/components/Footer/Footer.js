import React from "react";
import SubscribeLetter from "../SubscribeLetter/SubscribeLetter";
import Contact from "../Contact/Contact";
import FooterLinkSet from "../FooterLinkSet/FooterLinkSet";
import * as styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <SubscribeLetter />
      <Contact />
      <FooterLinkSet />
    </footer>
  );
};

export default Footer;
