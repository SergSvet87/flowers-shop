/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import Link from "next/link";

import { PATHS } from "../../../const";

import styles from "../../../styles/Footer.module.scss";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__wrapper}>
          <div className={styles.footer__about}>
            <div className={styles.footer__logo}>
              <Link href={PATHS.home}>
                <span>Flower</span> Shop
              </Link>
            </div>

            <div className={styles.footer__description}>
              Some random stuff about flower shop and some more info cuz this
              box had to get fill Some random stuff about flower shop and some
              more info cuz this box had to get fill Some random stuff about
              flower shop and some more info cuz this box had to get fill
            </div>
          </div>
          <nav className={styles.footer__links}>
            <h6 className={styles.title_h6}>Links</h6>

            <ul className={styles.footer__list}>
              <li className={`${styles.footer__item} "active"`}>
                <Link href={PATHS.home}>Home</Link>
              </li>

              <li className={styles.footer__item}>
                <Link href={PATHS.shop}>Shop</Link>
              </li>

              <li className={styles.footer__item}>
                <Link href={PATHS.blog}>Blog</Link>
              </li>

              <li className={styles.footer__item}>
                <Link href={PATHS.about}>About</Link>
              </li>
            </ul>
          </nav>

          <nav className={styles.footer__links}>
            <h6 className={styles.title_h6}>Links</h6>

            <ul className={styles.footer__list}>
              <li className={`${styles.footer__item} "active"`}>
                <Link href={PATHS.home}>Home</Link>
              </li>

              <li className={styles.footer__item}>
                <Link href={PATHS.shop}>Shop</Link>
              </li>

              <li className={styles.footer__item}>
                <Link href={PATHS.blog}>Blog</Link>
              </li>

              <li className={styles.footer__item}>
                <Link href={PATHS.about}>About</Link>
              </li>
            </ul>
          </nav>

          <div className={`${styles.footer__contacts} "contacts_footer"`}>
            <h6 className={styles.title_h6}>Contact</h6>

            <ul className={styles.contacts_footer__list}>
              <li className={styles.contacts_footer__item}>
                <a className={styles.footer__item_link}>
                  <img
                    src="/icons/location.svg"
                    alt="location Img"
                  />
                  <address>26985 Brighton Lane, Lake Forest, CA</address>
                </a>
              </li>
              <li className={styles.contacts_footer__item}>
                <a className={styles.footer__item_link}>
                  <img
                    src="/icons/email.svg"
                    alt="email Img"
                  />
                  <span>support@Flowers.com</span>
                </a>
              </li>
              <li className={styles.contacts_footer__item}>
                <a className={styles.footer__item_link}>
                  <img
                    src="/icons/phone.svg"
                    alt="phone Img"
                  />
                  <span>+1 236 5489</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
