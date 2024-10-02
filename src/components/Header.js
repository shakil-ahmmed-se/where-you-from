import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import useTheme from "../hooks/useTheme";

const Header = ({setDarkMode}) => {
  // const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')));
  const [isDark, setIsDark] = useTheme();

  useEffect(() => {
    document.body.classList.toggle('dark', isDark);
  }, [isDark]);
  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">
          <Link to={'/'}>Where in the world?</Link>
        </h2>
        <p>
          <Link to={'/contact'}>Contact Us</Link>
        </p>
        <p className="theme-changer" onClick={()=>{
          
          setIsDark(!isDark);
          localStorage.setItem('isDarkMode', !isDark)

        }}>
          <FontAwesomeIcon icon={isDark? faSun:faMoon} />
          
          {isDark? 'Light Mode': 'Dark Mode'}
        </p>
      </div>
    </header>
  );
};

export default Header;
