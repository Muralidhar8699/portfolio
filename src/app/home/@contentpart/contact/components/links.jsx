import React from "react";
import styles from "../contactStyles/links.module.scss";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function ContactLinks() {
  return (
    <div className={styles.main_cont}>
      <a
        href="https://github.com/Muralidhar8699?tab=repositories"
        target="_blank"
      >
        <div>
          <FaGithub className={styles.icon} />
        </div>
        <p>Github</p>
      </a>
      <a>
        <div>
          <FaInstagram className={styles.icon} />
        </div>
        <p>Instagram</p>
      </a>
      <a>
        <div>
          <FaLinkedin className={styles.icon} />
        </div>
        <p>Linkedin</p>
      </a>
      <a>
        <div>
          <FaWhatsapp className={styles.icon} />
        </div>
        <p>What&#39;sapp</p>
      </a>
    </div>
  );
}
