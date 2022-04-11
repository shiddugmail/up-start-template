import React from "react";

import projectStyles from "../style.module.css";
import styles from "./hero.module.css";

const Hero = (props) => {
  return (
    <div
      className={` ${projectStyles["hero-container"]} ${projectStyles["section-container"]} `}
    >
      <div
        className={` ${styles["max-width1"]} ${projectStyles["max-width"]} `}
      >
        <div className={styles["Content"]}>
          <span
            className={` ${styles["text007"]} ${projectStyles["before-Heading"]} `}
          >
            up-start finance system
          </span>
          <h1 className={styles["text008"]}>
            <span className={styles["text009"]}>
              Unlock the next generation banking
              <span
                dangerouslySetInnerHTML={{
                  __html: " "
                }}
              />
            </span>
            <span className={styles["text010"]}>experience</span>
          </h1>
          <span className={styles["text011"]}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </span>
          <div className={styles["container01"]}>
            <button
              className={` ${projectStyles["button"]} ${projectStyles["button-gradient"]} `}
            >
              Get started
            </button>
            <button
              className={` ${projectStyles["button"]} ${projectStyles["button-transparent"]} `}
            >
              Log in
            </button>
          </div>
        </div>
        <div className={styles["Image1"]}>
          <img
            alt="displays the media file"
            src="/playground_assets/hero-600w.png"
            className={styles["hero-image"]}
          />
          <img
            alt="displays the media file"
            src="/playground_assets/union-400w.png"
            className={styles["graphic-top"]}
          />
          <img
            alt="displays the media file"
            src="/playground_assets/group%2018-1200w.png"
            className={styles["image2"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
