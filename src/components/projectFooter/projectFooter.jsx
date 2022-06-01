import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import './projectFooter.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function projectFooter() {
  return (
    <footer>
  
    <ul className='project__permalinks'>
      <li><Link to="/#"><Button onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>Back to Home</Button></Link></li>
    </ul>

    <div className="project__footer__socials">
      <a href="https://linkedin.com"><BsLinkedin/></a>
    </div>

    <div className="project__footer__copyright">
      <small>&copy; Alejandro Chanocua. All rights reserved.</small>
    </div>
  </footer>
  )
}

export default projectFooter;