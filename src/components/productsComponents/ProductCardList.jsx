import React, {useState} from "react";
import ProductCard from "./ProductCard";

const ProductCardList = ({ products, inOffers }) => {
 
  const [type, setType] = useState([])
  return (
    <div className="container container-fluid ">
      {products.length > 0 ? (
        inOffers === false ? (
          <>   
          <div className="navbar navbar-expand">  
        <button className="btn btn-outline-light border-0 rounded-pill" id="productos" autoFocus onClick={()=>{setType(products.filter((p)=>p.type.includes('productos')))}}>Ver todos</button> 
        <button className="btn btn-outline-light border-0 rounded-pill" onClick={()=>{setType(products.filter((p)=>p.type.includes('carniceria')))}}>Carnicería</button> 
        <button className="btn btn-outline-light border-0 rounded-pill" onClick={()=>{setType(products.filter((p)=>p.type.includes('polleria')))}}>Pollería</button> 
        <button className="btn btn-outline-light border-0 rounded-pill" onClick={()=>{setType(products.filter((p)=>p.type.includes('vegetariano')))}}>Vegetariano</button> 
        <button className="btn btn-outline-light border-0 rounded-pill" onClick={()=>{setType(products.filter((p)=>p.type.includes('congelados')))}}>Congelados</button> 
        </div>
        <h1 className="fs-2">Productos</h1>
        <div className="products-cards-container col align-items-start justify-content-center">
          {  
              type.map((product) => ( 
                <ProductCard  
                id={product.id}
                img={product.img}
                name={product.name}
                price={product.price}
                inOffer={product.inOffer}
                stock={product.stock}
                description={product.description}
                offer={product.offer}
                key={product.id}
                />
                ))
              }
              </div>
            </>
          
            ) : (
              <>
              <h1 className="fs-2">Promos</h1>
        <div className="products-cards-container col align-items-start justify-content-center">
              {products.filter((offerProduct) => offerProduct.inOffer == true)
              .map((product) => (
                <ProductCard  
                id={product.id}
                img={product.img}
                name={product.name}
                price={product.price}
                inOffer={product.inOffer}
                stock={product.stock}
                description={product.description}
                offer={product.offer}
                key={product.id}
                />))}
                </div></>
            )
      ) : (
        <div className="container">
          <p className="fs-4">Cargando . . .</p>
        </div>
      )}
    </div>
  );
};

export default ProductCardList; 
