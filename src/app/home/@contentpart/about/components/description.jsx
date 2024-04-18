"use client";
import React from "react";
import styles from "../aboutStyles/aboutdesc.module.scss";
import BackgroundBoxes from "@/components/backgroundboxes/backgroundboxes";

export default function AboutDescription() {
  return (
    <div className={styles.main_cont}>
      <div
        className={styles.empty}
        style={{ maskImage: "radial-gradient(transparent, white)" }}
      />
      <BackgroundBoxes />
      <h1 className={styles.text1}>Muralidhar</h1>
      <h1 className={styles.text2}>Fullstack Developer</h1>
    </div>
  );
}
