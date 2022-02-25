import React from 'react'
// import { useEffect, useState } from 'react'
import ProductCardList from './ProductCardList'
import offersData from '../../assets/offersData'
const PCardListContainer = ({inOffers}) => {

//Llamada de Firebase

  return (
    <div className=''>
      
        <ProductCardList products={offersData} inOffers={inOffers} />
        {/* <ProductCardList products={data}/> */}
    </div>
  )
}

export default PCardListContainer