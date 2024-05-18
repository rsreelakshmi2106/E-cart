import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Wishlist from './Pages/Wishlist'
import PageNotFound from './Pages/PageNotFound'
import Cart from './Pages/Cart'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='#' element={<PageNotFound/>} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
