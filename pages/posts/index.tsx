/* eslint-disable @next/next/no-img-element */
import { POSTITEMS } from "../../const";
import { Post } from "../../components/Post";

import styles from "../../styles/Posts.module.scss";

interface IPortfolioSlider {
  tabItems: {
    id: number;
    img: string;
    link: string;
    title: string;
  }[];
}

export const Posts = () => {
  return (
    <section className={styles.posts}>
      <div className="container">
        <h2 className="title-h2">Latest posts</h2>
        <ul className={styles.posts__list}>
          {POSTITEMS.map((post) => (
            <Post
              key={post.id}
              avatar={post.avatar}
              name={post.name}
              date={post.date}
              img={post.img}
              title={post.title}
              description={post.description}
              like={post.like}
              views={post.views}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
