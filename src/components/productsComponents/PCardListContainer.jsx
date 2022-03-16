import React, { useContext } from "react";
import ProductCardList from "./ProductCardList";
import offersData from "../../assets/offersData";
import { ProductListContext } from "../../context/ProductListContext";
import { useState, useEffect } from "react";
import firestoreFetch from "../../assets/firestoreFetch";
const PCardListContainer = ({ inOffers }) => {
  // const [datos, setDatos] = useState([]);
  const { productList } = useContext(ProductListContext);

  // useEffect(() => {
  //   firestoreFetch(inOffers)
  //     .then((result) => setDatos(result))
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   return () => {
  //     setDatos([]);
  //   };
  // }, []);

  // return <ProductCardList products={offersData} inOffers={inOffers} />;
  return <ProductCardList products={productList} inOffers={inOffers} />;
};

export default PCardListContainer;
