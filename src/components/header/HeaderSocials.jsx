import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';
function HeaderSocials() {
  return (
    <div className="header__socials">
        <a className='ctaButton' href="https://linkin.com" target="_blank"><BsLinkedin/></a>
        <a className='ctaButton' href="https://github.com" target="_blank"><FaGithub/></a>
        <a className='ctaButton' href="https://driblle.com" target="_blank"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials;