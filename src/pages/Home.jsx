import React from 'react'
import Layout from '../components/Layout'
import Offers from '../components/offersComponents/Offers'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
        <Layout>
          <Slider />
          <Offers />
        </Layout>
    </div>
  )
}

export default Home