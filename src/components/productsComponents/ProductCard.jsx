import React, { useState } from "react";
import ProductsCount from "./ProductCount";
import AddProductCart from "../AddProduct/AddProductCart";
import { AiOutlineHeart } from "react-icons/ai";
import { MdLocalOffer } from "react-icons/md";
import Description from "../Description";

const ProductCard = ({ product }) => {
  const [productCount, setProductCount] = useState(0);

  const onAdd = (count) => {
    setProductCount(count);
  };
  
  
  
  return (
    <div className="container conteriner-fluid">
      <div className="card-container" id={product.id}>
        <div className="card-offer-heart-icon1">
          <AiOutlineHeart fontSize={18} color="#fafafa" />
        </div>
        {product.inOffer === true && (
          <div className="card-offer-localoffer">
            <p>PROMO</p>
            <MdLocalOffer fontSize={100} />
          </div>
        )}
        <div className="card-offer1">
          <img className="img-fluid" src={product.img} alt={product.name} />
          <div className="card-offer-info">
            <p className="card-offer-name1">{product.name}</p>
            <p className=" p-description-product1">{product.description}</p>
            <div className="card-offer-price container-fluid text-center d-flex justify-content-center">
              <p className="card-offer-price-value ">{`$ ${product.price}`}</p>
              <p className="card-offer-price-cant ">{`/ por ${product.offer}`}</p>
            </div>

            <ProductsCount initial={productCount} product={product} />
            {/* <AddProductCart product={product} /> */}
          </div>
        </div>

    {/* <Description/> */}
        
      </div>
    </div>
  );
};

export default ProductCard;
