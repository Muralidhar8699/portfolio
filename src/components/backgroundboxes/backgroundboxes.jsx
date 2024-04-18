"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./background.module.scss";

export default function BackgroundBoxes() {
  const rows = new Array(40).fill(1);
  const cols = new Array(30).fill(1);
  let colors = [
    "#48BB78",
    "#F56565",
    "#38A169",
    "#D69E2E",
    "#E53E3E",
    "#9F7AEA",
    "#4299E1",
    "#667EEA",
    "#9F7AEA",
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={styles.main_boxdiv}
    >
      {rows.map((_, i) => (
        <motion.div key={`row` + i} className={styles.sub_div}>
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `var(${getRandomColor()})`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className={styles.boxes_div}
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={styles.svgs}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  ></path>
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}
