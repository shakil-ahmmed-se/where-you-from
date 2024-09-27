import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

const Header = ({setDarkMode}) => {
  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer">
          <FontAwesomeIcon icon={faMoon} />
          Dark Mode
        </p>
      </div>
    </header>
  );
};

export default Header;
