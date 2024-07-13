"use client";
import React from "react";
import styles from "./home.module.scss";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/loading/loading";
import { AnimatePresence, motion } from "framer-motion";
import ColorPallet from "./colorpallet";

export default function HomeLayout({ children, contentpart, navbar }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <AnimatePresence>
        {loading ? (
          <LoadingScreen />
        ) : (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className={styles.child_cont}
          >
            {children}
            <div className={styles.nav_cont}>{navbar}</div>
            <div className={styles.content_cont}>{contentpart}</div>
            <div className={styles.color_pallet}>
              <ColorPallet />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
