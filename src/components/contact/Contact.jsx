import React, {useRef} from 'react';
import './Contact.css';
import {MdOutlineMailOutline} from 'react-icons/md';
// import {RiMessengerLine} from 'react-icons/ri';
import {BsLinkedin} from 'react-icons/bs';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8uebn52', 'template_nv7jn65', form.current, 'ia89qYQsyDFjJfJME')
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h2 id='contactme'>Get In Touch</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5 id='email'>chanocuaalejandro@gmail.com</h5>
            <a href="mailto:chanocuaalejandro@gmail.com">Send a Message</a>
          </article>

          {/* <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Alejandro Chanocua</h5>
            <a href="https://m.me/alejandro.chanocua" target="_blank">Send a Message</a>
          </article> */}

          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <a href="https://linkedin.co" target="_blank">View Linkedin</a>
          </article>
        </div>
        {/* End of contact options */}

        <form ref={form} onSubmit={sendEmail}>
          <h4>Or send me an email direct.</h4>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn'> Send Message</button>
        </form>
      </div>
    </section >
  )
}

export default Contact;