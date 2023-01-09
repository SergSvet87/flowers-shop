/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { PATHS } from "../../const";

import styles from "../../styles/FlowerInfo.module.scss";

export const Liked = () => {
  return (
    <div className={`${styles.flower_info__liked} "liked_flower"`}>
      <h5 className="title-h5">Maybe you like...</h5>
      <ul className={`${styles.liked_flower__list} "list_flowers"`}>
        <li className={styles.list_flowers__item}>
          <Link href={PATHS.flower}>
            <img
              src="/img/flower-info/flower.png"
              alt="flower"
              width={240}
              height={225}
            />
          </Link>
        </li>
        <li className={styles.list_flowers__item}>
          <Link href={PATHS.flower}>
            <img
              src="/img/flower-info/flower.png"
              alt="flower"
              width={240}
              height={225}
            />
          </Link>
        </li>
        <li className={styles.list_flowers__item}>
          <Link href={PATHS.flower}>
            <img
              src="/img/flower-info/flower.png"
              alt="flower"
              width={240}
              height={225}
            />
          </Link>
        </li>
        <li className={styles.list_flowers__item}>
          <Link href={PATHS.flower}>
            <img
              src="/img/flower-info/flower.png"
              alt="flower"
              width={240}
              height={225}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};
