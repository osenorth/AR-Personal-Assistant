import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as styles from "./FooterLinkSet.module.css";
import footerLinksList from "../../data/FooterLinksList";
import appStoreImg from "../../assets/appstore.svg";
import playStoreImg from "../../assets/playstore.svg";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";

const FooterLinkSet = () => {
  return (
    <div className={styles.footerLinksContainer}>
      <div className={`${styles.footerLinksRow}`}>
        {footerLinksList.map((linkSet) => (
          <div className={`${styles.linkGroup}`} key={linkSet.id}>
            <h4 className={styles.footerHeading}>{linkSet.heading}</h4>
            <ul className={`${styles.webLinks}`}>
              {linkSet.links.map((item, index) => {
                return (
                  <li key={index}>
                    {item.route.includes("https://") ? (
                      <Link
                        href={item.route}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <Link href={item.route}>{item.label}</Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.socialLinks}>
        <h4 className={styles.footerHeading}>JOIN US</h4>
        {/* <div className={styles.appLinks}>
          <Link href="/" className={styles.connectLink}>
            <Image src={appStoreImg} alt="AppStore" />
          </Link>
          <Link href="/" className={styles.connectLink}>
            <Image src={playStoreImg} alt="PlayStore" />
          </Link>
        </div> */}
        <div className={styles.mediaLinks}>
          {/* <Link href="/" className={styles.connectLink}>
            <AiFillYoutube size={30} color="#ff0000" />
          </Link> */}
          {/* <Link href="/" className={styles.connectLink}>
            <FaFacebookF size={25} color="#3B5998" />
          </Link> */}
          <Link
            href="https://twitter.com/osenorth"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.connectLink}
          >
            <BsTwitter size={25} color="#55ACEE" />
          </Link>
          <Link
            href="https://www.instagram.com/osenorth_/"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.connectLink}
          >
            <BsInstagram size={25} color="#E1256C" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/osenorth"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.connectLink}
          >
            <FaLinkedinIn size={25} color="#0077B5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterLinkSet;
