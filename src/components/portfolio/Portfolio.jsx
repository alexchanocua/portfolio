import React, { useState } from 'react';
import './Portfolio.css';
import  img1 from '../../assets/portfolio.jpg';
import  img2 from '../../assets/roverImage.jpg';
// import Modal from '../modal/Modal';
import BasicModal from '../modal/Modal2';
import { Link } from 'react-router-dom';

const portfolioData = [
  {
    id: 1,
    image: img1,
    title: 'ultra',
    github: 'https://github.com/alexchanocua/ultraV2',
    demo: 'https://alexchanocua.github.io/ultraV2/',
    description: 'User profiled Photo/Art image sharing site.',
    tech: ['PostgreSQL', 'ExpressJS', 'ReactJS', 'NodeJS', 'MaterialUI', 'JavaScript' ],
    component: '/ultra'
  },

  {
    id: 1,
    image: img2,
    title: 'L.A./B.O.E. Mobile UI',
    github: 'https://github.com/pramirezx/BOE-Sidewalk-Monitoring-System',
    demo: 'https://alexchanocua.github.io/ultraV2/',
    description: 'Led a project for the City of Los Angeles and Bureau of Engineering through CSULA to develop software that' +
    ' included a Web App to render photo images with slope data, a mobile UI to control the rover, database and backend endpoints, and gathering physical' +
    ' slope data measurements from our test sites. I specifically developed the Mobile UI to control the Rover that began and packaged the collected data for data processing.',
    tech: ['Javascript', 'Bootstrap', 'CSS', 'HTML', 'rosLibJS' ],
    component: "/mobileUI"
  },

]

const Portfolio = ( ) => {
  
  // const [open, setOpen ] = useState(false);
  // const [modalInfo, setModalInfo] = useState({});

  // const handleModal = (image, title, description, tech) => {
  //   setOpen(true);
  //   setModalInfo({ image, title, description, tech });
  // }


  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          portfolioData.map(({id, image, title, github, demo, description, tech, component}) => {
            return(
              <article key={id} className='portfolio__item'>
                {/* <button className='openModalBtn' onClick={() => {handleModal(image, title, description, tech)}}> */}
                <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                </div>
                {/* </button> */}
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                  <a 
                    href={github} 
                    className='btn-clear'
                    target='_blank'
                    >Github
                  </a>

                  <Link to={component}>
                  <div 
                    onClick={() => {
                      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                    }}
                    className='btn-clear' 
                    target='_blank'>Project Details
                  </div>
                  </Link>
                  </div>
                  {/* <BasicModal open={open} onClose={()=> setOpen(false)} modalInfo={modalInfo} /> */}
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio;