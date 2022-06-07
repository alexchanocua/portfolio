import React from 'react'
import './About.css';
import ME from '../../assets/aboutme3.png';
import {ImCodepen} from 'react-icons/im';
import {FiUsers} from 'react-icons/fi';
import {VscNewFolder} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
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
              <h5>Location</h5>
              <small>Southern California OC Area</small>
            </article>

            <article className="about__card">
              <VscNewFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>2 Completed</small>
            </article>
          </div>
          <p>
            I am passionate about creating interactive and stable applications👨🏻‍💻. I am a lifelong learner 🎓  and love studying new technologies.  If you're looking for a developer 
            to add to your team, I'd love to hear from you! 
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>
      </div>
    </section>
  )
};

export default About;