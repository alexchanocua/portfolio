import React from 'react'
import './About.css';
import ME from '../../assets/aboutme2.jpg';
import {ImCodepen} from 'react-icons/im';
import {FiUsers} from 'react-icons/fi';
import {VscNewFolder} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        {/* cards */}
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <ImCodepen className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Year Development Experience</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ clients worldwide</small>
            </article>

            <article className="about__card">
              <VscNewFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>1 Completed Project</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem illo quisquam assumenda et, animi blanditiis ipsam esse repellat, quo quasi enim cumque? Accusantium ea voluptatibus cupiditate laborum veniam perferendis expedita.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
};

export default About;