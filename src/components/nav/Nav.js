import React, {useState} from "react";
export default function Nav ({themeHandler, isDark}) {
    
    const [isShow, setShow] = useState(false);

    const toggleHandler = () => {
        setShow(prevState => !prevState);
    }
    return(
        <nav className="nav container">
            <a href="/" className="nav__logo">Akhtar</a>
            <div className={`nav__menu ${isShow && 'show-menu'}`} >
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className="nav__link" onClick={toggleHandler}>
                        <i className="uil nav__icon uil-estate"  ></i> Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link" onClick={toggleHandler}>
                        <i className="uil nav__icon uil-user"  ></i> About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" className="nav__link" onClick={toggleHandler}>
                        <i className="uil nav__icon uil-file-alt" ></i> Skills
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#services" className="nav__link" onClick={toggleHandler}> 
                        <i className="uil nav__icon uil-briefcase-alt" ></i> Services
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link" onClick={toggleHandler}>
                        <i className="uil nav__icon uil-scenery" ></i> Portfolio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#tools" className="nav__link" onClick={toggleHandler}>
                        <i className="uil nav__icon uil-scenery" ></i> Tools
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link" onClick={toggleHandler}>
                        <i className="uil nav__icon uil-message"></i> Contact
                        </a>
                    </li>
                </ul>
                <i className="uil nav__icon uil-times nav__close" onClick={toggleHandler}></i>
            </div>
            <div className="nav__btns">
                <i className={`uil ${isDark ? "uil-sun" : "uil-moon"} change-theme`} onClick={themeHandler}></i>

                <div className="nav__toggle" onClick={toggleHandler}>
                <i className="uil nav__icon uil-apps"></i>
                </div>
            </div>
        </nav>
    )
}