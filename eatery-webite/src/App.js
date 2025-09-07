import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './navigationFolder/NavBar';
import Home from './home/Home';
import Service from './serviceFolder/Service';
import About from './aboutFolder/About';
import Menu from './menuFolder/Menu';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/service' Component={Service}/>
          <Route path='/about' Component={About}/>
          <Route path='/menu' Component={Menu}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
