import React from 'react'
// import Layout from '../components/Layout'
import Footer from "../components/Footer";
import Header from "../components/Header";
const AboutUs = () => {
let title = 'Nuestra Historia'
let text = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi cum iste, impedit quas placeat nihil quam sequi reiciendis molestiae assumenda provident voluptatem recusandae temporibus, fugit fugiat quibusdam praesentium veritatis!'

  return (
      <>
    {/* <Layout /> */}
    
  <Header />{/* Eliminar despues del merge */}
    <div className='aboutUs'>
<div className='aboutUs-card container container-fluid rounded-3 text-center'>
<h1 className='fs-1 aboutUs-title'>{title}</h1>
<p className='aboutUs-text'>{text}</p>
</div>
</div>
    {/* <Layout /> */}
  <Footer />{/* Eliminar despues del merge */}
  </>
  )
}

export default AboutUs