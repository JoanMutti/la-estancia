import React, { useState, useEffect } from "react";

export const AppContext = React.createContext({});

export const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    localStorage.getItem("cart") &&
      setProducts(JSON.parse(localStorage.getItem("cart")));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products));
    products.length === 0 && localStorage.removeItem("cart");
  }, [products]);

  const addProduct = (product) => {
    const isInCart = (element) => element.id === product.id;
    !products.some(isInCart) && setProducts((prev) => [...prev, product]);
  };

  const removeProduct = (product) => {
    setProducts((prev) => prev.filter((ele) => ele.id !== product.id));
  };

  const addMore = (productId) => {
    const aux = products.map((ele) =>
      ele.id === productId ? { ...ele, cant: ele.cant + ele.offer } : ele
    );
    setProducts(aux);
  };

  const removeMore = (productId) => {
    if (products.find((product) => product.id === productId).cant > 0) {
      const aux = products.map((ele) =>
        ele.id === productId ? { ...ele, cant: ele.cant - ele.offer } : ele
      );
      setProducts(aux);
    }
  };

  const getSubtotal = () => {
    return products
      .map((product) => product.price * product.cant)
      .reduce((x, y) => x + y, 0);
  };

  const getQuantItems = () => {
    return products.length;
  };

  return (
    <AppContext.Provider
      value={{
        products,
        addMore,
        removeMore,
        addProduct,
        removeProduct,
        getSubtotal,
        getQuantItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
