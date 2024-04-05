import React from "react";
import styles from "./Introstyles/intropage.module.scss";
import Introprofile from "./components/introprofile";
import IntroTitle from "./components/title";
import IntroSkills from "./components/introskills";
import IntroLatestwork from "./components/latestwork";
import IntroWorkWith from "./components/workwith";
import IntroAbout from "./components/introabout";
import IntroServices from "./components/introservices";
import IntroScroll from "./components/introscroll";
import IntroResume from "./components/introresume";

export default function IntroPage() {
  return (
    <div className={styles.Intro_cont}>
      <div className={styles.grid1}>
        <Introprofile />
      </div>
      <div className={styles.grid2}>
        <IntroScroll />
      </div>
      <div className={styles.grid3}>3</div>
      <div className={styles.grid4}>
        <IntroSkills />
      </div>
      <div className={styles.grid5}>
        <IntroWorkWith />
      </div>
      <div className={styles.grid6}>
        <IntroLatestwork />
      </div>
      <div className={styles.grid7}>
        <IntroTitle />
      </div>
      <div className={styles.grid8}>
        <IntroAbout />
      </div>
      <div className={styles.grid9}>
        <IntroResume />
      </div>
      <div className={styles.grid10}>
        <IntroServices />
      </div>
    </div>
  );
}
