import React from "react";
import { ImGithub } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { useStateContext } from "../../contexts/ContextProvider";
import { NavLink, useLocation } from "react-router-dom";
import MenuOnPage from "../MenuOnPage/MenuOnPage";
import { HeaderElement, HeaderIcons, LanguageSwitch } from "./Header.styled";

const Header: React.FC = () => {
  const { language, setLanguage } = useStateContext();
  const storeLanguage = (language: string) => {
    localStorage.setItem("language", language);
  };
  const location = useLocation();
  return (
    <HeaderElement>
      {location.pathname === "/" ? (
        <NavLink to="/">&lt;rnycz&gt;</NavLink>
      ) : (
        <MenuOnPage />
      )}
      <HeaderIcons data-cy="header-icons">
        <LanguageSwitch
          onClick={() => {
            setLanguage(language === "EN" ? "PL" : "EN");
            storeLanguage(language === "EN" ? "PL" : "EN");
          }}
          data-cy="language-switch"
        >
          {language}
        </LanguageSwitch>
        <a href="https://github.com/rnycz" target="_blank" rel="noreferrer">
          <ImGithub />
        </a>
        <a href="mailto:radeknycz98@gmail.com">
          <SiGmail />
        </a>
      </HeaderIcons>
    </HeaderElement>
  );
};

export default Header;
