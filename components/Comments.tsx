/* eslint-disable @next/next/no-img-element */
import { COMMENTS } from "../const";

import styles from "../styles/Comments.module.scss";

const Comments = () => {
  return (
    <section className={styles.comments}>
      <div className="container">
        <h2 className="title-h2">Comments</h2>
        <ul className={styles.comments__list}>
          {COMMENTS.map((item) => (
            <li
              className={styles.comments__review}
              key={item.id}
            >
              <div className={styles.comments__img}>
                <img
                  className={styles.comments__avatar}
                  src={item.avatar}
                  alt={item.name}
                  width={58}
                  height={58}
                />
              </div>
              <div className={styles.comments__description}>
                <h5 className="title-h5">{item.name}</h5>
                <p>{item.text}</p>
                <div className={styles.comments__rating}>
                  <button>
                    <img
                      src="/icons/star.svg"
                      alt="star"
                    />
                  </button>
                  <button>
                    <img
                      src="/icons/star.svg"
                      alt="star"
                    />
                  </button>
                  <button>
                    <img
                      src="/icons/star.svg"
                      alt="star"
                    />
                  </button>
                  <button>
                    <img
                      src="/icons/star.svg"
                      alt="star"
                    />
                  </button>
                  <button>
                    <img
                      src="/icons/star.svg"
                      alt="star"
                    />
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

export default Comments;
