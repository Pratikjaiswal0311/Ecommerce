import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import About from './pages/About'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Order from './pages/Order'
import Collection from './pages/Collection'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import SearchBar from './component/SearchBar'
const App = () => {
  return (
   <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw]'>
    <Navbar/>
    <SearchBar/>
     <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/collection' element={<Collection/>} />
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>} />
     <Route path='/product/:productId' element={<Product/>} />
     <Route path='/cart' element={<Cart/>} />
     <Route path='/login' element={<Login/>} />
     <Route path='/place-order' element={<PlaceOrder/>} />
     <Route path='/oders' element={<Order/>}/>
     </Routes>
    </div>
  )
}
export default App