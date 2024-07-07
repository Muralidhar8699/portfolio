"use client";
import { message, Modal } from "antd";
import React, { useEffect, useState } from "react";
import gameStyles from "./styles/game.module.scss";
import { motion } from "framer-motion";
const intialCards = [
  { id: 1, content: "🍎" },
  { id: 2, content: "🍊" },
  { id: 3, content: "🍌" },
  { id: 4, content: "🍇" },
  { id: 5, content: "🍓" },
  { id: 6, content: "🍉" },
  { id: 7, content: "🍒" },
  { id: 8, content: "🍍" },
];

export default function Game() {
  const shuffleCards = () => {
    const duplicateCards = [...intialCards, ...intialCards];
    for (let i = duplicateCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i + 1);
      [duplicateCards[i], duplicateCards[j]] = [
        duplicateCards[j],
        duplicateCards[i],
      ];
    }
    return duplicateCards;
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cards, setCards] = useState(shuffleCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleCancelGame = () => {
    setIsModalOpen(false);
    setCards(shuffleCards());
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstIndex, secondIndex] = flippedCards;
      if (cards[firstIndex].content === cards[secondIndex].content) {
        setMatchedCards([...matchedCards, firstIndex, secondIndex]);
      }
      setTimeout(() => setFlippedCards([]), 1500);
      setMoves(moves + 1);
    }
    if (matchedCards.length === 16) {
      message.success(
        <p style={{ width: "15rem", fontSize: "1.3rem" }}>You Won 🥳🍾</p>
      );
    }
  }, [flippedCards]);

  const handleCardClick = (index) => {
    if (
      flippedCards.length < 2 &&
      !flippedCards.includes(index) &&
      !matchedCards.includes(index)
    ) {
      setFlippedCards([...flippedCards, index]);
    }
  };
  const restartGame = () => {
    setCards(shuffleCards());
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
  };

  return (
    <>
      <button className={gameStyles.game_btn} onClick={showModal}>
        Play game
      </button>
      <Modal
        centered={true}
        width={600}
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <section className={gameStyles.main_sec}>
          <div className={gameStyles.heading}>Match the pairs 🤔</div>
          <div className={gameStyles.cards_cont}>
            <div className={gameStyles.score_div}>
              <span>
                <p>Pair matched : </p>
                <p>{matchedCards.length / 2}</p>
              </span>
              <span>
                <p>Total moves : </p>
                <p>{moves}</p>
              </span>
            </div>
            <div className={gameStyles.modal_content}>
              {cards.map((card, ind) => (
                <div
                  key={ind}
                  className={gameStyles.scene}
                  onClick={() => handleCardClick(ind)}
                >
                  <div
                    className={`${gameStyles.card} ${
                      flippedCards.includes(ind) || matchedCards.includes(ind)
                        ? gameStyles.isFlipped
                        : ""
                    }`}
                  >
                    <div
                      className={`${gameStyles.card__face} ${gameStyles.card__face__front}`}
                    >
                      ❓
                    </div>
                    <div
                      className={`${gameStyles.card__face} ${gameStyles.card__face__back}`}
                    >
                      {card.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={gameStyles.btn_div}>
            <button onClick={restartGame}>Reset game</button>
            <button onClick={handleCancelGame}>End game</button>
          </div>
        </section>
      </Modal>
    </>
  );
}
