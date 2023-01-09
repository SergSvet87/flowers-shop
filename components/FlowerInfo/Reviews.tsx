/* eslint-disable @next/next/no-img-element */

import styles from "../../styles/FlowerInfo.module.scss";

export const Reviews = () => {
  const handleClick = () => {};

  return (
    <div className={`"flower-info__reviews" ${styles.reviews_flower}`}>
      <div className={styles.reviews_flower__title}>
        <h5 className="title-h5">Reviews</h5>
        <button className={`${styles.reviews_flower__button} "button-primary"`}>
          Add a review
        </button>
      </div>
      <ul className={styles.reviews_flower__reviews}>
        <li className={`${styles.reviews_flower__review} "review"`}>
          <img
            className={styles.review__avatar}
            src="/img/flower-info/avatar.jpg"
            alt="avatar"
          />
          <div className={styles.review__description}>
            <h5 className="title-h5">Atena</h5>
            <p>
              This flower is the best gift i’ve ever got Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Illo, hic ratione, neque
              commodi, harum ab recusandae qui perspiciatis nihil culpa
              reiciendis fugit quia deserunt doloribus sint a quaerat temporibus
              voluptates aperiam accusantium itaque. Rem, voluptate? Iure qui ea
              repellat sequi?
            </p>
            <div className={styles.review_rating}>
              <button onClick={handleClick}>
                <img
                  src="/icons/star.svg"
                  alt="star"
                />
              </button>
              <button onClick={handleClick}>
                <img
                  src="/icons/star.svg"
                  alt="star"
                />
              </button>
              <button onClick={handleClick}>
                <img
                  src="/icons/star.svg"
                  alt="star"
                />
              </button>
              <button onClick={handleClick}>
                <img
                  src="/icons/star.svg"
                  alt="star"
                />
              </button>
              <button onClick={handleClick}>
                <img
                  src="/icons/star.svg"
                  alt="star"
                />
              </button>
            </div>
          </div>
        </li>

        <li className={`${styles.reviews_flower__review} "review"`}>
          <img
            className={styles.review__avatar}
            src="/img/flower-info/avatar.jpg"
            alt="avatar"
          />
          <div className={styles.review__description}>
            <h5 className="title-h5">Atena</h5>
            <p>This flower is the best gift i’ve ever got</p>
            <div className={styles.review_rating}>
              <button onClick={handleClick}>
                <img
                  src="/icons/star.svg"
                  alt="star"
                />
              </button>
              <button onClick={handleClick}>
                <img
                  src="/icons/star.svg"
                  alt="star"
                />
              </button>
              <button onClick={handleClick}>
                <img
                  src="/icons/star.svg"
                  alt="star"
                />
              </button>
              <button onClick={handleClick}>
                <img
                  src="/icons/star.svg"
                  alt="star"
                />
              </button>
              <button onClick={handleClick}>
                <img
                  src="/icons/star.svg"
                  alt="star"
                />
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
