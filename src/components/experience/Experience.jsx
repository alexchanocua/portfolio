import React from 'react';
import './Experience.css';
import {BsCheckCircleFill} from 'react-icons/bs';

const Experience = () => {

  const fontEndExp = [
    'React',
    'JavaScript',
    'MaterialUI',
    'HTML',
    'CSS',
    'Bootstrap'
  ]

  const backEndExp = [
    'NodeJS',
    'MySQL',
    'MongoDB',
  ]

  return (
    <section id='experience'>
      <h2 id='experienceHeader'>My Experience</h2>

      <div className="container experience__container">

        {/* Beginning of Frontend */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>ReactJS</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Material UI</h4>
              </div>
            </article>

          </div>
        </div>
        {/* end of frontend */}

        {/* Beginning of Backend */}
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>NodeJS</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Express</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Machine Learning</h4>
              </div>
            </article>

            
          </div>
          {/* end of backend */}

        </div>
      </div>
    </section>
  )
}

export default Experience;