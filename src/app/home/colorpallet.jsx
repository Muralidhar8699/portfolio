"use client";
import React, { useEffect, useState } from "react";
import Styles from "../styles/colorpallet.module.scss";
import { Modal } from "antd";

const colors = ["#fc7eff", "#b3eb16"];
export default function ColorPallet() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (selectedColor) {
      document.documentElement.style.setProperty("--yellow", selectedColor);
    }
  }, [selectedColor]);
  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className={Styles.large_div}
      ></div>
      <Modal
        title={<p>Select a Color</p>}
        open={isModalOpen}
        onCancel={handleCancel}
        width={400}
        footer={null}
      >
        <div>
          {colors.map((e) => (
            <div
              onClick={() => handleColorClick(e)}
              style={{ backgroundColor: e }}
            >
              hi
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
}
