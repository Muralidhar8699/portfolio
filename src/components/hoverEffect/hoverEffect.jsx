"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./hover.module.scss";
import { usePathname } from "next/navigation";

export default function HoverEffect({ titles, className }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [active, setActive] = useState("Home");
  const pathname = usePathname();
  useEffect(() => {
    const currentPath = pathname;
    const activeTitle = titles.find((item) => item.path === currentPath)?.title;
    setActive(activeTitle || null);
  }, [pathname, titles]);
  return (
    <div className={styles.main_container}>
      {titles.map((item, idx) => (
        <Link
          href={item?.path}
          key={item?.path}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={styles.link}
        >
          <>
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.div
                  layoutId="hoverBackground"
                  transition={{
                    type: "spring",
                    stiffness: "100",
                    bounce: 0.3,
                    duration: 0.6,
                  }}
                  className={styles.active_span}
                />
              )}
            </AnimatePresence>
            {active === item.title && (
              <motion.div
                layoutId="clickedbutton"
                transition={{
                  type: "spring",
                  stiffness: "100",
                  bounce: 0.3,
                  duration: 0.4,
                }}
                className={styles.current_active_span}
              />
            )}
          </>
          <Card>
            <CardTitle>{item.title}</CardTitle>
          </Card>
        </Link>
      ))}
    </div>
  );
}
export const Card = ({ children }) => {
  return (
    <div className={styles.card_maindiv}>
      <div className={styles.card_subdiv}>
        <div>{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({ className, children }) => {
  return <p className={styles.cardtitle}>{children}</p>;
};
