import React from "react";
import { Link } from "react-router-dom";

const navOptions = [
  { key: "", value: "Ver todos" },
  { key: "/pollo", value: "Pollo" },
  { key: "/congelados", value: "Congelados" },
  { key: "/preparados", value: "Preparados" },
  { key: "/quesos", value: "Quesos" },
  { key: "/algo-mas", value: "Algo más" },
];

const CategoryNav = () => {
  return (
    <div className="category-nav-container">
      {navOptions.map((item, index) => {
        return (
          <Link
            to={`/productos${item.key}`}
            key={item.key + index}
            className={`category-nav-link`}
          >
            <p>{item.value}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryNav;
