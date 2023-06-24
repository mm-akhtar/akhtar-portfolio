import Head from "next/head";
import React, {useState} from "react";
// import Footer from "../../pages/footer";
import Nav from "../nav/Nav";
import Footer from '../footer/Footer';
function Layout(props) {
  const [isDark, setIsDark] = useState(true)

  const themeHandler = () =>{
    setIsDark(prevState => !prevState);
  }
  return (
		<div className={`body ${isDark && 'dark-theme'} `}>
			<Head>
				<title>Akhtar | Full stack developer</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta property='og:url' content='/img/akhtar_about.png' />
				<meta property='og:type' content='website' />
				<meta property='og:title' content='Akhtar | Full stack developer' />
				<meta name='twitter:card' content='Experience in Full stack software design and development, producing quality work. ' />
				<meta
					property='og:description'
					content='A highly organized and detail-oriented Software Engineer with a proven track record in full stack development. Ready to bring my MERN stack expertise and fast learning abilities to drive success.'
				/>
				<meta property='og:image' content='/img/akhtar_about.png' />
				<meta name='description' content='Akhtar' />
				<link rel='icon' href='/favicon.ico' />
				<link rel='stylesheet' href='https://unicons.iconscout.com/release/v4.0.0/css/line.css'></link>
			</Head>
			<header className='header' id='header'>
				<Nav themeHandler={themeHandler} isDark={isDark} />
			</header>
			<main>{props.children}</main>
			{/* <Footer /> */}
			<Footer />
			{/*SCROLL TOP  */}
			<a href='#home' className='scrollup show-scroll' id='scroll-up'>
				<i className='uil uil-arrow-up scrollup__icon'></i>
			</a>
		</div>
	);
}

export default Layout;