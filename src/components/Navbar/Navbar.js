import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/ossistant-logo.svg";
import * as styles from "./Navbar.module.css";
import { HamburgerButton } from "react-hamburger-button";

const Navbar = () => {
  const [navOpen, setNavOpen] = React.useState(true);
  return (
    <nav>
      <div className={`margin-on-side ${styles.navContainer}`}>
        <div className={styles.logoLinks}>
          <Image src={logo} alt="Ossistant" className={styles.logoImg} />
          <div
            className={`${styles.navAuth} ${
              navOpen ? styles.hide : styles.show
            }`}
          >
            <ul
              className={styles.navLinks}
              onClick={() => {
                setNavOpen((current) => !current);
              }}
            >
              <li
                className={` ${styles.activeNavLink} text-heading ${styles.navLink}`}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Link href="/">Home</Link>
              </li>
              <li className={` text-heading ${styles.navLink}`}>
                <Link href="/">About</Link>
              </li>
              <li className={` text-heading ${styles.navLink}`}>
                <Link href="/">Services</Link>
              </li>
              <li className={` text-heading ${styles.navLink}`}>
                <Link href="/">Team</Link>
              </li>
              <li className={` text-heading ${styles.navLink}`}>
                <Link href="/">Contact</Link>
              </li>
            </ul>
            <div
              className={styles.authLinks}
              onClick={() => {
                setNavOpen((current) => !current);
              }}
            >
              <button className={`primary-btn ${styles.authButton}`}>
                Login
              </button>
              <button className={`secondary-btn ${styles.authButton}`}>
                Register
              </button>
            </div>
          </div>
        </div>
        <div className={`${styles.navMenuButton}`}>
          <HamburgerButton
            strokeWidth={3}
            open={!navOpen}
            animationDuration={0.5}
            onClick={() =>
              setNavOpen((current) => {
                return !current;
              })
            }
            width={20}
            height={17}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
