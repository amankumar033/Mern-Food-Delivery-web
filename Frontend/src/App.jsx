import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './pages/Home/home'
import {Routes,Route} from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Loginpopup from './Components/Loginpopup/Loginpopup'
import Footer from './Components/Footer/Footer'
const App = () => {
  const [showlogin,setshowlogin]=useState(false);
  return (
    <>
    {showlogin?<Loginpopup setshowlogin={setshowlogin} />:<></>}
    <div className='app'>
      <Navbar setshowlogin={setshowlogin}/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Cart' element={<Cart/>} />
    <Route path='/Place-order' element={<PlaceOrder/>}/>
    </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App