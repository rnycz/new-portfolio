import React from "react";
import "./Header.css";
import { ImGithub } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { useStateContext } from "../../contexts/ContextProvider";
import { NavLink, useLocation } from "react-router-dom";
import MenuOnPage from "../MenuOnPage/MenuOnPage";

const Header: React.FC = () => {
  const { language, setLanguage } = useStateContext();
  const storeLanguage = (language: string) => {
    localStorage.setItem("language", language);
  };
  const location = useLocation();
  return (
    <header>
      {location.pathname == "/" ? (
        <NavLink to="/">&lt;rnycz&gt;</NavLink>
      ) : (
        <MenuOnPage />
      )}
      <div className="header-icons">
        <div
          className="language-switch"
          onClick={(e) => {
            setLanguage(language === "EN" ? "PL" : "EN");
            storeLanguage(language === "EN" ? "PL" : "EN");
          }}
        >
          {language}
        </div>
        <a href="https://github.com/rnycz" target="_blank" rel="noreferrer">
          <ImGithub />
        </a>
        <a href="mailto:radeknycz98@gmail.com">
          <SiGmail />
        </a>
      </div>
    </header>
  );
};

export default Header;
