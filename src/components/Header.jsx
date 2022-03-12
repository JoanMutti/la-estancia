import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import logo from "../logo.svg";
import NavBarHeader from "./NavBarHeader/NavBarHeader";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const Header = ({ setCartOpen }) => {
  return (
    <header>
      <div className="header-up">
        <img src={logo} alt="Logo" className="header-up-logo" />
        <NavBarHeader />
        <div className="header-up-icons">
          <CartWidget setCartOpen={setCartOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
