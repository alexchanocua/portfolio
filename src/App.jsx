import React, {useState} from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Ultra from './components/ultra/ultra';

import Home from './components/home/home';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/*' element={<Home/>} />
          <Route path='/ultra' element={<Ultra/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;