import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Offers from "../components/offersComponents/Offers";
import Slider from "../components/Slider";
import firestoreFetch from "../assets/firestoreFetch";

const Home = () => {
  const [offerProducts, setOfferProducts] = useState([]);

  useEffect(() => {
    firestoreFetch().then((products) =>
      setOfferProducts(products.filter((product) => product.inOffer === true))
    );
  }, []);

  return (
    <div>
      <Layout>
        <Slider />
        <Offers products={offerProducts} />
      </Layout>
    </div>
  );
};

export default Home;
