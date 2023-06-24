import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Qualification from '../components/qualification/Qualification';
import Services from '../components/offer/Services';
import Portfolio from '../components/portfolio/Portfolio';
import Project from '../components/portfolio/Project';
import Testimonial from '../components/testimonial/Testimonial';
import Contact from '../components/Contact/Contact';
import MyComponent from '../components/about/Splash';
import Typewriter from 'typewriter-effect';
import {Icon} from '@iconify/react';
import Tools from '../components/Tools';
import Fiverr from '../components/fiverr';

export default function Home() {
	return (
		<div className='main'>
			{/* HOME */}
			<section className='home section' id='home'>
				<div className='home__container container grid'>
					<div className='home__content grid'>
						<div className='home__social'>
							<a href='https://www.linkedin.com/in/mm-akhtar' className='home__social-icon' target='_blank'>
								<i className='uil uil-linkedin-alt'></i>
							</a>

							<a href='https://www.fiverr.com/mm_akhtar' className='home__social-icon' target='_blank'>
								<Icon icon='tabler:brand-fiverr' style={{marginBottom: '-5px'}}></Icon>
							</a>

							<a href='https://github.com/mm-akhtar' className='home__social-icon' target='_blank'>
								<i className='uil uil-github-alt'></i>
							</a>
						</div>
						<div className='home__img'>
							<MyComponent />
						</div>
						<div className='home__data'>
							<h4 className='home__hey'>Hey,</h4>
							<h1 className='home__title'>I'm M M Akhtar</h1>
							<div className='home__subtitle_wrapper'>
								<Typewriter
									onInit={(typewriter) => {
										typewriter
											.pauseFor(1000)
											.changeDelay(110)
											.typeString('Full Stack Developer')
											.pauseFor(1000)
											.deleteAll()
											.changeDelay(110)
											.typeString('React / NextJs Developer')
											.pauseFor(1000)
											.deleteAll()
											.changeDelay(110)
											.typeString('AI & Blockchain Enthusiast')
											.pauseFor(1000)
											.deleteAll()
											.changeDelay(110)
											.typeString('Movie Buff')
											.pauseFor(1000)
											.start();
									}}
									options={{
										loop: true,
										delay: 100,
										cursorClassName: 'cursor',
										cursor: '',
										wrapperClassName: 'home__subtitle',
									}}
								/>
							</div>
							{/* <h3 className='home__subtitle'>Frontend developer</h3> */}
							<p className='home__description'>Experience in Full stack software design and development, producing quality work.</p>
							<a href='#contact' className='button button--flex portfolio__button'>
								Contact Me <i className='uil uil-message button__icon'></i>
							</a>
						</div>
					</div>
					<div className='home__scroll'>
						<a href='#about' className='home__scroll-button button--flex'>
							<i className='uil uil-mouse-alt home__scroll-mouse'></i>
							<span className='home__scroll-name'>Scroll down</span>
							<i className='uil uil-arrow-down home__scroll-arrow'></i>
						</a>
					</div>
				</div>
			</section>

			<About />
			<Skills />
			<Qualification />
			<Services />
			<Portfolio />
			<Project />
			<Testimonial />
			<Tools />
			<Fiverr />
			<Contact />
		</div>
	);
}
