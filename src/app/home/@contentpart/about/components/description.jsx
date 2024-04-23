"use client";
import React from "react";
import styles from "../aboutStyles/aboutdesc.module.scss";
import BackgroundBoxes from "@/components/backgroundboxes/backgroundboxes";
import H from "@/components/cardstack/highlight";

export default function AboutDescription() {
  return (
    <div className={styles.main_cont}>
      <div
        className={styles.empty}
        style={{ maskImage: "radial-gradient(transparent, white)" }}
      />
      <BackgroundBoxes />
      <h1 className={styles.text1}>Hi, I&#39;am Muralidhar</h1>
      <h1 className={styles.text2}>
        I develop Full Stack Wep Applications, using
        <br />
        <strong>MERN Stack 🧑‍💻</strong>
      </h1>
      <p className={styles.text3}>
        I&#39;m a skilled software developer with experience in <H>JavaScript</H>, and
        expertise in frameworks like <H>React</H>, <H>Node.js</H>, <H>Next.js</H>
        , <H>Express.js</H> and <H>MongoDB</H>. I&#39;m a quick learner and collaborate closely
        with clients to create efficient, scalable, and user-friendly solutions
        that solve real-world problems. Let&#39;s work together to bring your ideas
        to life!
      </p>
    </div>
  );
}
