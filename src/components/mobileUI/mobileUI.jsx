import React from 'react';
import { useEffect } from 'react';
import './mobileUI.css';
import image from '../../assets/roverImage.jpg';
import Footer from '../../components/projectFooter/projectFooter';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';



const project = {
    title: "BEO Sidwalk Assesment System",
    description: "Project sponsored by City Of Los Angeles, Department of Public Works, Bureau of Engineering, and CSULA.",
    stack: ['Javascript', 'HTML', 'CSS', 'rolLibJS'],
    type: 'Sponsored school project. 👨🏻‍💻',
    site: '',
    goal: 'To develop various software that measured crossing/running slopes and gps points of sidewalk segments, time signatures of data collection in conjunction with the prebuilt Rover, 360 photo images, process/package data, a UI that that renders photo images with slope data and specific sidewalk segments, ' +
    'a backend to process the data to be stored in our database, and process the data so the City of LAs Navigate LA website can map the data on their layer. ',
    goal2: 'After data collection and processing, the data would be used as an index for severity of sidewalks in the City of LA. Meaning that sidewalks with higher severity would be given priority in repairs to follow Federal ADA standards.',
    role: 'I was the project lead of 10, my specific role was to oversee the project, help out teams with development when needed,  ' +
        ' oversee the documentation of the several components in the project, and develop the mobile UI which initiated the data collection and controlled the rover.',
    stackExp: 'The mobile UI was built using HTML, CSS, Javascript, and rosLib. These technologies were chosen because of their lightweight and low barrier of entry for the next team to pick up. ',
    problems: 'The client requested the rover UI be intuitive to use and have minimal user interaction while the rover is collecting data. I worked with our advisor and the team to see what data they needed from the rover. I built and tested several iterations of the UI ' + 
    'that interacted with the robot operating system api (roslib).',
    lessons: 'Working on this project I took an approach of setting small goals for each subteam planning out before hand to avoid blockers, building iterations of each component in the project, and testing them on the field with the rover. This led to a fast paced process that yielded ' +
    'well performing results. Having the opportunity to build this project from scratch and learn from the Bureau of Engineering team gave the team and I insight of how to to design and meet the clients needs.' 
}

const mobileUI = () => {

  return (
    <>
        <section className='project'>
            
            <div className="header">
                <Link to="/portfolio"><Button className='backToHome'>Back to Home</Button></Link>
            </div>
            
            <div className="container project__container">
                <div className="title">
                    <h1 className='project__title'>{project.title}</h1>
                    <p>3 minute read</p>
                    <p>{project.description}</p>
                </div>

                <div className="info">
                    <article className="card">
                        <h3>Type</h3>
                        <p> {project.type}</p>
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
                    
                    {/* <article className="card">
                        <h3>Live Demo</h3>
                        <a href={project.site} className='btn-clear'>Link</a>
                    </article> */}
                </div>
            
            <div className="title">
                <div className="project__image">
                    <img src={image} alt="" />
                </div>
            </div>

            <div className="title">
                <h1>Project Goal</h1>
                <p>{project.goal}</p>
                <p><br></br>{project.goal2}</p>
            </div>

            <div className="title">
                <h1>Role</h1>
                <p>{project.role}</p>
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
                <p>{project.lessons}</p>
            </div>

           
            </div>
           
        </section>
        {/* repalce with project footer */}
        <Footer/>
    </>
  )
}

export default mobileUI;