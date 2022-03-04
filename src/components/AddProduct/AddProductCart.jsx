import React, {useContext} from 'react'
import { AppContext } from '../../context/AppContext'
const AddProductCart = ({product, cant}) => {

    const test = useContext(AppContext)

    const productCant = {...product, cant:cant}

  return (
    <button className='btnOnAdd btn btn-success rounded-pill' onClick={()=>cant>0 && test.addProduct(productCant)}>
    Agregar al carrito
  </button>
  )
}

export default AddProductCart
