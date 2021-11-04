import React from "react";
import { logo } from "../../assets/images";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__inner container">
        <div className="header__logo">
          <img src={logo} alt="logoHeader" />
        </div>
        <ul className="header__nav">
          <li>
            <a href="#">overview</a>
          </li>
          <li>
            <a href="#">news</a>
          </li>
          <li>
            <a href="#">champions</a>
          </li>
          <li>
            <a href="#">support</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
