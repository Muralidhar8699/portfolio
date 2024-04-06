import React from "react";
import styles from "../Introstyles/introservices.module.scss";
import CardStackComp from "@/components/cardstack/cardStackComp";

// const Cards = [
//   {
//     id: 1,
//     img: "https://res.cloudinary.com/dw74xtlxl/image/upload/v1711256952/pickbazar/csvgno6ojqzec7irhrjv.png",
//     title: "Pick Bazar",
//     desc: "",
//   },
//   {
//     id: 2,
//     img: "https://res.cloudinary.com/dw74xtlxl/image/upload/v1711258335/ogami/pzy9nw4dnrq5e8ulwzll.png",
//     title: "Ogami",
//     desc: "",
//   },
//   {
//     id: 3,
//     img: "https://res.cloudinary.com/dw74xtlxl/image/upload/v1712396849/sinalxiycj6y00xjddk2.png",
//     title: "World Tour",
//     desc: "",
//   },
//   {
//     id: 4,
//     img: "https://res.cloudinary.com/dw74xtlxl/image/upload/v1711264314/faraway/ilu3pxdyz6wshiqvxj77.png",
//     title: "Faraway",
//     desc: "",
//   },
//   {
//     id: 5,
//     img: "https://res.cloudinary.com/dw74xtlxl/image/upload/v1712397113/v4avbrr07dwynphffcb9.png",
//     title: "Dashboard",
//     desc: "",
//   },
// ];

export default function IntroServices() {
  return (
    <div className={styles.service_cont}>
      {/* <div className={styles.comp_div}>
        <CardStackComp items={Cards} />
      </div> */}
      <div className={styles.link_div}>
        <p className={styles.text}>All Projects</p>
        <span className={styles.logo_div}>
          <svg
            width="58"
            height="40"
            viewBox="0 0 58 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.logo}
          >
            <path
              d="M19.7674 28.2202C21.6527 32.4019 24.9182 35.8085 29.0165 37.8689C33.1148 39.9293 37.7968 40.5183 42.2777 39.5372C46.7587 38.5561 50.7661 36.0645 53.6285 32.48C56.4908 28.8955 58.034 24.4361 57.9994 19.8492C57.9648 15.2622 56.3545 10.8266 53.4385 7.28568C50.5224 3.74481 46.4778 1.31394 41.9825 0.400527C37.4873 -0.512885 32.8147 0.146678 28.748 2.26866C24.6812 4.39065 21.4675 7.84608 19.6455 12.0558L20.7467 12.5324C22.4595 8.57532 25.4804 5.32721 29.3031 3.33255C33.1259 1.33788 37.5181 0.717889 41.7436 1.5765C45.9691 2.4351 49.771 4.72012 52.5122 8.04854C55.2533 11.377 56.7669 15.5465 56.7995 19.8582C56.832 24.1699 55.3814 28.3618 52.6908 31.7312C50.0002 35.1006 46.2331 37.4427 42.0211 38.3649C37.809 39.2872 33.4079 38.7335 29.5555 36.7967C25.7031 34.86 22.6335 31.6578 20.8613 27.727L19.7674 28.2202Z"
              fill="grey"
            ></path>
            <path
              d="M40.5303 20.5303C40.8232 20.2374 40.8232 19.7626 40.5303 19.4697L35.7574 14.6967C35.4645 14.4038 34.9896 14.4038 34.6967 14.6967C34.4038 14.9896 34.4038 15.4645 34.6967 15.7574L38.9393 20L34.6967 24.2426C34.4038 24.5355 34.4038 25.0104 34.6967 25.3033C34.9896 25.5962 35.4645 25.5962 35.7574 25.3033L40.5303 20.5303ZM-6.55671e-08 20.75L40 20.75L40 19.25L6.55671e-08 19.25L-6.55671e-08 20.75Z"
              fill="grey"
              className={styles.logo}
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
}
