import React from "react";
import ProductCardList from "./ProductCardList";
import offersData from "../../assets/offersData";

import { useState, useEffect } from "react";
import firestoreFetch from "../../assets/firestoreFetch";
const PCardListContainer = ({ inOffers }) => {
  
  const [datos, setDatos] = useState([]);

  useEffect(() => {  
    firestoreFetch(inOffers)
      .then(result => setDatos(result))
      .catch(err => console.log(err))
  }, [datos]);

  useEffect(() => {
    return () => {
      setDatos([]);
    };
  }, []);

  // return <ProductCardList products={offersData} inOffers={inOffers} />;
  return <ProductCardList products={datos} inOffers={inOffers} />;
};

export default PCardListContainer;
