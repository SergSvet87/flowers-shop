import Head from "next/head";

import { MainTitle } from "../components/MainTitle";
import { Posts } from "./posts";
import BestSelers from "../components/BestSelers";

import styles from "../styles/Home.module.scss";
import Comments from "../components/Comments";

export default function Home() {
  return (
    <>
      <Head>
        <title>Flowers Shop App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <MainTitle />
      <BestSelers />
      <Posts />
      <Comments />
    </>
  );
}
