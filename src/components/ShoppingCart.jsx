import React, { useState, useContext } from "react";
import { AiOutlineClose, AiOutlineGift } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import EditItemCount from "./EditItemCount";
import { AppContext } from "../context/AppContext";

const ItemShoppingCart = ({ product }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const { addMore, removeMore, removeProduct } = useContext(AppContext);

  return (
    <div className="sc-product">
      <div className="sc-info-product-container">
        <div className="sc-product-img-container">
          <img src={product.img} alt="" />
        </div>
        <div className="sc-product-name-price">
          <p className="sc-product-name">{product.name}</p>
          <p className="sc-product-price">
            $ {(product.price * product.cant).toFixed(2)}
          </p>
        </div>
      </div>
      <div className="sc-product-controls">
        <FiEdit
          fontSize={20}
          color="rgb(21, 20, 21)"
          onClick={() => setOpenEdit(!openEdit)}
        />
        <RiDeleteBin6Line
          fontSize={20}
          color="rgb(21, 20, 21)"
          onClick={() => removeProduct(product)}
        />
      </div>
      {openEdit && (
        <EditItemCount
          styleClass={{
            container: "sc-product-edit",
            text: "sc-product-edit-kg",
          }}
          onClickAdd={addMore}
          onClickRemove={removeMore}
          product={product}
        />
      )}
    </div>
  );
};

const ShoppingCart = ({ cartOpen, setCartOpen }) => {
  const { products, getSubtotal } = useContext(AppContext);

  return (
    <div className={`cart ${cartOpen ? "opened" : "closed"}`}>
      <AiOutlineClose
        className="sc-close-icon"
        color="rgb(21, 20, 21)"
        fontSize={24}
        onClick={() => setCartOpen(false)}
      />
      {products.length > 0 ? (
        <>
          <div className="sc-products-container">
            {products.map((product) => (
              <ItemShoppingCart product={product} key={product.id} />
            ))}
          </div>
          <div className="sc-subtotal-container">
            <p className="sc-subtotal-title">Subtotal del pedido</p>
            <p className="sc-subtotal-price">{`$ ${getSubtotal().toFixed(
              2
            )}`}</p>
          </div>
          <div className="sc-shipping">
            <AiOutlineGift fontSize={20} color="#49b036" />
            <p className="sc-shipping-text">
              {getSubtotal() < 2500
                ? `Faltan $ ${
                    2500 - getSubtotal()
                  } para que tu envío sea gratis`
                : `Tu envío será gratuito`}
            </p>
          </div>
          <div className="sc-link sc-link-green">
            <Link to={"/cart"}>Quiero finalizar la compra</Link>
          </div>
        </>
      ) : (
        <h3>No hay productos</h3>
      )}
      <div className="sc-link sc-link-brown">
        <Link to={"/productos"}>Quiero seguir comprando</Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
