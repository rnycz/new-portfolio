import React, { CSSProperties, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { links } from "../../assets/links";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import { MenuElement, MenuToggle } from "./Menu.styled";

const Menu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const { setActivePage } = useStateContext();

  return (
    <>
      <MenuElement className={`${activeMenu ? "active" : ""}`} data-cy="menu">
        <MenuToggle onClick={() => setActiveMenu(!activeMenu)}>
          <Hamburger
            size={45}
            color="#FFF7E9"
            label="Show menu"
            data-cy="menu-toggle"
          />
        </MenuToggle>
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
      </MenuElement>
    </>
  );
};

export default Menu;
