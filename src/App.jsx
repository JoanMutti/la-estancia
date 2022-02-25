import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage'
import OffersPage from './pages/OffersPage'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/productos' exact element={<ProductsPage />} />
          <Route path='/promos' exact element={<OffersPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
