import React from "react";
import logo from "../logo.svg";
import NavBarHeader from "./NavBarHeader/NavBarHeader";
import CartWidget from "./CartWidget";
import { useWindowSize } from "../hooks/useWindowSize";
import MenuWidget from "./MenuWidget";
import { Link } from "react-router-dom";
const categories = [
  { address: "/", text: "Home" },
  { address: "/productos", text: "Productos" },
  { address: "/sobre-nosotros", text: "Sobre Nosotros" },
  { address: "/promos", text: "Promos" },
];

const Header = ({ setCartOpen }) => {
  const widthScreen = useWindowSize();

  return (
    <header>
      <div className="header-up">
      <Link to={'/'}> <img src={logo} alt="Logo" className="header-up-logo" /></Link> 
        <div className="header-up-icons">
          <CartWidget setCartOpen={setCartOpen} />
          {widthScreen <= 1000 && <MenuWidget categories={categories} />}
        </div>
      </div>
      {widthScreen > 1000 && <NavBarHeader categories={categories} />}
    </header>
  );
};

export default Header;
