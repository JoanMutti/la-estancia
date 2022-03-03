import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage'
import OffersPage from './pages/OffersPage'
import Cart from './pages/Cart'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/productos' exact element={<ProductsPage />} />
          <Route path='/promos' exact element={<OffersPage />} />
          <Route path='/cart' exact element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
