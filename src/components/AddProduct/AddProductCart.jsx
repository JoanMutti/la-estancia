import React from 'react'
// Falta importar el contexto para usar la funcion
const AddProductCart = ({product}) => {
  return (
    <button className='btnOnAdd btn btn-success rounded-pill' onClick={()=> addProduct(product)}>
    Agregar al carrito
  </button>
  )
}

export default AddProductCart