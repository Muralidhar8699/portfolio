import React from "react";
import styles from "./projects.module.scss";

export default function Projectslayout({ children, content, selection }) {
  return (
    <section className={styles.main_container}>
      {children}
      <div className={styles.selection_div}>{selection}</div>
      <div className={styles.content_div}>{content}</div>
    </section>
  );
}
