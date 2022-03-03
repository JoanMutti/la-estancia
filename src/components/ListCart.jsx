import React from 'react'
import productos from '../assets/offersData'
import EditItemCount from './EditItemCount'
import { RiDeleteBin6Line } from 'react-icons/ri'

const ListProduct = ({producto}) => {
    return (
        <div className='cp-product'>
            <div className='cp-product-img-name-container'>
                <div className='cp-product-img-container'>
                    <img src={producto.img} alt="" />
                </div>
                <div className='cp-product-name-container'>
                    <p className='cp-product-name'>Milanesas de pollo y espinaca</p>
                </div>
            </div>
            <div className='cp-product-price-container'>
                <p className='cp-product-price'>{producto.price} <span>X {producto.offer}</span></p>
            </div>
            <EditItemCount styleClass={{container: 'cp-product-edit', text: 'cp-product-edit-kg'}} />
            <div className='cp-product-subtotal-container'>
                <p className='cp-product-subtotal'>{(producto.price * 2).toFixed(2).replace('.',',')}</p>
            </div>
            <RiDeleteBin6Line fontSize={20} color='rgb(21, 20, 21)' className='cp-product-delete-icon'/>
        </div>
    )
}

const ListCart = () => {
  return (
    <div className='cp-container'>
        <div className='cp-list-products'>
            <div className='cp-list-products-titles'>
                <h3>Producto</h3>
                <h3>Precio</h3>
                <h3>Cantidad</h3>
                <h3>Subtotal</h3>
            </div>
            <div className='cp-products-container'>
                {productos.map(product => <ListProduct producto={product} key={product.id} />)}
            </div>
            <div className='cp-product-total'>
                <p>Total:</p>
                <p>{productos.reduceRight((total, product) => total + product.price, 0)}</p>
            </div>
        </div>
        <div className='cp-detail-info'>

        </div>
    </div>
  )
}

export default ListCart