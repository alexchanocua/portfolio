import React from 'react';
import MobileUI from './components/mobileUI/mobileUI';
import Home from './components/home/home';
import Ultra from './components/ultra/ultra';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/*' element={<Home/>} />
          <Route path='/ultra' element={<Ultra/>} />
          <Route path='/mobileUI' element={<MobileUI/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;