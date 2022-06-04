import React from 'react';
import './Footer.css';
import {BsLinkedin} from 'react-icons/bs';


const Footer = () => {
  return (
    <footer>
  
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/alejandro-chanocua-013606194/" target="_blank"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Alejandro Chanocua. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;