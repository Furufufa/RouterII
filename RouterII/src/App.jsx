import React from 'react';
import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom';
import Home from './views/Home';
import Pokemones from './views/Pokemones';
import Pokemons from './components/Pokemons';
import Navbar from './components/Navbar';
import './index.css';
import './App.css';

const App = () => {
  
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemones' element={<Pokemons />} />
          <Route path='/pokemon/:name'element={<Pokemones />} />
        </Routes>
      </div>      
    </>
  )
}

export default App
