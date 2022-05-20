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
      <h5>Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        {/* Beginning of Frontend */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Beginner</small>
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
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Beginner</small>
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