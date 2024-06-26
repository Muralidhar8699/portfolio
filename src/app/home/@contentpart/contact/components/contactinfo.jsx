"use client";
import React, { useState } from "react";
import styles from "../contactStyles/contactinfo.module.scss";
import { FaClipboardCheck } from "react-icons/fa";
import { BsClipboard2PlusFill } from "react-icons/bs";
import { motion } from "framer-motion";

export default function ContactInfo() {
  const email = "muralidhar8699@gmail.com";
  const [copy, setcopy] = useState(true);
  const handleCopy = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => console.log("copied"))
      .catch(() => console.error("failed to copy"));
  };
  return (
    <div className={styles.main_cont}>
      <div className={styles.first_div}>
        <h3>Contact Info</h3>
        <h1>Get In Touch</h1>
        <p>Don&#39;t be afraid man! Just say hello</p>
      </div>
      <div className={styles.second_div}>
        <div className={styles.div_1}>
          <a>
            <motion.svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 3 }}
                d="M29.2907 24.4413C29.2907 24.9213 29.1841 25.4146 28.9574 25.8946C28.7307 26.3746 28.4374 26.828 28.0507 27.2546C27.3974 27.9746 26.6774 28.4946 25.8641 28.828C25.0641 29.1613 24.1974 29.3346 23.2641 29.3346C21.9041 29.3346 20.4507 29.0146 18.9174 28.3613C17.3841 27.708 15.8507 26.828 14.3307 25.7213C12.7974 24.6013 11.3441 23.3613 9.9574 21.988C8.58406 20.6013 7.34406 19.148 6.2374 17.628C5.14406 16.108 4.26406 14.588 3.62406 13.0813C2.98406 11.5613 2.66406 10.108 2.66406 8.7213C2.66406 7.81464 2.82406 6.94797 3.14406 6.14797C3.46406 5.33464 3.97073 4.58797 4.6774 3.9213C5.53073 3.0813 6.46406 2.66797 7.45073 2.66797C7.82406 2.66797 8.1974 2.74797 8.53073 2.90797C8.8774 3.06797 9.18406 3.30797 9.42406 3.65464L12.5174 8.01464C12.7574 8.34797 12.9307 8.65464 13.0507 8.94797C13.1707 9.22797 13.2374 9.50797 13.2374 9.7613C13.2374 10.0813 13.1441 10.4013 12.9574 10.708C12.7841 11.0146 12.5307 11.3346 12.2107 11.6546L11.1974 12.708C11.0507 12.8546 10.9841 13.028 10.9841 13.2413C10.9841 13.348 10.9974 13.4413 11.0241 13.548C11.0641 13.6546 11.1041 13.7346 11.1307 13.8146C11.3707 14.2546 11.7841 14.828 12.3707 15.5213C12.9707 16.2146 13.6107 16.9213 14.3041 17.628C15.0241 18.3346 15.7174 18.988 16.4241 19.588C17.1174 20.1746 17.6907 20.5746 18.1441 20.8146C18.2107 20.8413 18.2907 20.8813 18.3841 20.9213C18.4907 20.9613 18.5974 20.9746 18.7174 20.9746C18.9441 20.9746 19.1174 20.8946 19.2641 20.748L20.2774 19.748C20.6107 19.4146 20.9307 19.1613 21.2374 19.0013C21.5441 18.8146 21.8507 18.7213 22.1841 18.7213C22.4374 18.7213 22.7041 18.7746 22.9974 18.8946C23.2907 19.0146 23.5974 19.188 23.9307 19.4146L28.3441 22.548C28.6907 22.788 28.9307 23.068 29.0774 23.4013C29.2107 23.7346 29.2907 24.068 29.2907 24.4413Z"
                stroke="black"
                stroke-width="1.5"
                stroke-miterlimit="10"
              ></motion.path>
            </motion.svg>
          </a>
          <div>
            <h3>Phone </h3>

            <p>9346053504</p>
          </div>
        </div>
        <div className={styles.div_2}>
          <a>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut", delay: 3 }}
                d="M9.86625 8.42687L21.1863 4.65354C26.2663 2.96021 29.0263 5.73354 27.3463 10.8135L23.5729 22.1335C21.0396 29.7469 16.8796 29.7469 14.3463 22.1335L13.2262 18.7735L9.86625 17.6535C2.25292 15.1202 2.25292 10.9735 9.86625 8.42687Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></motion.path>
              <motion.path
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 3 }}
                d="M13.4766 18.2007L18.2499 13.4141"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></motion.path>
            </svg>
          </a>
          <div>
            <div className={styles.copy_div}>
              <h3>Email</h3>
              {copy ? (
                <BsClipboard2PlusFill
                  onClick={() => {
                    handleCopy();
                    setcopy(!copy);
                  }}
                  className={styles.copy_icon}
                />
              ) : (
                <FaClipboardCheck
                  onClick={() => {
                    handleCopy();
                    setcopy(!copy);
                  }}
                  className={styles.copy_icon}
                />
              )}
            </div>
            <p>{email}</p>
          </div>
        </div>
        <div className={styles.div_3}>
          <a>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut", delay: 3 }}
                d="M16.0037 17.9059C18.3013 17.9059 20.1637 16.0434 20.1637 13.7459C20.1637 11.4484 18.3013 9.58594 16.0037 9.58594C13.7062 9.58594 11.8438 11.4484 11.8438 13.7459C11.8438 16.0434 13.7062 17.9059 16.0037 17.9059Z"
                stroke="black"
                stroke-width="1.5"
              ></motion.path>
              <motion.path
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut", delay: 3 }}
                d="M4.82367 11.3213C7.45034 -0.225362 24.557 -0.212028 27.1703 11.3346C28.7037 18.108 24.4903 23.8413 20.797 27.388C18.117 29.9746 13.877 29.9746 11.1837 27.388C7.50367 23.8413 3.29034 18.0946 4.82367 11.3213Z"
                stroke="black"
                stroke-width="1.5"
              ></motion.path>
            </svg>
          </a>
          <div>
            <h3>Address</h3>
            <p>Visakhapatnam, AP</p>
          </div>
        </div>
      </div>
    </div>
  );
}
