import React from 'react'
import logo from '../logo.svg'
import { ImFacebook, ImWhatsapp, ImTwitter } from 'react-icons/im'
import { AiOutlineInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer-container'>
        <img src={logo} alt="Logo" className='footer-logo' />
        <div className='footer-list-container'>
            <Link to={'#'}><p className='footer-list-item'>Sobre Nosotros</p></Link>
            <Link to={'#'}><p className='footer-list-item'>Nuestros Productos</p></Link>
            <Link to={'#'}><p className='footer-list-item'>Nuestros Locales</p></Link>
            <Link to={'#'}><p className='footer-list-item'>Recetas</p></Link>
            <Link to={'#'}><p className='footer-list-item'>Ayuda</p></Link>
            <Link to={'#'}><p className='footer-list-item'>Preguntas Frecuentes</p></Link>
            <Link to={'#'}><p className='footer-list-item'>Terminos y Condiciones</p></Link>
        </div>
        <div className='footer-socials-container'>
            <div className='social'>
                <a href="http://www.facebook.com" target='_blank' >
                    <ImFacebook fontSize={24} color='rgb(21, 20, 21)' />
                </a>
            </div>
            <div className='social'>
                <a href="http://www.facebook.com" target='_blank' >
                    <AiOutlineInstagram fontSize={24} color='rgb(21, 20, 21)' />
                </a>
            </div>
            <div className='social'>
                <a href="http://www.facebook.com" target='_blank' >
                    <ImTwitter fontSize={24} color='rgb(21, 20, 21)' />
                </a>
            </div>
            <div className='social'>
                <a href="http://www.facebook.com" target='_blank' >
                    <ImWhatsapp fontSize={24} color='rgb(21, 20, 21)' />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer