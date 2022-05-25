import React from 'react';
// import './Modal.css';
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Modal = ( {closeModal, modalInfo} ) => {


  return (
    <div className="modal__background">
        <div className="container modal__container">
          <div className="titleCloseBtn">
            <button onClick={() => {closeModal(false)}}>&times;</button>
          </div>
          
          {/* <div className="title">
            <h2>{modalInfo.title}</h2>
          </div> */}

          <div className="body">
            <div className="modalImage">
              <img src={modalInfo.image} alt="image" />
            </div>

            <div className="description">
              
              {/* <div className="summary">
                  <h2>Description:</h2>
                  <p>{modalInfo.description}</p>
                </div>

              <div className="tech">
                <h2>Technologies Used:</h2>
                <ul>
                  {modalInfo.tech.map(name => {
                    return(<li>{name}</li>)
                  })}
                </ul>
              </div> */}

              <Swiper className='swiper__description'
                    // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
              >
                <SwiperSlide key='1' className="swiper__item">
                  <div className="summary">
                    <h2>Description:</h2>
                    <p>{modalInfo.description}</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper__item">
                  <div className="tech">
                    <h2>Technologies Used:</h2>
                    <ul>
                      {modalInfo.tech.map(name => {
                        return(<li>{name}</li>)
                      })}
                    </ul>
                  </div>
                </SwiperSlide>
              </Swiper>

            </div>

          </div>
        </div>
    </div>
  )
};

export default Modal