import React, { CSSProperties, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { links } from "../../assets/links";
import "./Menu.css";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";

const Menu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const { setActivePage } = useStateContext();

  return (
    <>
      <ul className={`menu ${activeMenu ? "active" : ""}`}>
        <div className="menu-toggle" onClick={() => setActiveMenu(!activeMenu)}>
          <Hamburger size={45} color="#FFF7E9" label="Show menu" />
        </div>
        {links.map((link) => (
          <NavLink to={`/${link.name}`} key={link.name}>
            <li
              style={
                { "--rotate": link.rotate, "--clr": link.clr } as CSSProperties
              }
            >
              <button
                onClick={() => {
                  setActivePage(link.name);
                }}
              >
                {link.icon}
              </button>
            </li>
          </NavLink>
        ))}
      </ul>
    </>
  );
};

export default Menu;
