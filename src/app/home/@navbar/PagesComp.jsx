"use client";

import React from "react";
import styles from "./styles/pages.module.scss";
import HoverEffect from "@/components/hoverEffect/hoverEffect";
const PathData = [
  {
    title: "Home",
    path: "/home/intro",
  },
  {
    title: "About",
    path: "/home/about",
  },
  {
    title: "Projects",
    path: "/home/projects",
  },
  {
    title: "Contact",
    path: "/home/contact",
  },
];

export default function PagesComp() {
  return (
    <section className={styles.main_div}>
      <div className={styles.titles_div}>
        <HoverEffect titles={PathData} />
      </div>
      <div className={styles.checkbox_54}>
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={styles.slider}></span>
        </label>
      </div>
    </section>
  );
}
