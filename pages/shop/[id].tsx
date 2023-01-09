import { FC } from "react";
import { GetServerSideProps } from "next";

import { Flower } from "../../components/FlowerInfo/Flower";
import { Reviews } from "../../components/FlowerInfo/Reviews";
import { Liked } from "../../components/FlowerInfo/Liked";
import { flowerItem } from "../../types";

import styles from "../../styles/FlowerInfo.module.scss";

type flowerInfoProps = {
  flower: flowerItem;
};

export const getServerSideProps:GetServerSideProps = async (context) => {
  const { id } = context.params;

  const response = await fetch(`https://id=${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { flower: data },
  };
};

export const FlowerInfo:FC<flowerInfoProps>= ({ flower }) => {
  return (
    <section className={styles.flower_info}>
      <div className="container">
        <Flower flower={flower} />
        <div className={styles.flower_info__service}>
          <Reviews />
          <Liked />
        </div>
      </div>
    </section>
  );
};
