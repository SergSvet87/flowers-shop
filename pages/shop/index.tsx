import React from "react";

import { Catalog } from "../../components/Goods/Catalog";
// import { FlowerInfo } from "./flower-info";

import styles from '../../styles/Shop.module.scss'

export const Shop = () => {
  return (
    <section id="shop" className={styles.shop}> 
      <Catalog />
      {/* <FlowerInfo /> */}
    </section>
  );
};
