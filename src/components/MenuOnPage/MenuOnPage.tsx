import React, { CSSProperties, useState } from "react";
import { NavLink } from "react-router-dom";
import "./MenuOnPage.css";
import { ImCross } from "react-icons/im";
import { SlMenu } from "react-icons/sl";
import { links } from "../../assets/links";
import { BsSkipBackwardCircle } from "react-icons/bs";
import { useStateContext } from "../../contexts/ContextProvider";

const MenuOnPage: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { activePage, setActivePage } = useStateContext();

  return (
    <>
      <span onClick={() => setOpenMenu(true)}>
        <SlMenu />
      </span>
      <div
        className="menu-page"
        style={{
          opacity: openMenu ? 1 : 0,
          transform: `scale(${openMenu ? 1 : 0})`,
          left: openMenu ? "-10px" : "-150px",
          top: openMenu ? "0px" : "-140px",
        }}
      >
        <span onClick={() => setOpenMenu(false)}>
          <ImCross />
        </span>
        <ul>
          <li>
            <NavLink to="/">
              <BsSkipBackwardCircle />
            </NavLink>
          </li>
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
      </div>
    </>
  );
};

export default MenuOnPage;
