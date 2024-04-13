"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function CursorFollower() {
  const ref = useRef(null);
  const { x, y } = useCursorPosition(ref);
  return (
    <motion.div
      ref={ref}
      style={{ width: "5rem", height: "5rem", backgroundColor: "red" }}
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 3,
        stiffness: 50,
        restDelta: 0.001,
      }}
    />
  );
}

function useCursorPosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handlePointerMove = ({ clientX, clientY }) => {
      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPosition({ x, y });
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);
  return position;
}
