import React from "react";
import ProductCard from "./ProductCard";

const ProductCardList = ({ products, inOffers }) => {
  return (
    <div className="">
      {products.length > 0 ? (
        inOffers === false ? (
          products.map((product) => (
            <ProductCard  
            id={product.id}
            img={product.img}
            name={product.name}
            price={product.price}
            inOffer={product.inOffer}
            stock={product.stock}
            description={product.description}
            offer={product.offer}
            />))
            ) : (
              products.filter((offerProduct) => offerProduct.inOffer == true)
              .map((product) => (
                <ProductCard  
                id={product.id}
                img={product.img}
                name={product.name}
                price={product.price}
                inOffer={product.inOffer}
                stock={product.stock}
                description={product.description}
                offer={product.offer}
                />))
            )
      ) : (
        <div className="">
          <p className="">Cargando . . .</p>
        </div>
      )}
    </div>
  );
};

export default ProductCardList; 
