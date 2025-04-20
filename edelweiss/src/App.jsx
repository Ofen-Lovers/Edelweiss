import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/header'; // Import the Header component 
import Home from './pages/Home/index'; // Import the Home component
import About from './pages/About/about';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact ={true} path="/" element ={<Home/>} />
        <Route exact ={true} path="/about" element ={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
