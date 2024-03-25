"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./selection.module.scss";
import { projectsRouteData } from "../utils/projectsData";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function SelectionPage() {
  const [active, setActive] = useState(1);
  const router = useRouter();
  return (
    <div className={styles.card_div}>
      {projectsRouteData.map((project) => {
        return (
          <motion.button
            onClick={() => {
              router.push(`/projects/${project.path}`);
              setActive(project._id);
            }}
            key={project._id}
            className={styles.card}
          >
            {active === project._id && (
              <motion.div
                layoutId="clickedbutton"
                transition={{
                  type: "spring",
                  stiffness: "100",
                  bounce: 0.3,
                  duration: 0.6,
                }}
                className={styles.active_span}
              />
            )}
            <p className={styles.pro_name}>{project.name}</p>
            <FaArrowRight className={styles.icon} />
          </motion.button>
        );
      })}
    </div>
  );
}
