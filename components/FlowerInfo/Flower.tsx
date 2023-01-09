/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

import styles from "../../styles/FlowerInfo.module.scss";

import { flowerItem } from "../../types";

type flowerInfoProps = {
  flower: flowerItem;
};

export const Flower:FC<flowerInfoProps> = ({flower}) => {
  return (
    <div className={styles.flower_info__wrapper}>
      <div className={styles.flower_info__img}>
        <img
          src="/img/flower_info/flower.png"
          alt="flower"
          width={356}
          height={326}
        />
      </div>
      <div className={styles.flower_info__description}>
        <h6 className="title_h6">{flower.title}</h6>
        <p className={styles.flower_info__text}>
          Make every day brighter with our abundant bouquet of fresh sunflowers.
          These radiant, long-lasting blooms bring that
          just-picked-from-the-meadow feeling to birthdays, get well wishes, or
          any day you want to make someone you care about smile.
        </p>

        <div className={`${styles.flower_info__rating} "rating_flower"`}>
          <div className={styles.rating_flower__stars}>
            <img
              src="/icons/star.svg"
              alt="star"
            />
            <span> 4.5</span> / 5
          </div>
          <div className={styles.rating_flower__count}>
            (<span>101</span> people opinion)
          </div>
        </div>

        <div className={`${styles.flower_info__price} "price_flower"`}>
          <div className={styles.price_flower__price}>
            <span>100</span>$ / each
          </div>

          <div className={styles.price_flower__buttons}>
            <div className={styles.price_flower__favorite}>
              <button className={styles.button_add}>
                <img
                  src="/icons/heart.svg"
                  alt="heart"
                />
                Add to favorite
              </button>
            </div>
            <div className={styles.price_flower__cart}>
              <button className={styles.button_add}>
                <img
                  src="/icons/cart.svg"
                  alt="cart"
                />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
