import React, {useState} from "react";
import ProductCard from "./ProductCard";


// const foodType = [ 
//   { address: '/productos', text: 'Ver todos', type:'productos'},
//   { address: '/productos/carniceria', text: 'Carnicería', type:'carniceria'},
//   { address: '/productos/polleria', text: 'Pollería', type:'polleria'},
//   { address: '/productos/vegetariano', text: 'Vegetariano', type:'vegetariano'},
//   { address: '/productos/congelados', text: 'Congelados', type:'congelados'},
// ]
const ProductCardList = ({ products, inOffers }) => {
 
  const [type, setType] = useState('')

var filter = [...products] //no sirve. el problema es de alcance
  return (
    <div className="">
      {products.length > 0 ? (
        inOffers === false ? (
          <>   
        <button onClick={()=> {setType("congelados"); filter = products.filter((p)=>p.type.includes(type))}}>filtro</button> 
        {/* //esto si registra la seleccion */}
        <div>filtro</div>
        <div>filtro</div>
        <div>filtro</div>
          {
          // products.filter((type)=>(type.type.includes(types))).   
          
          filter.map((product) => (
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
            </>
          
            ) : (
              products.filter((offerProduct) => offerProduct.inOffer == true)
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
                />))
            )
      ) : (
        <div className="">
          <p className="">Cargando . . .</p>
        </div>
      )}
    </div>
  );
};

export default ProductCardList; 
