import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <span>&copy; {new Date().getFullYear()} Radosław Nycz</span>
      <NavLink to="/">&lt;rnycz/&gt;</NavLink>
    </footer>
  );
};

export default Footer;
