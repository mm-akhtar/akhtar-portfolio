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
								<i className='uil uil-brain services__icon'></i>
								<h3 className='services__title'>
									AI/ML <br></br> Engineer
								</h3>
							</div>

							<span className='button button--flex button--small button--link services__button'>
								View More
								<i className='uil uil-arrow-right button__icon'></i>
							</span>
						</div>

						<div className={`services__modal ${isUi && 'active-modal'}`}>
							<div className='services__modal-content'>
								<h4 className='services_modal-title'>
									Ai/Ml <br></br> Engineer
								</h4>
								<i className='uil uil-times services__modal-close' onClick={closeHandler}></i>

								<ul className='services__modal-services grid'>
									<li className='services__modal-service'>
										<i className='uil uil-check-circle services__modal-icon'></i>
										<p>I develop the user interface.</p>
									</li>
									<li className='services__modal-service'>
										<i className='uil uil-check-circle services__modal-icon'></i>
										<p>Web page development.</p>
									</li>
									<li className='services__modal-service'>
										<i className='uil uil-check-circle services__modal-icon'></i>
										<p>I create ux element interactions.</p>
									</li>
									<li className='services__modal-service'>
										<i className='uil uil-check-circle services__modal-icon'></i>
										<p>I position your company brand.</p>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className='services__content'>
						<div onClick={feHandler}>
							<div>
								<i className='uil uil-arrow services__icon'></i>
								<h3 className='services__title'>
									Full Stack <br></br> Developer
								</h3>
							</div>

							<span className='button button--flex button--small button--link services__button'>
								View More
								<i className='uil uil-arrow-right button__icon'></i>
							</span>
						</div>
						<div className={`services__modal ${isFe && 'active-modal'}`}>
							<div className='services__modal-content'>
								<h4 className='services_modal-title'>
									Full Stack <br></br> Developer
								</h4>
								<i className='uil uil-times services__modal-close ' onClick={closeHandler}></i>

								<ul className='services__modal-services grid'>
									<li className='services__modal-service'>
										<i className='uil uil-check-circle services__modal-icon'></i>
										<p>I develop the user interface.</p>
									</li>
									<li className='services__modal-service'>
										<i className='uil uil-check-circle services__modal-icon'></i>
										<p>Web page development.</p>
									</li>
									<li className='services__modal-service'>
										<i className='uil uil-check-circle services__modal-icon'></i>
										<p>I create ux element interactions.</p>
									</li>
									<li className='services__modal-service'>
										<i className='uil uil-check-circle services__modal-icon'></i>
										<p>I position your company brand.</p>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className='services__content'>
						<div onClick={bdHandler}>
							<div>
								<i className='uil uil-window-grid services__icon'></i>
								<h3 className='services__title'>
									Blockchain <br></br> Enthusiast
								</h3>
							</div>

							<span className='button button--flex button--small button--link services__button'>
								View More
								<i className='uil uil-arrow-right button__icon'></i>
							</span>
						</div>
						<div className={`services__modal ${isBd && 'active-modal'}`}>
							<div className='services__modal-content'>
								<h4 className='services_modal-title'>
									Blockchain <br></br> Enthusiast
								</h4>
								<i className='uil uil-times services__modal-close' onClick={closeHandler}></i>

								<ul className='services__modal-services grid'>
									<li className='services__modal-service'>
										<i className='uil uil-check-circle services__modal-icon'></i>
										<p>I develop the user interface.</p>
									</li>
									<li className='services__modal-service'>
										<i className='uil uil-check-circle services__modal-icon'></i>
										<p>Web page development.</p>
									</li>
									<li className='services__modal-service'>
										<i className='uil uil-check-circle services__modal-icon'></i>
										<p>I create ux element interactions.</p>
									</li>
									<li className='services__modal-service'>
										<i className='uil uil-check-circle services__modal-icon'></i>
										<p>I position your company brand.</p>
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
