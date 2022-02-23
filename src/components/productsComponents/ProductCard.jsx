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
    <div className="">
      {/* no se si va la carga de productos aca */}
      {/* {product? ( */}
      <div className="card-container" id={id}>
        <div className="card-offer-heart-icon">
          <AiOutlineHeart fontSize={18} color="#fafafa" />
        </div>
        <div className="card-offer">
          <img src={img} alt={name} />
          <div className="card-offer-info">
            <p className="card-offer-name">{name}</p>
            <p className="card-offer-description">{description}</p>
            {inOffer === true ? (
                // agregar clase destacando la oferta
              <div className="card-offer-price">
                <p className="card-offer-price-value">{`$ ${price}`}</p>
                <p className="card-offer-price-cant">{`Por ${offer}`}</p>
                <p className="">Producto en oferta</p>
              </div>
            ) : (
              <div className="card-offer-price">
                <p className="card-offer-price-value">{`$ ${price}`}</p>
                <p className="card-offer-price-cant">{`Por ${offer}`}</p>
              </div>
            )}
            {stock > 0 ? (
              <ProductsCount
                stock={stock}
                initial={productCount}
                onAdd={onAdd}
              />
            ) : (
              <p className="">No hay stock</p>
            )}
          </div>
        </div>
      </div>
      {/* ) : (
<div className=''>
    <p className=''>Cargando . . .</p>
</div>
) } */}
    </div>
  );
};

export default ProductCard;
