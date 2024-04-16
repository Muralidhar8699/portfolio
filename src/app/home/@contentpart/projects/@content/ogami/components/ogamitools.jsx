"use client";
import React from "react";
import styles from "../styles/ogamitools.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export default function OgamiTools() {
  // const { scrollY } = useScroll();
  // const scale = useTransform(scrollY, [0, 100], [0, 3], { clamp: false });
  // const opacity = useTransform(scrollY, [0, 100], [0, 1], {
  //   clamp: false,
  // });
  return (
    // <motion.div style={{ scale, opacity }} className={styles.main_cont}>
    //   Tools
    // </motion.div>
    <div className={styles.main_cont}>Tools</div>
  );
}
