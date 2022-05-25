import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './Modal2.css';

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "95%",
  height: "80%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, onClose, modalInfo}) {

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal__container" >
            <Typography textAlign="center" id="modal__title" >
                {modalInfo.title}
            </Typography>
            <Box className='body__container'>
                <img className="modal-image" src={modalInfo.image} alt="none" />
                <Swiper className="container swiper__container"
                    // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    >

                    <SwiperSlide  className="swiper__item">
                        <h5 className='project__description'>Description</h5>
                        <small className='project__description-content'>{modalInfo.description}</small>
                    </SwiperSlide>  

                    <SwiperSlide  className="swiper__item">
                        <h5 className='project__description'>Description</h5>
                        <small className='project__description-content'>{modalInfo.description}</small>
                    </SwiperSlide>  

                    
                </Swiper>
            </Box>
        </Box>
      </Modal>
    </div>
  );
}