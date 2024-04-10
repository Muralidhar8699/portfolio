"use client";
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
import { motion } from "framer-motion";

const IntroVariants = {
  hidden: {
    opacity: 0,
    // x: "-100vw",
  },
  visible: {
    opacity: 1,
    // x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
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
      type: "spring",
      mass: 0.4,
      damping: 8,
      duration: 0.5,
    },
  },
};

export default function IntroPage() {
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
          power: 0.9,
        }}
        className={styles.grid1}
      >
        <Introprofile />
      </motion.div>
      <motion.div variants={childrenVariants} className={styles.grid2}>
        <IntroScroll />
      </motion.div>
      <div className={styles.grid3}>3</div>
      <motion.div variants={childrenVariants} className={styles.grid4}>
        <IntroSkills />
      </motion.div>
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
      <motion.div
        drag
        dragTransition={{
          power: 0.9,
        }}
        className={styles.grid9}
      >
        <IntroResume />
      </motion.div>
      <motion.div
        variants={childrenVariants}
        // initial={{ height: "1%" }}
        // animate={{ height: "100%" }}
        className={styles.grid10}
      >
        <IntroServices />
      </motion.div>
    </motion.div>
  );
}
