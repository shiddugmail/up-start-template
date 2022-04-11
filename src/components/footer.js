import React from "react";

import projectStyles from "../style.module.css";
import styles from "./footer.module.css";

const Footer = (props) => {
  return (
    <footer className={styles["Footer"]}>
      <div className={styles["LinksContainer"]}>
        <div className={styles["Container07"]}>
          <div className={projectStyles["footer-column"]}>
            <span className={styles["text061"]}>Product</span>
            <span className={styles["text062"]}>How it works</span>
            <span className={styles["text063"]}>Features</span>
            <span className={styles["text064"]}>Pricing</span>
            <span className={styles["text065"]}>Blog</span>
            <span>FAQ</span>
          </div>
          <div className={projectStyles["footer-column"]}>
            <span className={styles["text067"]}>App</span>
            <span className={styles["text068"]}>Download iOS app</span>
            <span className={styles["text069"]}>Download Android app</span>
            <span className={styles["text070"]}>Log in to Portal</span>
            <span className={styles["text071"]}>Administrative</span>
            <span>Legal</span>
          </div>
          <div className={projectStyles["footer-column"]}>
            <span className={styles["text073"]}>Company</span>
            <span className={styles["text074"]}>About us</span>
            <span className={styles["text075"]}>Culture</span>
            <span className={styles["text076"]}>Code of conduct</span>
            <span className={styles["text077"]}>Careers</span>
            <span className={styles["text078"]}>News</span>
            <span>Contact</span>
          </div>
          <div className={projectStyles["footer-column"]}>
            <span className={styles["text080"]}>Invest</span>
            <span className={styles["text081"]}>Commodity</span>
            <span className={styles["text082"]}>Savings</span>
            <span className={styles["text083"]}>
              <span>Taxes and fees</span>
              <br></br>
              <span></span>
            </span>
            <span className={styles["text086"]}>
              <span>Currency exchange</span>
            </span>
            <span>Community</span>
          </div>
          <div className={projectStyles["footer-column"]}>
            <span className={styles["text089"]}>Security</span>
            <span className={styles["text090"]}>Security status</span>
            <span className={styles["text091"]}>ISO</span>
            <span className={styles["text092"]}>System status</span>
            <span>Customer Help</span>
          </div>
          <div className={projectStyles["footer-column"]}>
            <span className={styles["text094"]}>Follow</span>
            <span className={styles["text095"]}>Instagram</span>
            <span className={styles["text096"]}>Twitter</span>
            <span className={styles["text097"]}>Facebook</span>
            <span className={styles["text098"]}>Tik Tok</span>
            <span className={styles["text099"]}>Linkedln</span>
            <span>Youtube</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
