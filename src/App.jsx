import React, {useState, useEffect} from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Modal';

export const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({});


  useEffect(() => {
    if (openModal === true) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'visible';
    }

  }, [openModal])

  return (
    <>
      { openModal && <Modal 
                      closeModal={ setOpenModal }
                      modalInfo={ modalInfo }
                      /> 
      }
        <Header/>
      { !openModal && <Nav /> }
        <About  />
        <Experience  />
        {/* <Services  /> */}
        <Portfolio setOpenModal={setOpenModal}
                   setModalInfo={setModalInfo} />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}

export default App;