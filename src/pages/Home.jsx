import React, { useEffect, useState, useContext } from "react";
import Layout from "../components/Layout";
import Offers from "../components/offersComponents/Offers";
import Slider from "../components/Slider";
import firestoreFetch from "../assets/firestoreFetch";
import { ProductListContext } from "../context/ProductListContext";

const Home = () => {
  const { productList } = useContext(ProductListContext);

  return (
    <div>
      <Layout>
        <Slider />
        <Offers products={productList} />
      </Layout>
    </div>
  );
};

export default Home;
