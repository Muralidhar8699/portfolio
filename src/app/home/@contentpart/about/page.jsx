import React from "react";
import styles from "./aboutStyles/aboutpage.module.scss";
import AboutWorkWith from "./components/aboutworkwith";
import IntroAbout from "../intro/components/introabout";
import AboutPhoto from "./components/aboutphoto";
import AboutDescription from "./components/description";
import Education from "./components/education";
import SocialLinks from "./components/sociallinks";
import AboutProjects from "./components/aboutprojects";
import AboutDo from "./components/aboutdoing";

export default function AboutPage() {
  return (
    <>
      <div className={styles.about_cont}>
        <div className={styles.grid5}>
          <AboutDescription />
        </div>
        <div className={styles.grid1}>
          <AboutPhoto />
        </div>
        <div className={styles.grid6}>
          <AboutProjects />
        </div>
        <div className={styles.grid8}>
          <AboutDo />
        </div>
        <div className={styles.grid7}>
          <SocialLinks />
        </div>
        <div className={styles.grid2}>
          <IntroAbout />
        </div>
        <div className={styles.grid3}>
          <Education />
        </div>
        <div className={styles.grid4}>
          <AboutWorkWith />
        </div>
      </div>
    </>
  );
}
