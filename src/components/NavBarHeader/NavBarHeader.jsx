import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const categories = [
  { address: "/", text: "Home" },
  { address: "/productos", text: "Productos" },
  { address: "/sobre-nosotros", text: "Sobre Nosotros" },
  { address: "/", text: "Promos" },
];
const NavBarHeader = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-light ">
        <div className="container-fluid">
          <AiOutlineMenu
            className="navbar-toggler button-header"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            fontSize={20}
          />
          <div className="collapse navbar-collapse header-nav" id="navbarNav">
            <ul className="navbar-nav">
              {categories.map((category, index) => (
                <li className="nav-item" key={category.text + index + 1}>
                  <NavLink to={category.address} className="header-nav-link ">
                    {category.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBarHeader;
