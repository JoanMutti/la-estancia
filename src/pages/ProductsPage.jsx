import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PCardListContainer from "../components/productsComponents/PCardListContainer";
// import Layout from '../components/Layout'
const ProductsPage = () => {
  return (
    <div>
        {/* <Layout /> */}
      <Header /> {/* Eliminar despues del merge */}
      <PCardListContainer inOffers={false} />
      <Footer />{/* Eliminar despues del merge */}
        {/* <Layout /> */}
    </div>
  );
};

export default ProductsPage;
