"use client";
import React, { useRef } from "react";
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
import { motion, useInView } from "framer-motion";

const IntroVariants = {
  hidden: {
    opacity: 0,
    width: "10%",
  },
  visible: {
    opacity: 1,
    width: "100%",
    pathLength: 1,
    transition: {
      delay: 0.3,
      duration: 0.9,
      type: "tween",
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};
const childrenVariants = {
  hidden: { opacity: 0, height: "1%" },
  visible: {
    height: "100%",
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.8,
    },
  },
};

export default function IntroPage() {
  const container = useRef(null);
  const isInView = useInView(container, { once: true });
  return (
    <motion.div
      variants={IntroVariants}
      initial="hidden"
      animate="visible"
      className={styles.Intro_cont}
    >
      <motion.div
        variants={childrenVariants}
        drag
        dragTransition={{
          power: 0.2,
        }}
        className={styles.grid1}
      >
        <Introprofile />
      </motion.div>
      <motion.div variants={childrenVariants} className={styles.grid2}>
        <IntroScroll />
      </motion.div>
      <div className={styles.grid3}>3</div>
      <div
        ref={container}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className={styles.grid4}
      >
        <IntroSkills />
      </div>
      <div
        ref={container}
        style={{
          transform: isInView ? "none" : "translateX(-400px)",
          opacity: isInView ? 1 : 0,
          transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
        className={styles.grid5}
      >
        <IntroWorkWith />
      </div>
      <div className={styles.grid6}>
        <IntroLatestwork />
      </div>
      <motion.div variants={childrenVariants} className={styles.grid7}>
        <IntroTitle />
      </motion.div>
      <div className={styles.grid8}>
        <IntroAbout />
      </div>
      <motion.div
        drag
        dragTransition={{
          min: 0,
          max: 0,
          bounceStiffness: 800,
        }}
        className={styles.grid9}
      >
        <IntroResume />
      </motion.div>
      <motion.div variants={childrenVariants} className={styles.grid10}>
        <IntroServices />
      </motion.div>
    </motion.div>
  );
}
