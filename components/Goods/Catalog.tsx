import React from "react";

import { GoodsCard } from "./GoodsCard";
import { Bar } from "./Bar";

import styles from "../../styles/Shop.module.scss";

interface IGoodsCard {
  goodsItem: {
    id: number,
    name: string,
    price: number,
  }[];
}

export const Catalog = ({goodsItem}: IGoodsCard) => {
  // let goodsItem = Array(10).fill({ name: "Flower's Name", price: 0 });
  let content = goodsItem.map((elem) => (
    <GoodsCard
      name={elem.name}
      price={elem.price}
      key={elem.id}
    />
  ));
  return (
    <>
      <Bar />
      <div className={styles.catalog}>{content}</div>
    </>
  );
};
