import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PCardListContainer from "../components/productsComponents/PCardListContainer";

const OffersPage = () => {
  return (
    <div>
      <Header />
      <h1>Promos</h1>
      <PCardListContainer inOffers={true} />
      <Footer />
    </div>
  );
};

export default OffersPage;
