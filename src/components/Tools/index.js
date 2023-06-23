import React from 'react';

import Image from 'next/image';
import ArucaLogo from '../../assets/Aruca.png';
import CapitalSetuLogo from '../../assets/cs-logo.png';
import BflLogo from '../../assets/bfl-logo.png';
import DigiaccelLogo from '../../assets/Digiaccel_Logo.png';
import DulaariLogo from '../../assets/dulaari_logo.png';
import EverSubscriptionsLogo from '../../assets/eversubscriptions-logo.png';
import FrinzapLogo from '../../assets/Frinzap.png';
import MmcLogo from '../../assets/mmc_logo.png';
import TeaSenseLogo from '../../assets/TeaSense.png';
import TheWomumLogo from '../../assets/The-Womum-Logo.png';
import TheIntelligenceFactoryLogo from '../../assets/TheIntelligenceFactoy_Logo.png';
import VisitPageLogo from '../../assets/visit-page-Logo.png';
import {Icon} from '@iconify/react';

const Tools = () => {
	const logos = [
		{
			imgSrc: <Icon icon='devicon:react' fontSize={50} />,
			height: 73,
			width: 73,
		},
		{
			imgSrc: <Icon icon='logos:angular-icon' fontSize={50} />,
			height: 47,
			width: 47,
		},
		{
			imgSrc: <Icon icon='logos:aws' fontSize={35} />,
			height: 61,
			width: 61,
		},
		{
			imgSrc: <Icon icon='logos:bootstrap' fontSize={45} />,
			height: 61,
			width: 61,
		},
		{
			imgSrc: <Icon icon='devicon:reactbootstrap' fontSize={45} />,
			height: 44,
			width: 44,
		},
		{
			imgSrc: <Icon icon='file-icons:chartjs' color='#FF6348' fontSize={50} />,
			height: 68,
			width: 68,
		},
		{
			imgSrc: <Icon icon='devicon:cplusplus' fontSize={52} />,
			height: 44,
			width: 44,
		},
		{
			imgSrc: <Icon icon='devicon:csharp' fontSize={52} />,
			height: 79,
			width: 79,
		},
		{
			imgSrc: <Icon icon='skill-icons:css' fontSize={48} />,
			height: 61,
			width: 61,
		},
		{
			imgSrc: <Icon icon='logos:d3' fontSize={45} />,
			height: 61,
			width: 61,
		},
		{
			imgSrc: <Icon icon='vscode-icons:file-type-docker2' fontSize={60} />,
			height: 51,
			width: 51,
		},
		{
			imgSrc: <Icon icon='simple-icons:flask' color='#ff4b6b' fontSize={50} />,
			height: 73,
			width: 73,
		},
	];
	const logosSecond = [
		{
			imgSrc: <Icon icon='devicon:googlecloud' fontSize={55} />,
			height: 73,
			width: 73,
		},
		{
			imgSrc: <Icon icon='devicon:git' fontSize={50} />,
			height: 47,
			width: 47,
		},
		{
			imgSrc: <Icon icon='pajamas:github' color='#7EC8E3' fontSize={48} />,
			height: 61,
			width: 61,
		},
		{
			imgSrc: <Icon icon='skill-icons:heroku' fontSize={52} />,
			height: 61,
			width: 61,
		},
		{
			imgSrc: <Icon icon='devicon:java-wordmark' fontSize={55} />,
			height: 44,
			width: 44,
		},
		{
			imgSrc: <Icon icon='logos:redux' color='#FF6348' fontSize={50} />,
			height: 68,
			width: 68,
		},
		{
			imgSrc: <Icon icon='akar-icons:nextjs-fill' color='#ff0000' fontSize={50} />,
			height: 79,
			width: 79,
		},
		{
			imgSrc: <Icon icon='skill-icons:javascript' fontSize={48} />,
			height: 61,
			width: 61,
		},
		{
			imgSrc: <Icon icon='skill-icons:mongodb' fontSize={52} />,
			height: 61,
			width: 61,
		},
		{
			imgSrc: <Icon icon='logos:firebase' fontSize={50} />,
			height: 51,
			width: 51,
		},
		{
			imgSrc: <Icon icon='vscode-icons:file-type-light-firebasehosting' fontSize={55} />,
			height: 73,
			width: 73,
		},
		{
			imgSrc: <Icon icon='tabler:brand-react-native' color='#7EC8E3' fontSize={52} />,
			height: 44,
			width: 44,
		},
	];
	const logosThird = [
		{
			imgSrc: <Icon icon='logos:mysql' fontSize={48} />,
			height: 73,
			width: 73,
		},
		{
			imgSrc: <Icon icon='logos:nestjs' fontSize={50} />,
			height: 47,
			width: 47,
		},
		{
			imgSrc: <Icon icon='logos:nodejs' fontSize={48} />,
			height: 61,
			width: 61,
		},
		{
			imgSrc: <Icon icon='logos:python' fontSize={50} />,
			height: 61,
			width: 61,
		},
		{
			imgSrc: <Icon icon='skill-icons:tensorflow-dark' fontSize={52} />,
			height: 44,
			width: 44,
		},
		{
			imgSrc: <Icon icon='logos:postman-icon' fontSize={52} />,
			height: 68,
			width: 68,
		},
		{
			imgSrc: <Icon icon='skill-icons:typescript' fontSize={50} />,
			height: 79,
			width: 79,
		},
		{
			imgSrc: <Icon icon='vscode-icons:file-type-scss2' fontSize={58} />,
			height: 61,
			width: 61,
		},
		{
			imgSrc: <Icon icon='devicon:tailwindcss' fontSize={55} />,
			height: 61,
			width: 61,
		},
		{
			imgSrc: <Icon icon='simple-icons:mui' color='#008e00' fontSize={46} />,
			height: 51,
			width: 51,
		},
		{
			imgSrc: <Icon icon='logos:jupyter' fontSize={50} />,
			height: 73,
			width: 73,
		},
		{
			imgSrc: <Icon icon='logos:shopify' fontSize={52} />,
			height: 44,
			width: 44,
		},
	];
	const logosEnd = [
		{
			imgSrc: <Icon icon='skill-icons:photoshop' fontSize={50} />,
			height: 73,
			width: 73,
		},
		{
			imgSrc: <Icon icon='logos:adobe-lightroom' fontSize={50} />,
			height: 47,
			width: 47,
		},
		{
			imgSrc: <Icon icon='skill-icons:figma-light' fontSize={50} />,
			height: 61,
			width: 61,
		},
		{
			imgSrc: <Icon icon='devicon:canva' fontSize={53} />,
			height: 61,
			width: 61,
		},
		{
			imgSrc: <Icon icon='skill-icons:wordpress' fontSize={50} />,
			height: 44,
			width: 44,
		},
		{
			imgSrc: <Icon icon='logos:netflix-icon' fontSize={50} />,
			height: 68,
			width: 68,
		},
		{
			imgSrc: <Icon icon='logos:react-spring' fontSize={52} />,
			height: 79,
			width: 79,
		},
		{
			imgSrc: <Icon icon='tabler:brand-wix' color='#ff0000' fontSize={58} />,
			height: 61,
			width: 61,
		},
		{
			imgSrc: <Icon icon='devicon:vscode' fontSize={52} />,
			height: 61,
			width: 61,
		},
		{
			imgSrc: <Icon icon='simple-icons:webflow' color='#4353ff' fontSize={46} />,
			height: 51,
			width: 51,
		},
		{
			imgSrc: <Icon icon='mingcute:openai-fill' color='#00A67E' fontSize={55} />,
			height: 73,
			width: 73,
		},
		{
			imgSrc: <Icon icon='skill-icons:pytorch-dark' fontSize={52} />,
			height: 44,
			width: 44,
		},
	];

	return (
		<section className='tools section' id='tools'>
			<h2 className='section__title'>Tools</h2>
			<span className='section__subtitle'> Everyday essentials</span>
			<div className='container tools__container'>
				<div className='tools__card'>
					<div className={`tools__slider 2xl:pt-24 pt-1 px-0`}>
						<div className={`tools__track`}>
							{logos.map((img, index) => {
								return (
									<div key={index} className={`tools__slide`}>
										{/* <Image src={img.imgSrc} alt='VisitPageLogo Logo' height={img.height} width={img.width} className='!object-contain tools__logo' /> */}
										{img.imgSrc}
									</div>
								);
							})}
							{logos.map((img, index) => {
								return (
									<div key={index} className={`tools__slide`}>
										{/* <Image src={img.imgSrc} alt='VisitPageLogo Logo' height={img.height} width={img.width} className='!object-contain' /> */}
										{img.imgSrc}
									</div>
								);
							})}
						</div>
					</div>
					<div className={`tools__slider 2xl:pt-24 pt-1 px-0`}>
						<div className={`tools__track__reverse`}>
							{logosSecond.map((img, index) => {
								return (
									<div key={index} className={`tools__slide`}>
										{/* <Image src={img.imgSrc} alt='VisitPageLogo Logo' height={img.height} width={img.width} className='!object-contain tools__logo' /> */}
										{img.imgSrc}
									</div>
								);
							})}
							{logosSecond.map((img, index) => {
								return (
									<div key={index} className={`tools__slide`}>
										{img.imgSrc}
										{/* <Image src={img.imgSrc} alt='VisitPageLogo Logo' height={img.height} width={img.width} className='!object-contain' /> */}
									</div>
								);
							})}
						</div>
					</div>
					<div className={`tools__slider 2xl:pt-24 pt-1 px-0`}>
						<div className={`tools__track`}>
							{logosThird.map((img, index) => {
								return (
									<div key={index} className={`tools__slide`}>
										{img.imgSrc}
										{/* <Image src={img.imgSrc} alt='VisitPageLogo Logo' height={img.height} width={img.width} className='!object-contain tools__logo' /> */}
									</div>
								);
							})}
							{logosThird.map((img, index) => {
								return (
									<div key={index} className={`tools__slide`}>
										{img.imgSrc}
										{/* <Image src={img.imgSrc} alt='VisitPageLogo Logo' height={img.height} width={img.width} className='!object-contain' /> */}
									</div>
								);
							})}
						</div>
					</div>
					<div className={`tools__slider 2xl:pt-24 pt-1 px-0`}>
						<div className={`tools__track__reverse`}>
							{logosEnd.map((img, index) => {
								return (
									<div key={index} className={`tools__slide`}>
										{/* <Image src={img.imgSrc} alt='VisitPageLogo Logo' height={img.height} width={img.width} className='!object-contain tools__logo' /> */}
										{img.imgSrc}
									</div>
								);
							})}
							{logosEnd.map((img, index) => {
								return (
									<div key={index} className={`tools__slide`}>
										{img.imgSrc}
										{/* <Image src={img.imgSrc} alt='VisitPageLogo Logo' height={img.height} width={img.width} className='!object-contain' /> */}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Tools;
