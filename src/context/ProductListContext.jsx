import React, { useState, useEffect } from "react";
import firestoreFetch from "../assets/firestoreFetch";

export const ProductListContext = React.createContext({});

export const ProductListContextProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    firestoreFetch()
      .then((result) => setProductList(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ProductListContext.Provider value={{ productList }}>
      {children}
    </ProductListContext.Provider>
  );
};
