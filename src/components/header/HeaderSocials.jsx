import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
function HeaderSocials() {
  return (
    <div className="header__socials">
        <a className='ctaButton' href="https://www.linkedin.com/in/alejandro-chanocua-013606194/" target="_blank"><BsLinkedin/></a>
        <a className='ctaButton' href="https://github.com/alexchanocua" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials;