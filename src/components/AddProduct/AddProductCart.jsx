import React, {useContext} from 'react'
import { AppContext } from '../../context/AppContext'
const AddProductCart = ({product, cant}) => {

    const { addProduct } = useContext(AppContext)

    const productCant = {...product, cant:cant}

  return (
    <button className=' btn rounded-pill d-flex justify-content-center align-items-center' id="btnOnAdd" onClick={()=>cant>0 && addProduct(productCant)}>
      Agregar al carrito
    </button>
  )
}

export default AddProductCart
