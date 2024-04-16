"use client";
import React from "react";
import styles from "../aboutStyles/abouteduc.module.scss";
import { useScroll, motion, useTransform } from "framer-motion";

export default function Education() {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 300], [100, 0]);
  const scale = useTransform(scrollY, [0, 300], [0, 1]);
  return (
    <motion.div style={{ x,scale }} className={styles.main_cont}>
      Education
    </motion.div>
  );
}
