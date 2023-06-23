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
    <div className={`body ${isDark && "dark-theme"} `}>
      <Head>
        <title>Akhtar</title>
        <meta name="description" content="Akhtar" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
        
      </Head>
      <header className="header" id="header">
        <Nav themeHandler={themeHandler} isDark={isDark} />
      </header>
      <main>{props.children}</main>
      {/* <Footer /> */}
      <Footer />
      {/*SCROLL TOP  */}
      <a href="#home" className="scrollup show-scroll" id="scroll-up">
      <i className="uil uil-arrow-up scrollup__icon"></i>
      </a>
    </div>
  );
}

export default Layout;