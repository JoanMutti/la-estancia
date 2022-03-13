import React from "react";
import { AiOutlineHeart, AiFillMessage } from "react-icons/ai";
import { Link } from "react-router-dom";
import gifEnvios from "../../envios.gif";

const CardOffer = ({ img, name, price, soldFor, id }) => {
  return (
    <div className="card-container">
      <div className="card-offer-heart-icon">
        <AiOutlineHeart fontSize={18} color="#fafafa" />
      </div>
      <Link to={`/productos/${id}`}>
        <div className="card-offer">
          <img src={img} alt="Foto producto" />
          <div className="card-offer-info">
            <p className="card-offer-name">{name}</p>
            <div className="card-offer-price">
              <p className="card-offer-price-value">{`$ ${price}`}</p>
              <p className="card-offer-price-cant">{`Por ${soldFor}`}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const Offers = ({ products }) => {
  return (
    <div>
      <h3 className="offers-title">Promociones para la semana</h3>
      <div className="offer-cards-container">
        {products.map((offer) => (
          <CardOffer {...offer} key={offer.id} />
        ))}
      </div>
      <div className="message-delivery-container">
        <div className="delivery-container">
          <img src={gifEnvios} alt="Envios" />
          <h3 className="delivery-title">Envíos gratis</h3>
          <p className="delivery-subtitle">En pedidos superiores a $2500</p>
        </div>
        <div className="messages-container">
          <h3 className="messages-title">Llamanos por whatsapp</h3>
          <div className="message-icon-container">
            <AiFillMessage fontSize={36} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
