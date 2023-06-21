import React, { useState } from 'react';
import {Icon} from '@iconify/react';


function Qualification() {
	const [isQfn, setIsQfn] = useState(false);
	const eduHandler = () => {
		setIsQfn(true);
	};

	const workHandler = () => {
		setIsQfn(false);
	};

	return (
		<section className='qualification section'>
			<h2 className='section__title'>Qualification</h2>
			<span className='section__subtitle'>My personal journey</span>

			<div className='qualification__container container'>
				<div className='qualification__tabs'>
					<div className={`qualification__button button--flex ${isQfn && 'qualification__active'}`} onClick={eduHandler}>
						<i className='uil uil-graduation-cap qualification__icon'></i>
						Education
					</div>

					<div className={`qualification__button button--flex ${!isQfn && 'qualification__active'}`} onClick={workHandler}>
						<i className='uil uil-briefcase-alt qualification__icon'></i>
						Work
					</div>
				</div>

				<div className='qualification__sections'>
					<div className={`qualification__content ${isQfn && 'qualification__active'}`}>
						<div className='qualification__data'>
							<div className='qualification__card__end'>
								<div>
									<h3 className='qualification__title'>Information Science</h3>
									<span className='qualification__subtitle'>KNSIT - B E</span>
									<div className='qualification__calender'>
										<i className='uil uil-calendar-alt'></i>
										<span>2022</span>
									</div>
								</div>
								<div>
									<Icon icon='mdi:graduation-cap' fontSize={50} className='qualifications__logo' />
								</div>
							</div>

							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
						</div>

						<div className='qualification__data'>
							<div></div>

							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>

							<div className='qualification__card__start'>
								<div>
									<Icon icon='clarity:certificate-solid' fontSize={50} className='qualifications__logo' />
								</div>
								<div>
									<h3 className='qualification__title'>Web Developer</h3>
									<span className='qualification__subtitle'>Udemy - Bootcamp</span>
									<div className='qualification__calender'>
										<i className='uil uil-calendar-alt'></i>
										<span>2022</span>
									</div>
								</div>
							</div>
						</div>

						<div className='qualification__data'>
							<div className='qualification__card__end'>
								<div>
									<h3 className='qualification__title'>Blockchain A to Z</h3>
									<span className='qualification__subtitle'>Udemy - Course</span>
									<div className='qualification__calender'>
										<i className='uil uil-calendar-alt'></i>
										<span>2022</span>
									</div>
								</div>
								<div>
									<Icon icon='clarity:certificate-solid' fontSize={50} className='qualifications__logo' />
								</div>
							</div>

							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
						</div>
						<div className='qualification__data'>
							<div></div>

							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>

							<div className='qualification__card__start'>
								<div>
									<Icon icon='clarity:certificate-solid' fontSize={50} className='qualifications__logo' />
								</div>
								<div>
									<h3 className='qualification__title'>AI ML Developer</h3>
									<span className='qualification__subtitle'>Udemy - Bootcamp</span>
									<div className='qualification__calender'>
										<i className='uil uil-calendar-alt'></i>
										<span>2021</span>
									</div>
								</div>
							</div>
						</div>
						<div className='qualification__data'>
							<div className='qualification__card__end'>
								<div>
									<h3 className='qualification__title'>HS  [ 12th ]</h3>
									<span className='qualification__subtitle'>ACACS - Science</span>
									<div className='qualification__calender'>
										<i className='uil uil-calendar-alt'></i>
										<span>2017</span>
									</div>
								</div>
								<div>
									<Icon icon='mdi:graduation-cap' fontSize={50} className='qualifications__logo' />
								</div>
							</div>

							<div>
								<span className='qualification__rounder'></span>
								{/* <span className='qualification__line'></span> */}
							</div>
						</div>
					</div>
					<div className={`qualification__content ${!isQfn && 'qualification__active'}`}>
						<div className='qualification__data'>
							<div className='qualification__card__end'>
								<div>
									<h3 className='qualification__title'>Full Stack Developer</h3>
									<span className='qualification__subtitle'>Phyniks - Full Time</span>
									<div className='qualification__calender'>
										<i className='uil uil-calendar-alt'></i>
										<span>APR 2022 - Present</span>
									</div>
								</div>
								<div>
									<img src='/img/phyniks.png' alt='Akhtar' className='qualifications__logo'></img>
								</div>
							</div>

							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
						</div>

						<div className='qualification__data'>
							<div></div>

							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>

							<div className='qualification__card__start'>
								<div>
									<img src='/img/fiverr.png' alt='Akhtar' className='qualifications__logo'></img>
								</div>
								<div>
									<h3 className='qualification__title'>Full Stack Developer</h3>
									<span className='qualification__subtitle'>Fiverr - Freelance</span>
									<div className='qualification__calender'>
										<i className='uil uil-calendar-alt'></i>
										<span>SEPT 2021 - Present</span>
									</div>
								</div>
							</div>
						</div>

						<div className='qualification__data'>
							<div className='qualification__card__end'>
								<div>
									<h3 className='qualification__title'>Frontend Developer</h3>
									<span className='qualification__subtitle'>Phyniks - Intern</span>
									<div className='qualification__calender'>
										<i className='uil uil-calendar-alt'></i>
										<span>APR 2021 - SEP 2021</span>
									</div>
								</div>
								<div>
									<img src='/img/phyniks.png' alt='Akhtar' className='qualifications__logo'></img>
								</div>
							</div>

							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
						</div>
						<div className='qualification__data'>
							<div></div>

							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>

							<div className='qualification__card__start'>
								<div>
									<img src='/img/fiverr.png' alt='Akhtar' className='qualifications__logo'></img>
								</div>
								<div>
									<h3 className='qualification__title'>Digital Marketing</h3>
									<span className='qualification__subtitle'>Fiverr - Freelance</span>
									<div className='qualification__calender'>
										<i className='uil uil-calendar-alt'></i>
										<span>JAN 2020 - MAR 2021</span>
									</div>
								</div>
							</div>
						</div>
						<div className='qualification__data'>
							<div className='qualification__card__end'>
								<div>
									<h3 className='qualification__title'>Graphic Designer</h3>
									<span className='qualification__subtitle'>Upwork - Freelance</span>
									<div className='qualification__calender'>
										<i className='uil uil-calendar-alt'></i>
										<span>JAN 2020 - DEC 2021</span>
									</div>
								</div>
								<div>
									<img src='/img/upwork.png' alt='Akhtar' className='qualifications__logo'></img>
								</div>
							</div>

							<div>
								<span className='qualification__rounder'></span>
								{/* <span className='qualification__line'></span> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Qualification;
