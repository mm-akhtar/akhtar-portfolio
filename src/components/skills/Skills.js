import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Mousewheel, Keyboard, Autoplay} from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);
function Skills() {
	return (
		<section className='skills section' id='skills'>
			<div className='skills__section__header'>
				<i className='uil uil-arrow-circle-left home__scroll-mouse swiper-button-prev-mentor'></i>
				<div>
					<h2 className='section__title'>Skills</h2>
					<span className='section__subtitle'>My technical level</span>
				</div>
				<i className='uil uil-arrow-circle-right home__scroll-mouse swiper-button-next-mentor'></i>
			</div>

			<div className='container'>
				<Swiper
					loop
					pagination={{
						dynamicBullets: true,
						clickable: true,
						dynamicBullets: true,
					}}
					navigation={{
						nextEl: '.swiper-button-next-mentor',
						prevEl: '.swiper-button-prev-mentor',
					}}
					breakpoints={{
						568: {
							slidesPerView: 2,
						},
					}}
					autoplay={{
						delay: 1000,
						disableOnInteraction: false,
					}}
					speed={2000}
					grabCursor={true}
					spaceBetween={48}
					className='mySwiper'
					loopAdditionalSlides={2}
					loopFillGroupWithBlank={true}
				>
					<SwiperSlide>
						<div>
							<div className={`skills__content skills__open`}>
								<div className='skills_header'>
									<i className='uil uil-brackets-curly skills__icon'></i>
									<div>
										<h1 className='skills__title'>Frontend developer</h1>
										<span className='skills__subtitle'> MOre than 4 years </span>
									</div>
									<i className='uil uil-angle-down skills__arrow'></i>
								</div>

								<div className='skills__list grid'>
									<div className='skills__data'>
										<div className='skills__titles'>
											<h3 className='skills__name'>HTML</h3>
											<span className='skills__number'>90%</span>
										</div>
										<div className='skills__bar'>
											<span className='skills__percentage skills__html'></span>
										</div>
									</div>

									<div className='skills__data'>
										<div className='skills__titles'>
											<h3 className='skills__name'>CSS</h3>
											<span className='skills__number'>80%</span>
										</div>
										<div className='skills__bar'>
											<span className='skills__percentage skills__css'></span>
										</div>
									</div>

									<div className='skills__data'>
										<div className='skills__titles'>
											<h3 className='skills__name'>JavaScript</h3>
											<span className='skills__number'>60%</span>
										</div>
										<div className='skills__bar'>
											<span className='skills__percentage skills__js'></span>
										</div>
									</div>

									<div className='skills__data'>
										<div className='skills__titles'>
											<h3 className='skills__name'>REACT</h3>
											<span className='skills__number'>85%</span>
										</div>
										<div className='skills__bar'>
											<span className='skills__percentage skills__react'></span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>
							<div className={`skills__content skills__open`}>
								<div className='skills_header'>
									<i className='uil uil-server-network skills__icon'></i>
									<div>
										<h1 className='skills__title'>Backend developer</h1>
										<span className='skills__subtitle'> MOre than 3 years </span>
									</div>
									<i className='uil uil-angle-down skills__arrow'></i>
								</div>

								<div className='skills__list grid'>
									<div className='skills__data'>
										<div className='skills__titles'>
											<h3 className='skills__name'>PHP</h3>
											<span className='skills__number'>80%</span>
										</div>
										<div className='skills__bar'>
											<span className='skills__percentage skills__php'></span>
										</div>
									</div>

									<div className='skills__data'>
										<div className='skills__titles'>
											<h3 className='skills__name'>Node Js</h3>
											<span className='skills__number'>70%</span>
										</div>
										<div className='skills__bar'>
											<span className='skills__percentage skills__node'></span>
										</div>
									</div>

									<div className='skills__data'>
										<div className='skills__titles'>
											<h3 className='skills__name'>Firebase</h3>
											<span className='skills__number'>60%</span>
										</div>
										<div className='skills__bar'>
											<span className='skills__percentage skills__firebase'></span>
										</div>
									</div>

									<div className='skills__data'>
										<div className='skills__titles'>
											<h3 className='skills__name'>Python</h3>
											<span className='skills__number'>85%</span>
										</div>
										<div className='skills__bar'>
											<span className='skills__percentage skills__python'></span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>
							<div className={`skills__content skills__open`}>
								<div className='skills_header'>
									<i className='uil uil-swatchbook skills__icon'></i>
									<div>
										<h1 className='skills__title'>Designer</h1>
										<span className='skills__subtitle'> MOre than 5 years </span>
									</div>
									<i className='uil uil-angle-down skills__arrow'></i>
								</div>

								<div className='skills__list grid'>
									<div className='skills__data'>
										<div className='skills__titles'>
											<h3 className='skills__name'>Figma</h3>
											<span className='skills__number'>80%</span>
										</div>
										<div className='skills__bar'>
											<span className='skills__percentage skills__figma'></span>
										</div>
									</div>

									<div className='skills__data'>
										<div className='skills__titles'>
											<h3 className='skills__name'>Sketch</h3>
											<span className='skills__number'>85%</span>
										</div>
										<div className='skills__bar'>
											<span className='skills__percentage skills__sketch'></span>
										</div>
									</div>

									<div className='skills__data'>
										<div className='skills__titles'>
											<h3 className='skills__name'>Photoshop</h3>
											<span className='skills__number'>85%</span>
										</div>
										<div className='skills__bar'>
											<span className='skills__percentage skills__photoshop'></span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
}

export default Skills;
