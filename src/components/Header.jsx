import React, {useState} from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import logo from '../logo.svg'
import NavBarHeader from './NavBarHeader/NavBarHeader'
import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'


const Header = ({setCartOpen}) => {

  return (
    <header>
      <div className='header-up'>
        <img src={logo} alt="Logo" className='header-up-logo' />
        <div className='header-up-icons'>
          <AiOutlineHeart fontSize={28} color='#fafafa' className='header-up-icon' />
          <CartWidget setCartOpen={setCartOpen} />
        </div>
      </div>
      <NavBarHeader/>
    </header>
  )
}

export default Header