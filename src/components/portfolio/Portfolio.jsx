import React from 'react';
import './Portfolio.css';
import  img1 from '../../assets/portfolio1.jpg';
import  img2 from '../../assets/portfolio2.jpg';
import  img3 from '../../assets/portfolio3.jpg';
import  img4 from '../../assets/portfolio4.jpg';
import  img5 from '../../assets/portfolio5.png';
import  img6 from '../../assets/portfolio6.jpg';

const portfolioData = [
  {
    id: 1,
    image: img1,
    title: 'Demo Title',
    github: 'https://github.com',
    demo: 'https://https://dribbble.com/Tubik'
  },
  {
    id: 2,
    image: img2,
    title: 'Demo Title',
    github: 'https://github.com',
    demo: 'https://https://dribbble.com/Tubik'
  },
  {
    id: 3,
    image: img3,
    title: 'Demo Title',
    github: 'https://github.com',
    demo: 'https://https://dribbble.com/Tubik'
  },
  {
    id: 4,
    image: img4,
    title: 'Demo Title',
    github: 'https://github.com',
    demo: 'https://https://dribbble.com/Tubik'
  },
  {
    id: 5,
    image: img5,
    title: 'Demo Title',
    github: 'https://github.com',
    demo: 'https://https://dribbble.com/Tubik'
  },
  {
    id: 6,
    image: img6,
    title: 'Demo Title',
    github: 'https://github.com',
    demo: 'https://https://dribbble.com/Tubik'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          portfolioData.map(({id, image, title, github,demo}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                  <a 
                    href={github} 
                    className='btn'
                    target='_blank'
                    >Github
                  </a>
                  <a 
                    href={demo} 
                    className='btn btn-primary' 
                    target='_blank'>Live Demo
                  </a>
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