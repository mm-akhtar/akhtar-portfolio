import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/core";
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

function Portfolio() {
    return (
        
      <section className='portfolio section' id='portfolio'>
      <h2 className='section__title'>Portfolio</h2>
      <span className='section__subtitle'>Most recent work</span>

      <div className='portfolio__container container'>
        <Swiper style={{paddingBottom:'3rem'}} cssMode={true} 
        navigation={true} 
        pagination={{clickable: true}} mousewheel={true} keyboard={true} className='mySwiper' loop>
          <SwiperSlide>
            <div className='portfolio__content grid'>
              <img src='/img/portfolio1.jpg' alt='portfolio' className='portfolio__img'></img>

              <div className='portfolio__data'>
                <h3 className='portfolio__title'>Modern Website</h3>
                <p className='portfolio__description'>Website adaptable to all devices, with ui components and animated interactions.</p>
                <a href='#hello' className='button button--flex button--small portfolio__button'>
                  Demo
                  <i className='uil uil-arrow-right button__icon'></i>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='portfolio__content grid'>
              <img src='/img/portfolio2.jpg' alt='portfolio' className='portfolio__img'></img>

              <div className='portfolio__data'>
                <h3 className='portfolio__title'>Brand Design</h3>
                <p className='portfolio__description'>Website adaptable to all devices, with ui components and animated interactions.</p>
                <a href='#hello' className='button button--flex button--small portfolio__button'>
                  Demo
                  <i className='uil uil-arrow-right button__icon'></i>
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='portfolio__content grid'>
              <img src='/img/portfolio3.jpg' alt='portfolio' className='portfolio__img'></img>

              <div className='portfolio__data'>
                <h3 className='portfolio__title'>Online Store</h3>
                <p className='portfolio__description'>Website adaptable to all devices, with ui components and animated interactions.</p>
                <a href='#hello' className='button button--flex button--small portfolio__button'>
                  Demo
                  <i className='uil uil-arrow-right button__icon'></i>
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

    )
}

export default Portfolio
