import React from "react";
import ProductCardList from "./ProductCardList";
import offersData from "../../assets/offersData";
const PCardListContainer = ({ inOffers }) => {
  return <ProductCardList products={offersData} inOffers={inOffers} />;
};

export default PCardListContainer;
