import React from "react";
import { Link } from "react-router-dom";

import projectStyles from "../style.module.css";
import styles from "./navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={projectStyles["navbar-container"]}>
      <div className={projectStyles["max-width"]}>
        <div className={styles["Logo"]}>
          <img
            alt="background"
            src="/playground_assets/group%202.svg"
            className={styles["image"]}
          />
          <span className={projectStyles["brand-Name"]}>
            <span className={styles["text001"]}>UP -</span>
            <span> START</span>
          </span>
        </div>
        <div className={styles["Links"]}>
          <Link
            to="/"
            className={` ${styles["Text003"]} ${projectStyles["navbar-Link"]} `}
          >
            How it works
          </Link>
          <Link
            to="/"
            className={` ${styles["text004"]} ${projectStyles["navbar-Link"]} `}
          >
            Features
          </Link>
          <Link
            to="/"
            className={` ${styles["text005"]} ${projectStyles["navbar-Link"]} `}
          >
            Blog
          </Link>
          <Link
            to="/"
            className={` ${styles["text006"]} ${projectStyles["navbar-Link"]} `}
          >
            Pricing
          </Link>
          <button
            className={` ${projectStyles["button-secondary"]} ${projectStyles["button"]} `}
          >
            Log in
          </button>
          <button
            className={` ${projectStyles["button"]} ${projectStyles["button-primary"]} `}
          >
            Get started
          </button>
        </div>
        <div
          className={` ${styles["BurgerMenu"]} ${projectStyles["navbar-burger-menu"]} `}
        >
          <svg viewBox="0 0 1024 1024" className={styles["icon"]}>
            <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
