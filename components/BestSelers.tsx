/* eslint-disable @next/next/no-img-element */

import { BESTITEMS } from "../const";

import styles from "../styles/BestSelers.module.scss";

const BestSelers = () => {
  return (
    <section className={styles.best_sellers}>
      <div className="container">
        <h2 className="title-h2">Best selers</h2>
        <ul className={styles.best_sellers__list}>
          {BESTITEMS.map((item) => (
            <li
              className={styles.best_sellers__item}
              key={item.id}
            >
              <img
                className={styles.best_sellers__item_img}
                src={item.img}
                alt={item.title}
              />
              <h3>{item.title}</h3>
              <div className={styles.best_sellers__footer}>
                <p>{item.price}$</p>
                <div className={styles.best_sellers__btn}>
                  <img
                    className={styles.best_sellers__btn_img}
                    src="/icons/cart-shopping.svg"
                    alt="cartImage"
                  />
                  <button
                    className="button-primary"
                    name="Add to cart"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BestSelers;
