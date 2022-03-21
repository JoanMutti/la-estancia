import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link, useParams } from "react-router-dom";
import Loader from "../Loader";
const ProductCardList = ({ products, inOffers }) => {
  // useEffect(() => {
  //   if (type.length < 1) {
  //     setType(products.filter((p) => p.type.includes("productos")));
  //   }
  // }, []);

  return (
    <div className="container container-fluid ">
      {products.length > 0 ? (
        inOffers === false ? (
          <>
            {/* <nav className="navbar navbar-expand ">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {navOptions.map((type) => (
                  <li className="nav-item" key={type.key + 42}>
                    <Link
                      className="btn btn-outline-light border-0 rounded-pill m-1"
                      to={
                        type.key != "productos"
                          ? "/productos/" + type.key
                          : "/productos"
                      }
                      onClick={() => {
                        setType(
                          products.filter((p) => p.type.includes(type.key))
                        );
                      }}
                    >
                      {type.value}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav> */}
            <h1 className="fs-2">Productos</h1>
            <div className="products-cards-container col align-items-start justify-content-center">
              {products.map((product) => (
                <ProductCard
                  product={product}
                  key={"productCardId" + product.id}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <h1 className="fs-2 m-4">Promos</h1>
            <div className="products-cards-container col align-items-start justify-content-center">
              {products
                .filter((offerProduct) => offerProduct.inOffer == true)
                .map((product) => (
                  <ProductCard
                    product={product}
                    key={"productInOffer" + product.id}
                  />
                ))}
            </div>
          </>
        )
      ) : (
        <div className="container">
          {/* <p className="fs-4">Cargando . . .</p> */}
          <Loader />
        </div>
      )}
    </div>
  );
};

export default ProductCardList;
