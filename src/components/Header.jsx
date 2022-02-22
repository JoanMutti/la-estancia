import React from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import {AiOutlineHeart} from 'react-icons/ai'
import logo from '../logo.svg'
import { NavLink } from 'react-router-dom'

const categories = [
  { address: '/', text: 'Home'},
  { address: '/productos', text: 'Productos'},
  { address: '/sobre-nosotros', text: 'Sobre Nosotros'},
  { address: '/recetas', text: 'Recetas'},
  { address: '/promos', text: 'Promos'},
]

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
      <nav className='header-nav'>
        {categories.map((category, index) => (
          <NavLink
            to={category.address}
            key={category.text + index}
            className='header-nav-link'
          >
            {category.text}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header