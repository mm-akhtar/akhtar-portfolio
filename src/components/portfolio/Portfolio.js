import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/core";
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

function Portfolio() {
    return (
			<section className='portfolio section' id='portfolio'>
				<div className='skills__section__header'>
					<i className='uil uil-arrow-circle-left home__scroll-mouse swiper-button-prev-portfolio'></i>
					<div>
						<h2 className='section__title'>Portfolio</h2>
						<span className='section__subtitle'>Most recent work</span>
					</div>
					<i className='uil uil-arrow-circle-right home__scroll-mouse swiper-button-next-portfolio'></i>
				</div>

				<div className='portfolio__container container'>
					<Swiper
						style={{paddingBottom: '3rem'}}
						navigation={{
							nextEl: '.swiper-button-next-portfolio',
							prevEl: '.swiper-button-prev-portfolio',
						}}
						cssMode={true}
						pagination={{clickable: true}}
						mousewheel={true}
						keyboard={true}
						className='mySwiper'
						spaceBetween={40}
						loop>
						<SwiperSlide>
							<div className='ai__tools__card portfolio__content grid'>
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
							<div className='ai__tools__card portfolio__content grid'>
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
							<div className='ai__tools__card portfolio__content grid'>
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
		);
}

export default Portfolio
