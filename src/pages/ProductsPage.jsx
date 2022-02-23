import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PCardListContainer from "../components/productsComponents/PCardListContainer";

const ProductsPage = () => {
  return (
    <div>
      <Header />
      <h1>Productos</h1>
      <PCardListContainer inOffers={false} />
      <Footer />
    </div>
  );
};

export default ProductsPage;
