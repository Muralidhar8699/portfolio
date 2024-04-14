"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./selection.module.scss";
import { projectsRouteData } from "../utils/projectsData";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Reorder } from "framer-motion";

export default function SelectionPage() {
  const router = useRouter();
  return (
    <div className={styles.card_div}>
      {projectsRouteData.map((project) => {
        return (
          <motion.button
            whileHover={{ scale: 1.2, type: "spring", stiffeness: 800 }}
            whileTap={{ backgroundColor: "#fec401" }}
            onClick={() => {
              router.push(`/home/projects/${project.path}`);
            }}
            key={project._id}
            className={styles.card}
          >
            <motion.p className={styles.pro_name}>{project.name}</motion.p>
            <FaArrowRight className={styles.icon} />
          </motion.button>
        );
      })}
    </div>
  );
}
