import React from "react";
import { AiFillMessage } from "react-icons/ai";
import { Link } from "react-router-dom";
import gifEnvios from "../../envios.gif";
import { useWindowSize } from "../../hooks/useWindowSize";

const CardOffer = ({ img, name, price, soldFor, id }) => {
  return (
    <div className="card-container">
      <Link to={`/productos`}>
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
  const width = useWindowSize();
  const offerProducts = products
    .filter((offerProduct) => offerProduct.inOffer == true)
    .slice(0, 4);

  return (
    <div>
      <h3 className="offers-title">Promociones para la semana</h3>
      <div
        className="offer-cards-container"
        style={
          width > 700
            ? {
                gridTemplateColumns: `repeat(${offerProducts.length}, 1fr)`,
              }
            : null
        }
      >
        {offerProducts.map((offer, index) => (
          <CardOffer {...offer} key={offer.id + index} />
        ))}
      </div>
      <div className="message-delivery-container">
        <div className="delivery-container">
          <img src={gifEnvios} alt="Envios" />
          <h3 className="delivery-title">Envíos gratis</h3>
          <p className="delivery-subtitle">En pedidos superiores a $2500</p>
        </div>
        <a
          href="https://wa.me/+5491166510053"
          target="_blank"
          className="messages-container"
        >
          <h3 className="messages-title">Llamanos por whatsapp</h3>
          <div className="message-icon-container">
            <AiFillMessage fontSize={36} color="white" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Offers;
