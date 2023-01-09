/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { PATHS } from "../../const";
// import { Button } from "../button/button";

import "../../styles/Shop.module.scss";

interface IGoodsItem {
  id: number;
  name: string;
  price: number;
}

export const GoodsCard = ({ name, price }: IGoodsItem) => {
  return (
    <Link href={PATHS.flower}>
      <div className="flexContainer">
        <div className="goodsCard">
          <img
            className="goodsCard__img"
            src="/img/flower-info/flower.png"
            alt="flower is lost.."
          />
          <h6 className="goodsCard__name">{name}</h6>
          <div className="goodsCard__bottom">
            <span className="goodsCard__price">{price}$</span>
            <div className="goodsCard__btn">
              <img
                src="/icons/cart-shopping.svg"
                alt="cartImage"
              />
              <button
                className="button-primary"
                name="Add to cart"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
