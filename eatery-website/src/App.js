import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './navigationFolder/NavBar';
import Home from './home/Home';
import About from './aboutFolder/About';
import Menu from './menuFolder/Menu';
import Contact from './contact/Contact';
import Footer from './navigationFolder/Footer';
import Cart from './cart/Cart';
import BookTable from './home/BookTable';
import DashBoard from './dashBoard/DashBoard';
function App() {
  return (
    <>
      <BrowserRouter>
      {/* <NavBar/> */}
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/about' Component={About}/>
          <Route path='/menu' Component={Menu}/>
          <Route path='/contact' Component={Contact}/>
          <Route path='/cart' Component={Cart}/>
          <Route path='/book_a_table' Component={BookTable}/>
          <Route path='/dashboard' Component={DashBoard}/>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
