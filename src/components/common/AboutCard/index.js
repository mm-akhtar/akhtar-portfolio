import React from 'react';

const AboutCard = () => {
	return (
		<div className='cards__wrapper'>
			<div className='card__container'>
				<div className='about__card'>
					<div className='card__contents card__front'>
						<div className='card__depth'>
							<div className='card__front__content'>
								<div className='card__front_left'>
									<img src='/img/akhtar_about.jpg' alt='Akhtar' className='card__akhtar'></img>
								</div>
								<div className='card__front_right'>
									<div>
										<h2>M M Akhtar</h2>
										<h5>Full Stack Developer</h5>
									</div>
									<hr />
									<div className='card__about'>
										<div className='about__information'>
											<i className='uil uil-phone about__icon'></i>

											<div>
												<a href='tel:999777666'>
													{/* <h3 className='contact__title'>Call Me</h3> */}
													<span className='about__subtitle'>999-777-666</span>
												</a>
											</div>
										</div>

										<div className='about__information'>
											<i className='uil uil-envelope about__icon'></i>

											<div>
												<a href='mailto:contact.mmakhtar@gmail.com' target='_blank'>
													<span className='about__subtitle'>akhtar@gmail.com</span>
												</a>
											</div>
										</div>
										<div className='about__information'>
											<i className='uil uil-map-marker about__icon'></i>
											<div>
												<span className='about__subtitle'>India - Bangalore</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='card__contents card__back'>
						<div className='card__depth'>
							<div className='card__back__content'>
                                <img src='/img/phyniks.png' alt='Akhtar' className='card__logo'></img>
                                <h1>+</h1>
								<img src='/img/fiverr.png' alt='Akhtar' className='card__logo'></img>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutCard;
