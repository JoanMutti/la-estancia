import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const MenuWidget = ({ categories }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="menu-wg-container">
      <AiOutlineMenu
        fontSize={28}
        color="#fafafa"
        className="header-up-icon"
        onClick={() => setMenuOpen(true)}
      />
      <div
        className={`menu-wg-categories-container ${
          menuOpen ? "opened" : "closed"
        }`}
      >
        <AiOutlineClose
          fontSize={30}
          color="#fafafa"
          className="menu-wg-icon-close"
          onClick={() => setMenuOpen(false)}
        />
        {categories.map((category, index) => (
          <div
            className="menu-wg-category-container"
            key={category.text + index + "wg"}
          >
            <NavLink
              to={category.address}
              className="header-nav-link menu-wg-category"
            >
              {category.text}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuWidget;
