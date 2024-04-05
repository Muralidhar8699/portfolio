import React from "react";
import styles from "./home.module.scss"

export default function HomeLayout({ children,contentpart,navbar }) {
  return (
    <div className={styles.child_cont}>
      {children}
      <div className={styles.nav_cont}>{navbar}</div>
      <div className={styles.content_cont}>{contentpart}</div>
    </div>
  );
}
