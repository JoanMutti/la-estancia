import React from 'react'
import logo from '../logo.svg'
import { ImFacebook, ImWhatsapp, ImTwitter } from 'react-icons/im'
import { AiOutlineInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className='footer-container'>
        <Link to={'/'}><img src={logo} alt="Logo" className='footer-logo' /></Link>
        <div className='footer-list-container'>
            <Link to={'/sobre-nosotros'}><p className='footer-list-item'>Sobre Nosotros</p></Link>
            <Link to={'/productos'}><p className='footer-list-item'>Nuestros Productos</p></Link>
            <Link to={'/preguntas-frecuentes'}><p className='footer-list-item'>Preguntas Frecuentes</p></Link>
            <Link to={'/terminos-y-condiciones'}><p className='footer-list-item'>Terminos y Condiciones</p></Link>
       
        </div>
        <div className='nuestrosLocales text-start'>
    <h5 >Nuestro local</h5>
        <a className='footer-list-item link-light' href='https://goo.gl/maps/SrBZU73u9HP4yi7t9'target='_blank'><b>Miguel de Salcedo 2010</b> - Castelar</a>
       <br/>
       <a className='footer-list-item link-light' href="tel: +5491151232431">Tel. 11-6651-0053 </a> 
</div>
        <div className='footer-socials-container'>
            <div className='social'>
                <a href="http://www.facebook.com/granjalaestanciaok" target='_blank' >
                    <ImFacebook fontSize={24} color='rgb(21, 20, 21)' />
                </a>
            </div>
            <div className='social'>
                <a href="https://www.instagram.com/granjalaestanciaok/" target='_blank' >
                    <AiOutlineInstagram fontSize={24} color='rgb(21, 20, 21)' />
                </a>
            </div>
           
            <div className='social'>
                <a href="https://wa.me/+5491166510053" target='_blank' >
                    <ImWhatsapp fontSize={24} color='rgb(21, 20, 21)' />
                </a>
            </div>
         
        </div>
    </footer>
    <div className="btn-group dropend " id="sitioCreado" >
  <button className="btn btn-dark dropdown-toggle btn-sm" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
    Sitio creado por &emsp;
  </button>
  <ul className="dropdown-menu dropdown-menu-dark " aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="https://www.linkedin.com/in/hidracaberomencia/" target='_blank'>Hidra Cabero</a></li>
    <li><a className="dropdown-item" href="https://www.linkedin.com/in/joan-mutti" target='_blank'>Joan Mutti</a></li>
    <li><a className="dropdown-item" href="https://www.linkedin.com/in/julian-bleker/" target='_blank'>Julián Bleker</a></li>
  </ul>
</div>
    
</>
  )
}

export default Footer