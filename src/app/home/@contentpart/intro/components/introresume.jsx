import React from "react";
import styles from "../Introstyles/introresume.module.scss";

export default function IntroResume() {
  return (
    <div className={styles.resume_div}>
      <div className={styles.first_div}>
        <div class={styles.marquee}>
          <div class={styles.marquee__content}>
            <ul class={styles.list_inline}>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </div>
        </div>
        <div class={styles.marquee_2}>
          <div class={styles.marquee__content}>
            <ul class={styles.list_inline}>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.second_div}>
        <div class={styles.marquee_3}>
          <div class={styles.marquee__content}>
            <ul class={styles.list_inline}>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </div>
        </div>
        <div class={styles.marquee_4}>
          <div class={styles.marquee__content}>
            <ul class={styles.list_inline}>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
