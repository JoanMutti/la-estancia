import React, { useContext } from "react";
import Layout from "../components/Layout";
import ListCart from "../components/ListCart";
import { AppContext } from "../context/AppContext";
import { AiOutlineGift } from "react-icons/ai";

const Cart = () => {
  const { getSubtotal } = useContext(AppContext);

  return (
    <Layout>
      <h3 className="cp-title">Mi carrito de compras</h3>
      <div className="cp-shipping">
        <AiOutlineGift fontSize={20} color="#49b036" />
        <p className="cp-shipping-text">
          {getSubtotal() < 2500
            ? `Faltan $ ${2500 - getSubtotal()} para que tu envío sea gratis`
            : `Tu envío será gratuito`}
        </p>
      </div>
      <ListCart />
    </Layout>
  );
};

export default Cart;
