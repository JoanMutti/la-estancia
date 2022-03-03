import React from 'react'
import Layout from '../components/Layout'
import ListCart from '../components/ListCart'

const Cart = () => {
  return (
    <Layout>
        <h3 className='cp-title'>Mi carrito de compras</h3>
        <ListCart />
    </Layout>
  )
}

export default Cart