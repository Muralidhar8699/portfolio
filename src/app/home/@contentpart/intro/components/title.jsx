import React from "react";
import styles from "../Introstyles/introtitle.module.scss";

export default function IntroTitle() {
  return (
    <div className={styles.title_div}>
      <span className={styles.title}>Title</span>
      <div className={styles.wrapper}>
        <svg className={styles.svg}>
          <text x="50%" y="50%" dy=".35em" text-anchor="middle">
            MERN
          </text>
        </svg>
      </div>
      <span className={styles.fswd}>Full Stack Web Developer</span>
    </div>
  );
}
