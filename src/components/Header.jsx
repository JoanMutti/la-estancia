import React from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import {AiOutlineHeart} from 'react-icons/ai'
import logo from '../logo.svg'
import NavBarHeader from './NavBarHeader/NavBarHeader'



const Header = () => {
  return (
    <header>
      <div className='header-up'>
        <img src={logo} alt="Logo" className='header-up-logo' />
        <div className='header-up-icons'>
          <AiOutlineHeart fontSize={28} color='#fafafa' className='header-up-icon' />
          <FiShoppingCart fontSize={28} color='#fafafa' className='header-up-icon' />
        </div>
      </div>
      <NavBarHeader/>
    </header>
  )
}

export default Header