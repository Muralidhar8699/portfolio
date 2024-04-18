import React from "react";
import styles from "../contactStyles/contactform.module.scss";
import { GoArrowUp } from "react-icons/go";

export default function ContactForm() {
  return (
    <div className={styles.main_cont}>
      <div className={styles.first_div}>
        <div className={styles.div_1}>
          <div>
            <label htmlFor="name">Name :</label>
            <input type="text" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="phone">Phone :</label>
            <input type="text" placeholder="Your phone" />
          </div>
        </div>
        <div className={styles.div_2}>
          <div>
            <label htmlFor="email">Email :</label>
            <input type="email" placeholder="Your email" />
          </div>
          <div>
            <label htmlFor="subject">Subject :</label>
            <input type="text" placeholder="Your subject" />
          </div>
        </div>
      </div>
      <div className={styles.second_div}>
        <label>Message</label>
        <textarea
          placeholder="Type your message..."
          className={styles.textarea}
        ></textarea>
      </div>
      <div className={styles.third_div}>
        <button className={styles.submit_btn}>Submit now</button>
        <button className={styles.arrow_btn}>
          <GoArrowUp className={styles.arrow} />
        </button>
      </div>
    </div>
  );
}
