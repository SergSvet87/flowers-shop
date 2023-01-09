/* eslint-disable @next/next/no-img-element */

import styles from "../styles/Posts.module.scss";

interface IPostItem {
  // id: number;
  avatar: string;
  name: string;
  date: string;
  img: string;
  title: string;
  description: string;
  like: number;
  views: number;
}

export const Post = ({
  avatar,
  name,
  date,
  img,
  title,
  description,
  like,
  views,
}: IPostItem) => {
  return (
    <li className={styles.post}>
      <div className={styles.post_header}>
        <div className={styles.post_avatar}>
          <img
            src={avatar}
            alt={name}
          />
          <b>{name}</b>
        </div>
        <div className={styles.post_header_data}>{date}</div>
      </div>
      <div className={styles.post_image}>
        <img
          src={img}
          alt={title}
        />
      </div>
      <div className={styles.post_description}>
        <h6>{title}</h6>
        <p>{description}</p>
        <div className={styles.post_footer}>
          <div className={styles.icons}>
            <img
              src="/icons/grey_heart.svg"
              alt="hurt"
              className="hurt"
            />
            {like}
            <img
              src="/icons/eye.svg"
              alt="eye"
              className="eye"
            />
            {views}
          </div>
          <div className="col-6">
            <button>Read more</button>
          </div>
        </div>
      </div>
    </li>
  );
};
