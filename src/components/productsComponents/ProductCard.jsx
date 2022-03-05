import React, { useState } from "react";
import ProductsCount from "./ProductCount";
import AddProductCart from "../AddProduct/AddProductCart";
import { AiOutlineHeart } from "react-icons/ai";
import { MdLocalOffer } from 'react-icons/md'
const ProductCard = ({product}) => {
  const [productCount, setProductCount] = useState(0);

  const onAdd = (count) => {
    setProductCount(count);
 
  };

  return (
    <div className="container conteriner-fluid" >
      <div className="card-container" id={product.id}>
        <div className="card-offer-heart-icon">
          <AiOutlineHeart fontSize={18} color="#fafafa" />
        </div>
        {
        product.inOffer === true &&
        <div className="card-offer-localoffer">
          <p>PROMO</p>
          <MdLocalOffer fontSize={100}/>
        </div>
        }
        <div className="card-offer">
          <img className="img-fluid" src={product.img} alt={product.name} />
          <div className="card-offer-info">
            <p className="card-offer-name fs-2">{product.name}</p>
            <p className="card-offer-description fs-5 p-description-product">{product.description}</p>
              <div className="card-offer-price container-fluid text-center d-flex justify-content-center">
                <p className="card-offer-price-value fs-2">{`$ ${product.price} /`}</p>
                <p className="card-offer-price-cant fs-3">{`por ${product.offer}`}</p>
              </div>
           
              <ProductsCount               
                initial={productCount}
               product={product}
              />
              {/* <AddProductCart product={product} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
