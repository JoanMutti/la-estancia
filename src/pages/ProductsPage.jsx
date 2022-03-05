import React from "react";
import Layout from '../components/Layout'
import PCardListContainer from "../components/productsComponents/PCardListContainer";
// import Layout from '../components/Layout'
const ProductsPage = () => {
  return (
        <Layout>
      <PCardListContainer inOffers={false} />  
      </Layout>
   
  );
};

export default ProductsPage;
