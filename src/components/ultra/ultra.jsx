import React from 'react';
import { useEffect } from 'react';
import './ultra.css';
import image from '../../assets/portfolio.jpg';
import Footer from '../../components/projectFooter/projectFooter';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';



const project = {
    title: "Ultra",
    description: "Art/photography sharing website to display images of art in a focused way.",
    stack: ['React', 'Node.js', 'Express JS', 'PostgreSQL', 'Material UI',],
    type: 'Social',
    site: 'https://alexchanocua.github.io/ultraV2/',
    goal: 'I designed and architected Ultra and integrated my custom API to allow users to share their' +
        ' art/photography.',
    stackExp: 'I built the project using React JS because of its performative, structured, and productive library. Leveraged Material UI responsive framework and the front end was deployed on GitHub Pages. ' +
        ' The backend was implemented using Node JS and Express for its quick set up and performance, PostgresSQL was used for the database, and both were deployed with Heroku.' +
        ' Authentication was done using Bcrypt. ',
    problems: 'Initially I built the project with React in a class based model with bootstrap and CSS. I later discovered Material UI and decided to rebuild the first iteration of the project using ' + 
    'Material UIs framework and switched the project to functional components. I made this decision because I decided to want to learn Reacts hooks and this would be a good opportunity to get to learn them.',
    lessons: 'By building this project I learned several new technologies and also designed it in a way where the images are the main focus of the user. This project helped me gain experience with both the front and backend.' +
        'This project called for a responsive solution that would be visually pleasing on both desktop and mobile devices.' 
}

const ultra = () => {

  return (
    <>
        <section className='project'>
            
            <div className="header">
                <h5>Alejandro Chanocua</h5>
                <Link to="/portfolio"><Button id='backToHome'>Back to Home</Button></Link>
            </div>
            
            <div className="container project__container">
                <div className="title">
                    <h1>{project.title}</h1>
                    <p>1 minute read</p>
                    <p>{project.description}</p>
                </div>

                <div className="info">
                    <article className="card">
                        <h3>Type</h3>
                        <p>🤳🏼 {project.type}</p>
                    </article>
                    
                    <article className="card">
                        <h3>Stack</h3>
                        <ul>
                            {project.stack.map(element => {
                                return (
                                    <li>{element}</li>
                                )
                            })}
                        </ul>
                    </article>
                    
                    <article className="card">
                        <h3>Live Demo</h3>
                        <a href={project.site} className='btn-clear'>Link</a>
                    </article>
                </div>
            
            <div className="title">
                <div className="project__image">
                    <img src={image} alt="" />
                </div>
            </div>
            <div className="title">
                <h1>Project Goal</h1>
                <p>{project.goal}</p>
            </div>

            <div className="title">
                <h1>Web Stack and Explanation</h1>
                <p>{project.stackExp}</p>
            </div>

            <div className="title">
                <h1>Problems and Thought Process</h1>
                <p>{project.problems}</p>
            </div>

            <div className="title">
                <h1>Lessons Learned</h1>
                <p>{project.problems}</p>
            </div>

           
            </div>
           
        </section>
        {/* repalce with project footer */}
        <Footer/>
    </>
  )
}

export default ultra;