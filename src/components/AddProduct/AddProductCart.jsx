import React, {useContext} from 'react'
import { AppContext } from '../../context/AppContext'
const AddProductCart = ({product, cant}) => {

    const { addProduct } = useContext(AppContext)

    const productCant = {...product, cant:cant}

  return (
    <button className='btnOnAdd btn btn-success rounded-pill' onClick={()=>cant>0 && addProduct(productCant)}>
    Agregar al carrito
  </button>
  )
}

export default AddProductCart
