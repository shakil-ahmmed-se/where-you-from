import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Header = ({setDarkMode}) => {
  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">
          <Link to={'/'}>Where in the world?</Link>
        </h2>
        <p>
          <Link to={'/contact'}>Contact Us</Link>
        </p>
        <p className="theme-changer">
          <FontAwesomeIcon icon={faMoon} />
          Dark Mode
        </p>
      </div>
    </header>
  );
};

export default Header;
