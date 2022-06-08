import React from 'react';
import './Portfolio.css';
import  img1 from '../../assets/portfolio.jpg';
import  img2 from '../../assets/roverImage.jpg';
import { Link } from 'react-router-dom';

const portfolioData = [
  {
    id: 1,
    image: img1,
    title: 'ultra',
    github: 'https://github.com/alexchanocua/ultraV2',
    component: '/ultra'
  },

  {
    id: 1,
    image: img2,
    title: 'L.A./B.O.E. Mobile UI',
    github: 'https://github.com/pramirezx/BOE-Sidewalk-Monitoring-System',
    component: "/mobileUI"
  },

]

const Portfolio = ( ) => {
  
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          portfolioData.map(({id, image, title, github, component}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                </div>
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
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio;