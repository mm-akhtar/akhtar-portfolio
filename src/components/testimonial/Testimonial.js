import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/core";
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

function Testimonial() {
    return (
			<section className='testimonial section'>
				<div className='skills__section__header'>
					<i className='uil uil-arrow-circle-left home__scroll-mouse swiper-button-prev-test'></i>
					<div>
						<h2 className='section__title'>Testimonial</h2>
						<span className='section__subtitle'>My client saying</span>
					</div>
					<i className='uil uil-arrow-circle-right home__scroll-mouse swiper-button-next-test'></i>
				</div>

				<div className='testimonial__container container'>
					<Swiper
						pagination={{
							dynamicBullets: true,
							clickable: true,
						}}
						breakpoints={{
							568: {
								slidesPerView: 2,
							},
						}}
						navigation={{
							nextEl: '.swiper-button-next-test',
							prevEl: '.swiper-button-prev-test',
						}}
						grabCursor={true}
						spaceBetween={48}
						className='mySwiper'
						loop>
						<SwiperSlide>
							<div className='testimonial__content testimonial__card'>
								<div className='testimonial__overlay'></div>
								<div className='testimonial__data'>
									<div className='testimonial__header'>
										<img src='/img/testimonial1.jpg' className='testimonial__img' alt='testimonal'></img>

										<div>
											<h3 className='testimonial__name'>Sara Smith</h3>
											<span className='testimonial__client'>Client</span>
										</div>
									</div>

									<div>
										<i className='uil uil-star testimonial__icon-star'></i>
										<i className='uil uil-star testimonial__icon-star'></i>
										<i className='uil uil-star testimonial__icon-star'></i>
										<i className='uil uil-star testimonial__icon-star'></i>
										<i className='uil uil-star testimonial__icon-star'></i>
									</div>
								</div>

								<p className='testimonial__description'>
									{' '}
									simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. simply dummy text of the printing and typesetting industry.
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='testimonial__content testimonial__card'>
								<div className='testimonial__overlay'></div>
								<div className='testimonial__data'>
									<div className='testimonial__header'>
										<img src='/img/testimonial2.jpg' className='testimonial__img' alt='testimonal2'></img>

										<div>
											<h3 className='testimonial__name'>Matt Rob</h3>
											<span className='testimonial__client'>Client</span>
										</div>
									</div>

									<div>
										<i className='uil uil-star testimonial__icon-star'></i>
										<i className='uil uil-star testimonial__icon-star'></i>
										<i className='uil uil-star testimonial__icon-star'></i>
										<i className='uil uil-star testimonial__icon-star'></i>
										<i className='uil uil-star testimonial__icon-star'></i>
									</div>
								</div>

								<p className='testimonial__description'>
									{' '}
									simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. simply dummy text of the printing and typesetting industry.
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='testimonial__content testimonial__card'>
								<div className='testimonial__overlay'></div>
								<div className='testimonial__data'>
									<div className='testimonial__header'>
										<img src={'/img/testimonial3.jpg'} className='testimonial__img' alt='testimonal3'></img>

										<div>
											<h3 className='testimonial__name'>Raul Harris</h3>
											<span className='testimonial__client'>Client</span>
										</div>
									</div>

									<div>
										<i className='uil uil-star testimonial__icon-star'></i>
										<i className='uil uil-star testimonial__icon-star'></i>
										<i className='uil uil-star testimonial__icon-star'></i>
										<i className='uil uil-star testimonial__icon-star'></i>
										<i className='uil uil-star testimonial__icon-star'></i>
									</div>
								</div>

								<p className='testimonial__description'>
									{' '}
									simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. simply dummy text of the printing and typesetting industry.
								</p>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</section>
		);
}

export default Testimonial
