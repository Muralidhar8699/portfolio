import React from "react";
import styles from "./ogamipage.module.scss";
import OgamiTech from "./components/ogamitech";
import OgamiTools from "./components/ogamitools";
import OgamiImages from "./components/ogamiimages";
import OgamiText from "./components/ogamitext";

export default function OgamiPage() {
  return (
    <div className={styles.main_cont}>
      <div className={styles.grid_1}>
        <OgamiText />
      </div>
      <div className={styles.grid_2}>
        <OgamiImages />
        <div className={styles.attachement_1} />
        <div className={styles.attachement_2} />
        <div className={styles.attachement_3} />
      </div>
      <div className={styles.grid_3}>3</div>
      <div className={styles.grid_4}>
        <OgamiTech />
      </div>
      <div className={styles.grid_5}>
        <OgamiTools />
      </div>
    </div>
  );
}
