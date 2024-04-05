import React from "react";
import styles from "./styles/letstalk.module.scss";
import { GoArrowUp } from "react-icons/go";
import { motion } from "framer-motion";

export default function LetstalkComp() {
  return (
    <div className={styles.main_div}>
      <button className={styles.talk_btn}>Let's Talk</button>
      <button className={styles.arrow_btn}>
        <GoArrowUp className={styles.arrow} />
      </button>
    </div>
  );
}
