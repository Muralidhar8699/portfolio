import React from "react";
import styles from "../Introstyles/introtitle.module.scss";

export default function IntroTitle() {
  return (
    <div className={styles.title_div}>
      <span className={styles.title}>Title</span>
      <span className={styles.mern}>MERN</span>
      <span className={styles.fswd}>Full Stack Web Developer</span>
    </div>
  );
}
