import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Mousewheel, Keyboard} from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

function Portfolio() {
	const [isUi, setIsUi] = useState(false);
	const [isFe, setIsFe] = useState(false);
	const [isBd, setIsBd] = useState(false);

	const uiHandler = () => {
		setIsUi(true);
	};
	const feHandler = () => {
		setIsFe(true);
	};
	const bdHandler = () => {
		setIsBd(true);
	};

	const closeHandler = () => {
		setIsUi(false);
		setIsFe(false);
		setIsBd(false);
	};

	useEffect(() => {
		if (isBd) {
			document.body.style.overflow = 'hidden';
		}
		return () => (document.body.style.overflow = 'unset');
	}, [isBd]);
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
							<img src='/img/nextlevelbot.png' alt='portfolio' className='portfolio__img'></img>

							<div className='portfolio__data'>
								<h3 className='portfolio__title'>Next Level Bot</h3>
								<p className='portfolio__description'>
									A sophisticated website showcasing my expertise in advanced automation and bot solutions. It empowers individuals and businesses to enhance efficiency in trading. By leveraging
									cutting-edge technologies and adopting a user-centric approach.
								</p>
								<div onClick={bdHandler} className='button button--flex button--small portfolio__button'>
									Demo
									<i className='uil uil-arrow-right button__icon'></i>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='ai__tools__card portfolio__content grid'>
							<img src='/img/deymon.png' alt='portfolio' className='portfolio__img'></img>

							<div className='portfolio__data'>
								<h3 className='portfolio__title'>Deyemon Gestion</h3>
								<p className='portfolio__description'>
									A solution provider for construction-related work. It offers specialized tools and features to streamline project planning, tracking, resource management, and cost control. With
									user-friendly interfaces and intuitive functionalities, it empowers construction professionals to optimize their workflows and achieve successful project outcomes.
								</p>
								<a href='https://gestion.deyemon.be' target='_blank' className='button button--flex button--small portfolio__button'>
									Demo
									<i className='uil uil-arrow-right button__icon'></i>
								</a>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className='ai__tools__card portfolio__content grid'>
							<img src='/img/lapedia.png' alt='portfolio' className='portfolio__img'></img>

							<div className='portfolio__data'>
								<h3 className='portfolio__title'>Lapedia</h3>
								<p className='portfolio__description'>
									Introducing the next-gen Wikipedia: a dynamic AI-powered platform where terms and definitions are verified and expanded using user inputs. Say goodbye to outdated information and
									hello to a constantly evolving knowledge hub. Experience the future of reliable and comprehensive resources, empowering you with accurate insights at your fingertips.
								</p>
								<a href='#hello' className='button button--flex button--small portfolio__button'>
									Demo
									<i className='uil uil-arrow-right button__icon'></i>
								</a>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
			<div className={`portfolio__modal ${isBd && 'active-modal'}`}>
				<div className='portfolio__modal-content'>
					<div className='portfolio__modal-header navbarmobbgcolor'>
						<h4 className='portfolio__modal-title'>
							AI & Blockchain <br></br> Enthusiast
						</h4>
						<i className='uil uil-times portfolio__modal-close' onClick={closeHandler}></i>
					</div>
					<div className='portfolio__modal-hero '>
						<div>
							<h1>Hello WOrld</h1>
							<p>lorem</p>
						</div>
						<div
							className='img'
							// src='https://images.unsplash.com/photo-1652794121425-3994156518ba?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTU0NzM1ODk&ixlib=rb-1.2.1&q=80'
							// alt=''
						></div>
					</div>
					<ul className='portfolio__modal-services grid'>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Empowering Businesses with Artificial Intelligence</p>
						</li>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Unleashing the Magic of Machine Learning</p>
						</li>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Pioneering AI Solutions for a Smarter Future</p>
						</li>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Innovating with Trust and Transparency through Blockchain</p>
						</li>
					</ul>
					<ul className='portfolio__modal-services grid'>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Empowering Businesses with Artificial Intelligence</p>
						</li>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Unleashing the Magic of Machine Learning</p>
						</li>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Pioneering AI Solutions for a Smarter Future</p>
						</li>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Innovating with Trust and Transparency through Blockchain</p>
						</li>
					</ul>
					<ul className='portfolio__modal-services grid'>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Empowering Businesses with Artificial Intelligence</p>
						</li>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Unleashing the Magic of Machine Learning</p>
						</li>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Pioneering AI Solutions for a Smarter Future</p>
						</li>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Innovating with Trust and Transparency through Blockchain</p>
						</li>
					</ul>
					<ul className='portfolio__modal-services grid'>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Empowering Businesses with Artificial Intelligence</p>
						</li>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Unleashing the Magic of Machine Learning</p>
						</li>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Pioneering AI Solutions for a Smarter Future</p>
						</li>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Innovating with Trust and Transparency through Blockchain</p>
						</li>
					</ul>
					<ul className='portfolio__modal-services grid'>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Empowering Businesses with Artificial Intelligence</p>
						</li>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Unleashing the Magic of Machine Learning</p>
						</li>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Pioneering AI Solutions for a Smarter Future</p>
						</li>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Innovating with Trust and Transparency through Blockchain</p>
						</li>
					</ul>
					<ul className='portfolio__modal-services grid'>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Empowering Businesses with Artificial Intelligence</p>
						</li>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Unleashing the Magic of Machine Learning</p>
						</li>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Pioneering AI Solutions for a Smarter Future</p>
						</li>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Innovating with Trust and Transparency through Blockchain</p>
						</li>
					</ul>
					<ul className='portfolio__modal-services grid'>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Empowering Businesses with Artificial Intelligence</p>
						</li>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Unleashing the Magic of Machine Learning</p>
						</li>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Pioneering AI Solutions for a Smarter Future</p>
						</li>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Innovating with Trust and Transparency through Blockchain</p>
						</li>
					</ul>
					<ul className='portfolio__modal-services grid'>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Empowering Businesses with Artificial Intelligence</p>
						</li>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Unleashing the Magic of Machine Learning</p>
						</li>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Pioneering AI Solutions for a Smarter Future</p>
						</li>
						<li className='portfolio__modal-service'>
							<i className='uil uil-check-circle portfolio__modal-icon'></i>
							<p>Innovating with Trust and Transparency through Blockchain</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
