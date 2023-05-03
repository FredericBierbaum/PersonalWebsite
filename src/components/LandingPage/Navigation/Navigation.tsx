import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";
import { BurgerIcon, CloseButton } from "../../../images/images";

export default function Navigation() {
  const [status, setStatus] = useState("closed");

  function closeMenu() {
    setStatus("closed");
  }

  return (
    <div className="navigationContainer">
      <div className="leftNavSide">
        <span>Frederic Bierbaum</span>
        <span>Located in Hamburg</span>
      </div>
      <div className="navigation">
        <NavLink to="/" className="navigationElement" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink
          to="/#worksection"
          className="navigationElement"
          onClick={closeMenu}
        >
          Work
        </NavLink>
        <NavLink
          to="/#aboutmesection"
          className="navigationElement"
          onClick={closeMenu}
        >
          About
        </NavLink>
        <NavLink
          to="/#contactsection"
          className="navigationElement"
          onClick={closeMenu}
        >
          Contact
        </NavLink>
      </div>
      <div className={"mobileMenuContainer " + status}>
        <div
          onClick={() => {
            status === "open" ? setStatus("closed") : setStatus("open");
          }}
          className={"burgerIconContainer " + status}
        >
          <img
            alt="burger-icon"
            id="burger-icon"
            src={status === "open" ? CloseButton : BurgerIcon}
          />
        </div>
        <div className={"mobileMenu " + status}>
          <NavLink
            to="/"
            className="navigationElement navigationElementMobile"
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/#worksection"
            className="navigationElement navigationElementMobile"
            onClick={closeMenu}
          >
            Work
          </NavLink>
          <NavLink
            to="/#aboutmesection"
            className="navigationElement navigationElementMobile"
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/#contactsection"
            className="navigationElement navigationElementMobile"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}
