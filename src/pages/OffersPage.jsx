import React from "react";
import Layout from "../components/Layout";
import PCardListContainer from "../components/productsComponents/PCardListContainer";

const OffersPage = () => {
  return (
    <Layout>
      <PCardListContainer inOffers={true} />
    </Layout>
  );
};

export default OffersPage;
