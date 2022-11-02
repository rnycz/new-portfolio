import React from "react";
import "./Header.css";
import { ImGithub } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";

const Header: React.FC = () => {
  const { language, setLanguage } = useStateContext();
  const storeLanguage = (language: string) => {
    localStorage.setItem("language", language);
  };
  return (
    <header>
      <NavLink to="/">&lt;rnycz&gt;</NavLink>
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
