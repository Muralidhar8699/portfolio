"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./selection.module.scss";
import { projectsRouteData } from "../utils/projectsData";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Reorder } from "framer-motion";

export default function SelectionPage() {
  const [items, setItems] = useState(projectsRouteData);
  const router = useRouter();
  return (
      <Reorder.Group className={styles.card_div} axis="y" values={items} onReorder={setItems}>
        {items.map((project) => {
          return (
            <Reorder.Item
              whileHover={{ scale: 1.2, type: "spring", stiffeness: 800 }}
              whileTap={{ backgroundColor: "#fec401" }}
              onClick={() => {
                router.push(`/home/projects/${project.path}`);
              }}
              value={project}
              key={project._id}
              className={styles.card}
            >
              <motion.p className={styles.pro_name}>{project.name}</motion.p>
              <FaArrowRight className={styles.icon} />
            </Reorder.Item>
          );
        })}
      </Reorder.Group>
  );
}
