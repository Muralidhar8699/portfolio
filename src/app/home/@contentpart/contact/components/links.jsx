import React from "react";
import styles from "../contactStyles/links.module.scss";

export default function ContactLinks() {
  return (
    <div className={styles.main_cont}>
      <button>Github</button>
      <button>Instagram</button>
      <button>Linkedin</button>
      <button>Email</button>
    </div>
  );
}
