import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import products from '../assets/offersData'
import EditItemCount from './EditItemCount'

const ItemShoppingCart = ({product}) => {
    const [openEdit, setOpenEdit] = useState(false)

    return (
        <div className='sc-product'>
            <div className='sc-info-product-container'>
                <div className='sc-product-img-container'>
                    <img src={product.img} alt="" />
                </div>
                <div className='sc-product-name-price'>
                    <p className='sc-product-name'>{product.name}</p>
                    <p className='sc-product-price'>$ {product.price}</p>
                </div>
            </div>
            <div className='sc-product-controls'>
                <FiEdit fontSize={20} color='rgb(21, 20, 21)' onClick={() => setOpenEdit(!openEdit)}/>
                <RiDeleteBin6Line fontSize={20} color='rgb(21, 20, 21)' />
            </div>
            {openEdit && (
                <EditItemCount styleClass={{container: 'sc-product-edit', text: 'sc-product-edit-kg'}} />
            )}
        </div>
    )
}

const ShoppingCart = ({cartOpen, setCartOpen}) => {

    return (
        <div className={`cart ${cartOpen ? 'opened' : 'closed'}`}>
            <AiOutlineClose className='sc-close-icon' color='rgb(21, 20, 21)' fontSize={24} onClick={() => setCartOpen(false)} />
            <div className='sc-products-container'>
                {products.map(product => <ItemShoppingCart product={product} key={product.id} />)}
            </div>
            <div className='sc-subtotal-container'>
                <p className='sc-subtotal-title'>Subtotal del pedido</p>
                <p className='sc-subtotal-price'>$500,00</p>
            </div>
            <div className='sc-link sc-link-green'>
                <Link to={'/cart'} >Quiero finalizar compra</Link>
            </div>
            <div className='sc-link sc-link-brown'>
                <Link to={'/productos'} >Quiero seguir comprando</Link>
            </div>
        </div>
    )
}

export default ShoppingCart