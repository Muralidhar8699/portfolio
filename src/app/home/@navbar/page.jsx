import React from "react";
import styles from "./styles/navbar.module.scss";
import PagesComp from "./PagesComp";
import LetstalkComp from "./letstalkComp";
import Logo from "./logoComp";

export default function NavbarPage() {
  return (
    <div className={styles.navbar_div}>
      <Logo />
      <PagesComp />
      <LetstalkComp />
    </div>
  );
}
