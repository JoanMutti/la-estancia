import React, { useContext, useState } from 'react'
import EditItemCount from './EditItemCount'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { AppContext } from '../context/AppContext'
import ClientForm from './ClientForm'

const ListProduct = ({product}) => {
    const { removeMore, addMore, removeProduct } = useContext(AppContext)

    return (
        <div className='cp-product'>
            <div className='cp-product-img-name-container'>
                <div className='cp-product-img-container'>
                    <img src={product.img} alt="" />
                </div>
                <div className='cp-product-name-container'>
                    <p className='cp-product-name'>{product.name}</p>
                </div>
            </div>
            <div className='cp-product-price-container'>
                <p className='cp-product-price'>$ {product.price} <span>X {product.soldFor}</span></p>
            </div>
            <EditItemCount styleClass={{container: 'cp-product-edit', text: 'cp-product-edit-kg'}} product={product} onClickAdd={addMore} onClickRemove={removeMore} />
            <div className='cp-product-subtotal-container'>
                <p className='cp-product-subtotal'>{`$ ${(product.price * product.cant).toFixed(2)}`}</p>
            </div>
            <RiDeleteBin6Line fontSize={20} color='rgba(21, 20, 21, 0.5)' className='cp-product-delete-icon' onClick={() => removeProduct(product)} />
        </div>
    )
}

const ListCart = () => {
    const { products, getSubtotal } = useContext(AppContext)
    const [name, setName ] = useState('') 
    const [mail, setMail ] = useState('') 
    const [phone, setPhone ] = useState('') 

    return (
        <div className='cp-container'>
            {
                products.length > 0 
                    ? (
                        <>
                            <div className='cp-list-products'>
                                <div className='cp-list-products-titles'>
                                    <h3>Producto</h3>
                                    <h3>Precio</h3>
                                    <h3>Cantidad</h3>
                                    <h3>Subtotal</h3>
                                </div>
                                <div className='cp-products-container'>
                                    {products.map(product => <ListProduct product={product} key={product.id} />)}
                                </div>
                                <div className='cp-product-total'>
                                    <p>Total:</p>
                                    <p>{`$ ${getSubtotal().toFixed(2)}`}</p>
                                </div>
                            </div>
                            <div className='cp-detail-info'>
                                <h3>Mis datos</h3>
                                <ClientForm 
                                    name={name} 
                                    setName={setName} 
                                    mail={mail} 
                                    setMail={setMail} 
                                    phone={phone}
                                    setPhone={setPhone}
                                />
                                <button className='cp-btn-finish'>Finalizar Compra</button>
                            </div>
                        </>
                    ) : (
                        <h3>No hay productos</h3>
                    )

            }
        </div>
    )
}

export default ListCart