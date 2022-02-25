import React, { useState } from "react";
import ProductsCount from "./ProductCount";
import { AiOutlineHeart } from "react-icons/ai";

const ProductCard = ({
  id,
  img,
  name,
  price,
  offer,
  stock,
  description,
  inOffer,
}) => {
  const [productCount, setProductCount] = useState(0);
  //falta importar el context
  const onAdd = (count) => {
    setProductCount(count);
    //falta enviarlo al context
  };

  return (
    <div className="container conteriner-fluid" >
      <div className="card-container" id={id}>
        <div className="card-offer-heart-icon">
          <AiOutlineHeart fontSize={18} color="#fafafa" />
        </div>
        <div className="card-offer">
          <img className="img-fluid" src={img} alt={name} />
          <div className="card-offer-info">
            <p className="card-offer-name fs-2">{name}</p>
            <p className="card-offer-description fs-5 p-description-product">{description}</p>
            {inOffer === true ? (
              <div className="container-fluid text-center">
              <div className="card-offer-price d-flex justify-content-center">
                <p className="card-offer-price-value fs-2">{`$ ${price} /`}</p>
                <p className="card-offer-price-cant fs-3">{`por ${offer}`}</p>
              </div>
                <p className="fs-3 alert alert-success border-3 border-success p-ofer-product">Producto en Oferta</p>
              </div>
            ) : (
              <div className="card-offer-price container-fluid text-center d-flex justify-content-center">
                <p className="card-offer-price-value fs-2">{`$ ${price} /`}</p>
                <p className="card-offer-price-cant fs-3">{`por ${offer}`}</p>
              </div>
            )}
            {stock > 0 ? (
              <ProductsCount
                stock={stock}
                initial={productCount}
                onAdd={onAdd}
              />
            ) : (
              <p className="fs-3 fw-bolder border-3 border-danger alert alert-danger">No hay stock</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
