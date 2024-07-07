import React from "react";
import styles from "../Introstyles/introresume.module.scss";
const skills = ["HTML", "CSS", "JavaScript", "React", "Next"];
const SkillsImgs = [
  {
    link: "https://res.cloudinary.com/cliqtick/image/upload/v1713331668/888909_mijum6.png",
    name: "html",
  },
  {
    link: "https://res.cloudinary.com/dw74xtlxl/image/upload/v1714030141/dazodlaaqji3oilnfogg.png",
    name: "css",
  },
  {
    link: "https://res.cloudinary.com/cliqtick/image/upload/v1713331748/6ec0044baf090ccf6653d22f948bf929_qxunrx.jpg",
    name: "js",
  },
  {
    link: "https://res.cloudinary.com/cliqtick/image/upload/v1713609163/31258989320f890e4330b75bfebaedcb_lrhwdu.png",
    name: "react",
  },
  {
    link: "https://res.cloudinary.com/dw74xtlxl/image/upload/v1714027827/icao3jrwod8bifdljrhy.svg",
    name: "next",
  },
  {
    link: "https://res.cloudinary.com/dw74xtlxl/image/upload/v1714027921/o6umyxpnrqp8pjwolbtz.png",
    name: "redux",
  },
  {
    link: "https://res.cloudinary.com/dw74xtlxl/image/upload/v1714028524/slyllx9hdqggpmmldzom.png",
    name: "scss",
  },
  {
    link: "https://res.cloudinary.com/dw74xtlxl/image/upload/v1714028770/qys9p0jwkzwtowgovqrx.png",
    name: "tailwind",
  },
];
const backendImgs = [
  {
    link: "https://res.cloudinary.com/dw74xtlxl/image/upload/v1714027747/b0wxzpcievicif6ejlbs.png",
    name: "node",
  },
  {
    link: "https://res.cloudinary.com/dw74xtlxl/image/upload/v1714028420/ovowyhulryyesnzl7msw.png",
    name: "express",
  },
  {
    link: "https://res.cloudinary.com/dw74xtlxl/image/upload/v1714027747/b0wxzpcievicif6ejlbs.png",
    name: "node",
  },
  {
    link: "https://res.cloudinary.com/dw74xtlxl/image/upload/v1714027691/xwa7yuikm0diqenwvwdn.jpg",
    name: "mongodb",
  },
  {
    link: "https://res.cloudinary.com/cliqtick/image/upload/v1713332230/png-clipart-github-repository-computer-icons-logo-github-blue-git_clqsdy.png",
    name: "github",
  },
  {
    link: "https://res.cloudinary.com/dw74xtlxl/image/upload/v1714028652/hgmgd9wdeegl1fu75iow.png",
    name: "git",
  },
  {
    link: "https://res.cloudinary.com/dw74xtlxl/image/upload/v1714027691/xwa7yuikm0diqenwvwdn.jpg",
    name: "mongodb",
  },
  {
    link: "https://res.cloudinary.com/cliqtick/image/upload/v1713332230/png-clipart-github-repository-computer-icons-logo-github-blue-git_clqsdy.png",
    name: "github",
  },
  {
    link: "https://res.cloudinary.com/dw74xtlxl/image/upload/v1714028652/hgmgd9wdeegl1fu75iow.png",
    name: "git",
  },
];
const ToolsImgs = [
  {
    link: "https://res.cloudinary.com/cliqtick/image/upload/v1713332230/png-clipart-github-repository-computer-icons-logo-github-blue-git_clqsdy.png",
    name: "github",
  },
  {
    link: "https://res.cloudinary.com/dw74xtlxl/image/upload/v1714028652/hgmgd9wdeegl1fu75iow.png",
    name: "git",
  },
  
];
export default function IntroResume() {
  return (
    <div className={styles.resume_div}>
      <div className={styles.first_div}>
        <div class={styles.marquee}>
          <div class={styles.marquee__content}>
            <ul class={styles.list_inline}>
              {SkillsImgs.map((skill, i) => (
                <li key={i}>
                  <img
                    className={styles.imgg}
                    src={skill.link}
                    alt={skill.name}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div class={styles.marquee_2}>
          <div class={styles.marquee__content}>
            <ul class={styles.list_inline}>
              {backendImgs.map((skill, i) => (
                <li key={i}>
                  <img
                    className={styles.imgg}
                    src={skill.link}
                    alt={skill.name}
                  />
                </li>
              ))}
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
