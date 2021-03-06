import React from 'react';
import CV from '../../assets/Alejandro_Chanocua_Resume.pdf';

function CTA() {
  return (
    <div className="cta">
        <a href={CV} download className='btn resume'>Download Resume</a>
        <a href="#contact" className='btn contactMe'>Contact Me</a>
    </div>
  )
};

export default CTA;