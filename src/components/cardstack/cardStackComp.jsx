"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import cardStyle from "./cardStackComp.module.css";

export default function CardStackComp({
  items,
  offset = 10,
  scaleFactor = 0.06,
}) {
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();
  }, []);
  const startFlipping = () => {
    let interval = setInterval(() => {
      setCards((prevCards) => {
        const newArr = [...prevCards];
        newArr.unshift(newArr.pop());
        return newArr;
      });
    }, 5000);
    return () => clearInterval(interval);
  };
  return (
    <div className={cardStyle.container}>
      {cards.map((card, ind) => {
        return (
          <motion.div
            key={card.id}
            className={cardStyle.Card}
            transition={{ duration: 0.4 }}
            animate={{
              top: ind * -offset,
              scale: 1 - ind * scaleFactor,
              zIndex: cards.length - ind,
            }}
            style={{backgroundImage:`url(${card.img})`}}
          >
            <div className={cardStyle.content}>{card.desc}</div>
            <div>
              <p className={cardStyle.name}>{card.title}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
