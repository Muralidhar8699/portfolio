import React from "react";
import styles from "./aboutStyles/aboutpage.module.scss";

export default function AboutPage() {
  return (
    <div className={styles.about_cont}>
      <div className={styles.grid1}>
        1<h1>photo</h1>
      </div>
      <div className={styles.grid2}>
        2<h1>profile</h1>
      </div>
      <div className={styles.grid3}>
        3<h1>Education</h1>
      </div>
      <div className={styles.grid4}>
        4<h1>Link to Contact</h1>
      </div>
      <div className={styles.grid5}>
        5<h1>Description</h1>
      </div>
      <div className={styles.grid6}>6</div>
      <div className={styles.grid7}>7</div>
      <div className={styles.grid8}>
        8<h1>What I Do</h1>
      </div>
    </div>
  );
}
