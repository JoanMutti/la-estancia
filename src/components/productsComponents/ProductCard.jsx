import React, { useState } from "react";
import ProductsCount from "./ProductCount";
import { MdLocalOffer } from "react-icons/md";
import Description from "../Description";
import promo from '../../promo.png'
const ProductCard = ({ product }) => {
  const [productCount, setProductCount] = useState(0);

  const onAdd = (count) => {
    setProductCount(count);
  };

  return (
    <div className="container conteriner-fluid">
      <div className="card-container" id={product.id}>
        {product.inOffer === true && (
          
            <img src={promo} alt="promo" className="card-offer-localoffer"/>
          
        )}
        <div className="card-offer1">
          <div className=" img-size">
            <img
              className="img-fluid "
              src={product.img}
              alt={product.name}
              title={product.name}
            />
          </div>
          <div className="card-offer-info">
            <p className="card-offer-name1">{product.name}</p>

            <Description description={product.description} />
            <div className="card-offer-price container-fluid text-center d-flex justify-content-center">
              <p className="card-offer-price-value ">{`$ ${product.price}`}</p>
              <p className="card-offer-price-cant ">{`/ ${product.soldFor}`}</p>
            </div>

            <ProductsCount initial={productCount} product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
