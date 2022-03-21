import React, { useContext } from "react";
import ProductCardList from "./ProductCardList";
import CategoryNav from "./CategoryNav";
import { ProductListContext } from "../../context/ProductListContext";
import { useState, useEffect } from "react";
import firestoreFetch from "../../assets/firestoreFetch";
import { useParams } from "react-router-dom";
const PCardListContainer = ({ inOffers }) => {
  const { productList } = useContext(ProductListContext);
  const { type } = useParams();
  const [filterProducts, setFilterProducts] = useState(productList);

  useEffect(() => {
    if (type) {
      const aux = productList.filter(
        (product) => product.type.includes(type) === true
      );
      setFilterProducts(aux);
    } else {
      setFilterProducts(productList);
    }
  }, [type, productList]);

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

  // useEffect(() => {
  //   return () => {
  //     setDatos([]);
  //   };
  // }, []);

  // return <ProductCardList products={offersData} inOffers={inOffers} />;
  return (
    <>
      <CategoryNav />
      <ProductCardList products={filterProducts} inOffers={inOffers} />
    </>
  );
};

export default PCardListContainer;
