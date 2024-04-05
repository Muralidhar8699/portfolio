"use client";
import React, { useEffect } from "react";
import styles from "./styles/logo.module.scss";

export default function Logo() {
  return (
    <div className={styles.logo_div}>
      <img
        src="https://res.cloudinary.com/dw74xtlxl/image/upload/v1711707464/d1aogg1jugxkeqec0yyi.png"
        alt="logo"
      />
      <p>Folio</p>
    </div>
  );
}
