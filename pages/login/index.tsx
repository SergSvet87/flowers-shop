/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import regIcon from "/img/Reg.png";
import logIcon from "/img/Login.png";
import Input from "../../components/AuthReg/Input";
import Footer from "../../components/AuthReg/Footer";
import Header from "../../components/AuthReg/Header";

import styles from "../styles/AuthReg.module.scss";

function AuthReg({ type, setType }) {
  const nameList =
    type === "reg"
      ? ["Email", "Username", "Password"]
      : ["Username", "Password"];
  return (
    <div className={styles.AuthReg_body}>
      <Header type={type} />
      <Input nameList={nameList} />
      <Footer
        type={type}
        setType={setType}
      />
    </div>
  );
}

function Img({ type }) {
  return (
    <div className={styles.Img}>
      <img
        src={type === "reg" ? regIcon : logIcon}
        alt={type === "reg" ? "regIcon" : "logIcon"}
      />
    </div>
  );
}

function AuthRegContainer({ initial }) {
  const [type, setType] = useState(initial);

  return (
    <div className={styles.AuthReg}>
      <AuthReg
        type={type}
        setType={setType}
      />
      <Img type={type} />
    </div>
  );
}

export default AuthRegContainer;
