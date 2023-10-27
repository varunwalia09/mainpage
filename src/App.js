import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';

import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


{/* <Route path="/*" element={<page404 />} /> */}
          {/* <Route path="/user/:name" element={<User />} /> */}
          {/* This is for multiple users */}