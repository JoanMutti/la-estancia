import React from 'react'
// import { useEffect, useState } from 'react'
import ProductCardList from './ProductCardList'
import offersData from '../../assets/offersData'
const PCardListContainer = ({inOffers}) => {

//Creo que esta mal hecho, igualmente habria que llamarlo desde fireBase
    // const customFetch = (time, task) => {
    //     return new Promise((resolve, reject) => {
    //       setTimeout(() => {
    //         if (true) {
    //           resolve(task);
    //         } else {
    //           reject("Error");
    //         }
    //       }, time);
    //     });
    //   };

    //   const [data, setData] = useState([])
    //   let resolve = 0
    //   useEffect(() => {
    //     customFetch(resolve, offersData)
    //       .then((result) => setData(result))
    //       .catch((err) => console.log(err));
    //   }, [resolve]);
      



  return (
    <div className=''>
      <nav>FILTROS</nav>
        <ProductCardList products={offersData} inOffers={inOffers}/>
        {/* <ProductCardList products={data}/> */}
    </div>
  )
}

export default PCardListContainer