import React from 'react'
import {FiShoppingCart} from 'react-icons/fi'


const CartWidget = ({setCartOpen}) => {


    return (
        <div>
            <FiShoppingCart fontSize={28} color='#fafafa' className='header-up-icon' onClick={() => setCartOpen(true)}/>
        </div>
    )
}

export default CartWidget