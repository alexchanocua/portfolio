import React from 'react';
import './Testimonials.css';
import avt1 from '../../assets/avatar1.jpg';
import avt2 from '../../assets/avatar2.jpg';
import avt3 from '../../assets/avatar3.jpg';
import avt4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonialData =[
  {
    avatar: avt1,
    name: "Ernest Jones",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit velit, nihil quaerat numquam corporis ducimus mollitia alias amet fugit fugiat!"
  },
  {
    avatar: avt2,
    name: "John Jones",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit velit, nihil quaerat numquam corporis ducimus mollitia alias amet fugit fugiat!"
  },
  {
    avatar: avt3,
    name: "Michael Jones",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit velit, nihil quaerat numquam corporis ducimus mollitia alias amet fugit fugiat!"
  },
  {
    avatar: avt4,
    name: "Juan Jones",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit velit, nihil quaerat numquam corporis ducimus mollitia alias amet fugit fugiat!"
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
       >
        {
          testimonialData.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials;