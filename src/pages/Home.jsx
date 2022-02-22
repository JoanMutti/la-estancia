import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Offers from '../components/offersComponents/Offers'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
        <Header />
        <Slider />
        <Offers />
        <Footer />
    </div>
  )
}

export default Home