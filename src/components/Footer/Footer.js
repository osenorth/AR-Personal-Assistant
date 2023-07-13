import React from "react";
import SubscribeLetter from "../SubscribeLetter/SubscribeLetter";
import Contact from "../Contact/Contact";
import FooterLinkSet from "../FooterLinkSet/FooterLinkSet";
import * as styles from "./Footer.module.css";

const Footer = ({ withContact }) => {
  return (
    <footer className={styles.footerContainer} id="contact">
      <SubscribeLetter />
      {withContact && <Contact />}
      <FooterLinkSet />
    </footer>
  );
};

export default Footer;
