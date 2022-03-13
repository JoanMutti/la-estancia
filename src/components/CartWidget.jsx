import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { AppContext } from "../context/AppContext";

const CartWidget = ({ setCartOpen }) => {
  const { getQuantItems } = useContext(AppContext);

  return (
    <div className="cw-container">
      <p className="cw-quant-items">{getQuantItems()}</p>
      <FiShoppingCart
        fontSize={28}
        color="#fafafa"
        className="header-up-icon"
        onClick={() => setCartOpen(true)}
      />
    </div>
  );
};

export default CartWidget;
