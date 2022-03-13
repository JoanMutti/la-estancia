import React from "react";
import { NavLink } from "react-router-dom";

const NavBarHeader = ({ categories }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-light">
        <div className="collapse navbar-collapse header-nav" id="navbarNav">
          <ul className="navbar-nav">
            {categories.map((category, index) => (
              <li className="nav-item" key={category.text + index + 1}>
                <NavLink
                  to={category.address}
                  key={category.text + index}
                  className="header-nav-link "
                >
                  {category.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBarHeader;
