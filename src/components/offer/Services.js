import React, { useState } from "react";
function Services() {
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
    return (
			<section className='services section' id='services'>
				<h2 className='section__title'>Services</h2>
				<span className='section__subtitle'>What I offer</span>
				<div className='services__container container grid'>
					<div className='services__content'>
						<div onClick={uiHandler}>
							<div>
								<i className='uil  uil-arrow services__icon'></i>
								<h3 className='services__title'>
									Frontend <br></br> Developer
								</h3>
							</div>

							<span className='button button--flex button--small button--link services__button'>
								View More
								<i className='uil uil-arrow-right button__icon'></i>
							</span>
						</div>

						<div className={`services__modal ${isUi && 'active-modal'}`}>
							<div className='services__modal-content'>
								<h4 className='services__modal-title'>
									Frontend <br></br> Developer
								</h4>
								<i className='uil uil-times services__modal-close' onClick={closeHandler}></i>

								<ul className='services__modal-services grid'>
									<li className='services__modal-service'>
										<i className='uil uil-check-circle services__modal-icon'></i>
										<p>Website Design: Creating visually appealing designs for websites.</p>
									</li>
									<li className='services__modal-service'>
										<i className='uil uil-check-circle services__modal-icon'></i>
										<p>Seamlessly Developing Websites for a Seamless User Experience</p>
									</li>
									<li className='services__modal-service'>
										<i className='uil uil-check-circle services__modal-icon'></i>
										<p>Delivering Responsive Web Solutions.</p>
									</li>
									<li className='services__modal-service'>
										<i className='uil uil-check-circle services__modal-icon'></i>
										<p>Bringing Ideas to Life with Interactive and Insightful Prototypes</p>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className='services__content'>
						<div onClick={feHandler}>
							<div>
								<i className='uil  uil-server-network  services__icon'></i>
								<h3 className='services__title'>
									Backend <br></br> Developer
								</h3>
							</div>

							<span className='button button--flex button--small button--link services__button'>
								View More
								<i className='uil uil-arrow-right button__icon'></i>
							</span>
						</div>
						<div className={`services__modal ${isFe && 'active-modal'}`}>
							<div className='services__modal-content'>
								<h4 className='services__modal-title'>
									Backend <br></br> Developer
								</h4>
								<i className='uil uil-times services__modal-close ' onClick={closeHandler}></i>

								<ul className='services__modal-services grid'>
									<li className='services__modal-service'>
										<i className='uil uil-check-circle services__modal-icon'></i>
										<p>Powering Databases and Data Dynamics</p>
									</li>
									<li className='services__modal-service'>
										<i className='uil uil-check-circle services__modal-icon'></i>
										<p>Seamless API Development and Integration</p>
									</li>
									<li className='services__modal-service'>
										<i className='uil uil-check-circle services__modal-icon'></i>
										<p>Backed development by Powerful Frameworks and Technology</p>
									</li>
									<li className='services__modal-service'>
										<i className='uil uil-check-circle services__modal-icon'></i>
										<p>Reliable Backend Maintenance and Support at Your Service</p>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className='services__content'>
						<div onClick={bdHandler}>
							<div>
								<i className='uil uil-brain services__icon'></i>
								<h3 className='services__title'>
									AI & Blockchain <br></br> Engineer
								</h3>
							</div>

							<span className='button button--flex button--small button--link services__button'>
								View More
								<i className='uil uil-arrow-right button__icon'></i>
							</span>
						</div>
						<div className={`services__modal ${isBd && 'active-modal'}`}>
							<div className='services__modal-content'>
								<h4 className='services__modal-title'>
									AI & Blockchain <br></br> Enthusiast
								</h4>
								<i className='uil uil-times services__modal-close' onClick={closeHandler}></i>

								<ul className='services__modal-services grid'>
									<li className='services__modal-service'>
										<i className='uil uil-check-circle services__modal-icon'></i>
										<p>Empowering Businesses with Artificial Intelligence</p>
									</li>
									<li className='services__modal-service'>
										<i className='uil uil-check-circle services__modal-icon'></i>
										<p>Unleashing the Magic of Machine Learning</p>
									</li>
									<li className='services__modal-service'>
										<i className='uil uil-check-circle services__modal-icon'></i>
										<p>Pioneering AI Solutions for a Smarter Future</p>
									</li>
									<li className='services__modal-service'>
										<i className='uil uil-check-circle services__modal-icon'></i>
										<p>Innovating with Trust and Transparency through Blockchain</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
}

export default Services;
