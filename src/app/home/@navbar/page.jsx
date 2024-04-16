"use client";
import React from "react";
import styles from "./styles/navbar.module.scss";
import PagesComp from "./PagesComp";
import LetstalkComp from "./letstalkComp";
import Logo from "./logoComp";
import { motion, useScroll, useTransform } from "framer-motion";

export default function NavbarPage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 200], [0, 0]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  return (
    <motion.div style={{ y, opacity }} className={styles.navbar_div}>
      <Logo />
      <PagesComp />
      <LetstalkComp />
    </motion.div>
  );
}
