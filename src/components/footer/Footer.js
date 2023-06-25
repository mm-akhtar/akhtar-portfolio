import { Icon } from "@iconify/react";

export default function Footer (){
    return (
			<footer className='footer'>
				<div className='footer__bg'>
					<div className='footer__container container grid'>
						<div>
							<h1 className='footer__title'>Akhtar</h1>
							<span className='footer__subtitle'>Full stack developer</span>
						</div>

						<ul className='footer__links'>
							<li>
								<a href='#services' className='footer__link'>
									Services
								</a>
							</li>
							<li>
								<a href='#portfolio' className='footer__link'>
									Portfolio
								</a>
							</li>
							<li>
								<a href='#contact' className='footer__link'>
									Contact me
								</a>
							</li>
						</ul>

						<div className='footer__socials'>
							<a href='https://github.com/mm-akhtar' target='_blank' className='footer__social'>
								<i className='uil uil-github'></i>
							</a>

							<a href='https://www.linkedin.com/in/mm-akhtar/' target='_blank' className='footer__social'>
								<i className='uil uil-linkedin'></i>
							</a>
							<a href='https://wa.me/919365234855' target='_blank' className='footer__social'>
								<i className='uil uil-whatsapp'></i>
							</a>

							<a href='https://stackoverflow.com/users/15547425/mm-akhtar' target='_blank' className='footer__social'>
								<Icon icon='jam:stackoverflow' style={{marginBottom: '-2px'}} />
							</a>
						</div>
					</div>

					<p className='footer__copy'>&#169; Akhtar. All rights reserved</p>
				</div>
			</footer>
		);
}