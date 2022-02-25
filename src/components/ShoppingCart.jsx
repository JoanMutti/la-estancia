import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const ShoppingCart = ({cartOpen, setCartOpen}) => {

    console.log(cartOpen)

    return (
        <div className={`cart ${cartOpen ? 'opened' : 'closed'}`}>
            <AiOutlineClose fontSize={24} color='black' />
        </div>
    )
}

export default ShoppingCart