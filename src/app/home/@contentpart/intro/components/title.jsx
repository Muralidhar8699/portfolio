import React from "react";
import styles from "../Introstyles/introtitle.module.scss";
import { motion } from "framer-motion";
const parentVariant = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
      delay: 3,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};
const childVariants = {
  hidden: {
    opacity: 0,
    x: "-10vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 8,
    },
  },
};
export default function IntroTitle() {
  return (
    <motion.div
      variants={parentVariant}
      initial="hidden"
      animate="visible"
      className={styles.title_div}
    >
      <motion.span variants={childVariants} className={styles.title}>
        Title
      </motion.span>
      <motion.div variants={childVariants} className={styles.wrapper}>
        MERN
      </motion.div>
      <motion.span variants={childVariants} className={styles.fswd}>
        Full Stack Web Developer
      </motion.span>
    </motion.div>
  );
}
