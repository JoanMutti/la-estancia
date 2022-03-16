import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage'
import OffersPage from './pages/OffersPage'
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from './pages/AboutUs/AboutUs'
import Cart from './pages/Cart'
import Faq from './pages/Faq/Faq'
import Terms from './pages/Terms/Terms'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/productos' exact element={<ProductsPage />} />
          <Route path='/productos/:type' element={<ProductsPage/>}/>
          <Route path='/sobre-nosotros' exact element={<AboutUs />} />
          <Route path='/promos' exact element={<OffersPage />} />
          <Route path='/cart' exact element={<Cart />} />
          <Route path='/preguntas-frecuentes' exact element={<Faq />} />
          <Route path='/terminos-y-condiciones' exact element={<Terms />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
