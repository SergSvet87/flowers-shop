/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { PATHS } from "../const";

import styles from "../styles/MainTitle.module.scss";

const flowers = [
  {
    _id: 1,
    name: "Flower 1",
    img: "/img/main-title/One.png",
  },

  {
    _id: 2,
    name: "Flower 2",
    img: "/img/main-title/Two.png",
  },
  {
    _id: 3,
    name: "Flower 3",
    img: "/img/main-title/Three.png",
  },
  {
    _id: 4,
    name: "Flower 4",
    img: "/img/main-title/Four.png",
  },
  {
    _id: 5,
    name: "Flower 5",
    img: "/img/main-title/Five.png",
  },
  {
    _id: 6,
    name: "Flower 6",
    img: "/img/main-title/Six.png",
  },
];

export const MainTitle = () => {
  return (
    <div className="container">
      <div className={styles.main_title_container}>
        <div className={styles.main_title_text}>
          <h1 className={styles.main_title_h2}>
            Flowers, 🌻
            <br /> what the world needs
          </h1>
          <p className={styles.main_title_p}>Browse between hounders of flowers</p>
          <Link href={PATHS.shop}>
            <button className={styles.browse_btn}>Browse</button>
          </Link>
        </div>
        <ul className={styles.main_title_img}>
          {flowers.map((flower) => (
            <li className={styles.main_title_img_item} key={flower._id}>
              <img
                src={flower.img}
                alt={flower.name}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
