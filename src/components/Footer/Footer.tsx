import React from "react";
import { NavLink } from "react-router-dom";
import { FooterElement } from "./Footer.styled";

const Footer: React.FC = () => {
  return (
    <FooterElement>
      <span>&copy; {new Date().getFullYear()} Radosław Nycz</span>
      <NavLink to="/">&lt;rnycz/&gt;</NavLink>
    </FooterElement>
  );
};

export default Footer;
