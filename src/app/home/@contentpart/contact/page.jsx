import React from "react";
import styles from "./contactStyles/contactpage.module.scss";
import ContactForm from "./components/contactform";
import ContactInfo from "./components/contactinfo";
import ContactLinks from "./components/links";

export default function ContactPage() {
  return (
    <div className={styles.contact_cont}>
      <div className={styles.first_div}>
        <ContactLinks />
      </div>
      <div className={styles.second_div}>
        <ContactInfo />
      </div>
      <div className={styles.third_div}>
        <ContactForm />
      </div>
    </div>
  );
}
