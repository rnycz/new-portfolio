import React, { CSSProperties, useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../../assets/links";
import { BsSkipBackwardCircle } from "react-icons/bs";
import { useStateContext } from "../../contexts/ContextProvider";
import { Squash as Hamburger } from "hamburger-react";
import { MenuOnPageElement } from "./MenuOnPage.styled";

const MenuOnPage: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { activePage, setActivePage } = useStateContext();

  return (
    <>
      <span onClick={() => setOpenMenu(!openMenu)}>
        <Hamburger
          toggled={openMenu}
          size={35}
          color="#c5c5c5"
          label="Show menu"
          distance="lg"
        />
      </span>
      <MenuOnPageElement data-cy="menu-page">
        <ul
          style={{
            opacity: openMenu ? 1 : 0,
            transform: `scale(${openMenu ? 1 : 0})`,
            width: openMenu ? "185px" : "0px",
            height: openMenu ? "185px" : "0px",
          }}
        >
          <NavLink to="/">
            <BsSkipBackwardCircle />
          </NavLink>

          {links.map((link) => (
            <NavLink to={`/${link.name}`} key={link.name}>
              <li style={{ "--clr": link.clr } as CSSProperties}>
                <button
                  onClick={() => {
                    setOpenMenu(false);
                    setActivePage(link.name);
                  }}
                  className={`${activePage === link.name && "active"}`}
                >
                  {link.icon}
                </button>
              </li>
            </NavLink>
          ))}
        </ul>
      </MenuOnPageElement>
    </>
  );
};

export default MenuOnPage;
