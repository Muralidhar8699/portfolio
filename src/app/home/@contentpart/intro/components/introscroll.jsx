import React from "react";
import styles from "../Introstyles/introscroll.module.scss";

export default function IntroScroll() {
  return (
    <div className={styles.scroll_div}>
      <marquee
        behavior="scroll"
        direction="left"
        loop="infinite"
        scrollamount="2"
      >
        <div className={styles.sub_div}>
          <img
            className={styles.img}
            src="https://themegenix.net/react/nerko-preview/assets/images/objects/orange-ball.png"
            alt="logo"
          />
          <p className={styles.text}>Latest Works and Features</p>
          <img
            className={styles.img}
            src="https://themegenix.net/react/nerko-preview/assets/images/objects/orange-ball.png"
            alt="logo"
          />
          <p className={styles.text}>Latest Works and Features</p>
        </div>
      </marquee>
    </div>
  );
}
