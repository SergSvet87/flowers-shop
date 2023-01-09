/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import "../../styles/AuthReg.module.scss";

function Header({ type }) {
  return (
    <div className="Header">
      <Link href="/">
        <div className="BackToHome">
          <img
            src="/icons/home.svg"
            alt="homeIcon"
          />
          <div className="txtB">Back to home</div>
        </div>
      </Link>

      <div
        className="h1"
        style={{ marginTop: type === "reg" ? 30 : 33 }}
      >
        {type === "reg" ? "Register" : "Login"}
      </div>
      <div className="h2">
        {type === "reg"
          ? "Register and help us help you"
          : "Login and have more fun"}
      </div>
    </div>
  );
}

export default Header;
