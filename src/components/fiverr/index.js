import React from 'react';

const Fiverr = () => {
	return (
		<section className='section' id='tools'>
			<h2 className='section__title'>Fiverr</h2>
			<span className='section__subtitle'> What Gigs I offer</span>
			<div className='fiverr__parent__container container grid'>
				<div className='fiverr__profile__card'>
					<div className='fiverr__profile'>
						<div className='fiverr__akhtar'>
							<img src='/img/akhtar_about.png' alt='Akhtar' className=''></img>
						</div>
						<h2 className='fiverr__title'>M M Akhtar</h2>
						<h2 className='fiverr__username'>@mm_akhtar</h2>
						<div className='fiverr__reviews'>
							<i className='uil uil-star fiverr__icon-star'></i>
							<i className='uil uil-star fiverr__icon-star'></i>
							<i className='uil uil-star fiverr__icon-star'></i>
							<i className='uil uil-star fiverr__icon-star'></i>
							<i className='uil uil-star fiverr__icon-star'></i>
							<h4 className='fiverr__review__count'>(30+ reviews)</h4>
						</div>
						<div className='fiverr__contact'>
							<a className='button button--flex' itemprop='url' href='https://www.fiverr.com/mm_akhtar' rel='nofollow' target='_blank'>
								Contact Me
								<i className='uil uil-message button__icon'></i>
							</a>
						</div>
						<div className='divider' />
						<div className='fiverr__info'>
							<div className='fiverr__info__item'>
								<div>
									<i className='uil-location-point fiverr__info-icon'></i>
									<span>From</span>
								</div>
								<div>India</div>
							</div>
							<div className='fiverr__info__item'>
								<div>
									<i className='uil-user fiverr__info-icon'></i>
									<span>Member since</span>
								</div>
								<div>Apr 2021</div>
							</div>
							<div className='fiverr__info__item'>
								<div>
									<i className='uil-clock-ten fiverr__info-icon'></i>
									<span>Avg. Response Time</span>
								</div>
								<div>1 hour</div>
							</div>
							<div className='fiverr__info__item'>
								<div>
									<i className='uil-plane-departure fiverr__info-icon'></i>
									<span>Last Delivery</span>
								</div>
								<div>6 Days</div>
							</div>
						</div>
					</div>
				</div>
				<div className='fiverr__container'>
					<div>
						<figure className='snip1206'>
							<img src='/fiverr/dashboard.png' alt='Dashboard' className=''></img>
							<figcaption>
								<h2>I will create react js next js dashboard with tailwind css</h2>
								<p>
									Starting at <span>$100</span>
								</p>
								<p>
									<i className='uil uil-star fiverr__info-icon'></i>
									<h6>(3)</h6>
								</p>
							</figcaption>
							<a href='#'></a>
						</figure>
						<figure className='snip1206'>
							<img src='/fiverr/react.png' alt='Dashboard' className=''></img>
							<figcaption>
								<h2>I will develop react js next js website with tailwind css</h2>
								<p>
									Starting at <span>$50</span>
								</p>
								<p>
									<i className='uil uil-star fiverr__info-icon'></i>
									<h6>(3)</h6>
								</p>
							</figcaption>
							<a href='#'></a>
						</figure>
						<figure className='snip1206'>
							<img src='/fiverr/react-next.png' alt='Dashboard' className=''></img>
							<figcaption>
								<h2>I will convert react js web app to next js web app</h2>
								<p>
									Starting at <span>$20</span>
								</p>
								<p>
									<i className='uil uil-star fiverr__info-icon'></i>
									<h6>(5)</h6>
								</p>
							</figcaption>
							<a href='#'></a>
						</figure>
					</div>
					<div>
						<figure className='snip1206'>
							<img src='/fiverr/nextjs.png' alt='Dashboard' className=''></img>
							<figcaption>
								<h2>I will be your next js react js frontend developer</h2>
								<p>
									Starting at <span>$10</span>
								</p>
								<p>
									<i className='uil uil-star fiverr__info-icon'></i>
									<h6>(7)</h6>
								</p>
							</figcaption>
							<a href='#'></a>
						</figure>
						<figure className='snip1206'>
							<img src='/fiverr/figma-react.png' alt='Dashboard' className=''></img>
							<figcaption>
								<h2>I will convert figma to react next js app with tailwind css</h2>
								<p>
									Starting at <span>$50</span>
								</p>
								<p>
									<i className='uil uil-star fiverr__info-icon'></i>
									<h6>(2)</h6>
								</p>
							</figcaption>
							<a href='#'></a>
						</figure>
						<figure className='snip1206'>
							<img src='/fiverr/bug.png' alt='Dashboard' className=''></img>
							<figcaption>
								<h2>I will fix bug in frontend development for react / next</h2>
								<p>
									Starting at <span>$10</span>
								</p>
								<p>
									<i className='uil uil-star fiverr__info-icon'></i>
									<h6>(1)</h6>
								</p>
							</figcaption>
							<a href='#'></a>
						</figure>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Fiverr;
