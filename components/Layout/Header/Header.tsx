/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import Link from "next/link";

import { PATHS } from "../../../const";

import styles from "../../../styles/Header.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <div className={styles.header__logo}>
          <Link href={PATHS.home}>
            <span>Flower</span>Shop
          </Link>
        </div>
        <nav className={`${styles.header__menu} ${styles.menu_header}`}>
          <ul className={styles.menu_header__list}>
            <li className={styles.menu_header__item}>
              <Link href={PATHS.home}>Home</Link>
            </li>

            <li className={styles.menu_header__item}>
              <Link href={PATHS.shop}>Shop</Link>
            </li>

            <li className={styles.menu_header__item}>
              <Link href={PATHS.blog}>Blog</Link>
            </li>

            <li className={styles.menu_header__item}>
              <Link href={PATHS.about}>About</Link>
            </li>
          </ul>
        </nav>

        <div className={`${styles.header__profile} "profile"`}>
          {/* <Link to="login.html">
            <button
              className="profile__auth button"
              type="button"
            >
              Sign UP
            </button>
          </Link> */}

          <div className={styles.profile__avatar}>
            <Link href={PATHS.login}>
              <img
                src="/icons/user.svg"
                alt="avatar"
              />
            </Link>
          </div>

          <div className={styles.profile__cart}>
            <Link href={PATHS.cart}>
              <img
                src="/icons/cart-shopping.svg"
                alt="cart"
              />
            </Link>
          </div>
        </div>

        {/* <header className="header__menu-mobile mobile-menu">
          <div className="mobile-menu__inner">
            <div className="header__logo"></div>
            <Link className="mobile-menu__burger">
              <span className="mobile-menu__line"></span>
            </Link>
          </div>

          <nav className="mobile-menu__nav">
            <ul className="mobile-menu__list list-mobile">
              <li className="list-mobile__item">
                <Link className="list-mobile__link" to="#">
                  <i className="material-icons">hail</i>Lifestyle
                </Link>
              </li>
              <li className="list-mobile__item">
                <Link className="list-mobile__link" to="#">
                  <i className="material-icons">star_half</i>Photodiary
                </Link>
              </li>
              <li className="list-mobile__item">
                <Link className="list-mobile__link" to="#">
                  <i className="material-icons">music_note</i>Music
                </Link>
              </li>
              <li className="list-mobile__item">
                <Link className="list-mobile__link" to="#">
                  <i className="material-icons">flight_land</i>Travel
                </Link>
              </li>
              <li className="list-mobile__item">
                <div className="divider"></div>
              </li>
              <li className="list-mobile__item mobile-menu__close">
                <Link className="list-mobile__link" to="#">
                  <i className="material-icons">cancel</i>Cancel
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mobile-menu__overlay"></div>
        </header> */}
      </div>
    </header>
  );
};
