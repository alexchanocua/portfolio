import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/me_final.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        {/* <h5>Hello I'm</h5>  */}
        <h1>Alejandro Chanocua</h1>
        <h5 className="title">Software Engineer</h5>
        <CTA/>
        <HeaderSocials/>

        
        <div className="circle"></div>
        <div className="me">
          <img id='image' src={ME} alt="me" />
        </div>

        
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;