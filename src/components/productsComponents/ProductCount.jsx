import React, { useState, useEffect } from "react";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import AddProductCart from "../AddProduct/AddProductCart";

const ProductsCount = ({ initial = 0, product }) => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    setCount(initial);
  }, []);

  const plus = () => {
    setCount(count + 0.25);
  };
  const minus = () => {
    if (count > initial) {
      setCount(count - 0.25);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center row">
      <div
        className=" container container-fluid d-flex justify-content-between align-items-center"
        id="btnCount"
      >
        <button className="btn " id="btn-minus" onClick={minus}>
          -
        </button>
        <p className=" p-count text-center">{count}</p>
        <button className="btn " id="btn-plus" onClick={plus}>
          +
        </button>
      </div>
      <AddProductCart product={product} cant={count} />
    </div>
  );
};

export default ProductsCount;
