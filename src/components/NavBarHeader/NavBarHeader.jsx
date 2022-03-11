import React from 'react'
import { NavLink } from 'react-router-dom'

const categories = [
    { address: '/', text: 'Home'},
    { address: '/productos', text: 'Productos'},
    { address: '/sobre-nosotros', text: 'Sobre Nosotros'},
    { address: '/', text: 'Recetas'},
    { address: '/', text: 'Promos'},
  ]
const NavBarHeader = () => {
  return (
    <>
    
<nav className="navbar navbar-expand-lg  navbar-light">
  <div className="container-fluid ">
    <button className="navbar-toggler button-header" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse header-nav" id="navbarNav">
      <ul className="navbar-nav">
      {categories.map((category, index) => (
          <li className="nav-item" key={category.text + index +1}>
            {/* No se si el NavLink necesita tener una key para funcionar, por eso la duplico en el <li> sumandole un 1 */}
          <NavLink
            to={category.address}
            key={category.text + index}
            className='header-nav-link '
          >
            {category.text}
          </NavLink>
          </li>
        ))}
      </ul>
    </div>
  </div>
</nav>
</>

  )
}

export default NavBarHeader