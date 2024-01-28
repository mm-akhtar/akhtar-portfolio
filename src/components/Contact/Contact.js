import React from 'react'

function Contact() {
    return (
      <section className="contact section" id="contact">
        <h2 className="section__title">Contact Me</h2>
        <span className="section__subtitle">Get in touch</span>

        <div className="contact__container container grid">
          <div>
            <div className="contact__information">
              <i className="uil uil-phone contact__icon"></i>

              <div>
                <a href="tel:+919365234855">
                  <h3 className="contact__title">Call Me</h3>
                  <span className="contact__subtitle">+91 9365234855</span>
                </a>
              </div>
            </div>

            <div className="contact__information">
              <i className="uil uil-envelope contact__icon"></i>

              <div>
                <a href="mailto:contact.mmakhtar@gmail.com" target="_blank">
                  <h3 className="contact__title">Email</h3>
                  <span className="contact__subtitle">contact.mmakhtar@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="contact__information">
              <i className="uil uil-map-marker contact__icon"></i>

              <div>
                <h3 className="contact__title">Location</h3>
                <span className="contact__subtitle">India - Bangalore</span>
              </div>
            </div>
            <div className='logo-container'>
              <svg
                id="logo"
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="300.000000pt"
                height="300.000000pt"
                viewBox="0 0 300.000000 300.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                  <path d="M1295 2940 c-567 -88 -1033 -493 -1190 -1035 -38 -132 -55 -254 -55 -400 0 -299 80 -563 245 -811 205 -308 520 -525 884 -610 131 -31 370 -43 504 -25 550 73 1018 457 1192 976 88 260 98 556 30 825 -132 524 -550 931 -1084 1057 -87 20 -138 25 -286 28 -99 2 -207 0 -240 -5z m485 -105 c264 -58 488 -181 681 -374 195 -196 316 -418 376 -693 25 -118 25 -419 0 -538 -55 -256 -172 -479 -347 -664 -267 -281 -605 -426 -990 -426 -361 0 -679 127 -937 373 -205 196 -337 432 -398 707 -26 118 -31 375 -11 501 45 272 170 520 361 718 216 223 459 353 765 407 102 18 399 12 500 -11z" />
                  <path d="M1470 2008 c0 -7 10 -40 21 -73 16 -47 22 -96 26 -225 l6 -165 -243 -105 c-134 -58 -247 -106 -251 -108 -13 -5 -11 49 2 87 12 34 15 35 77 16 29 -10 28 6 -3 39 -29 31 -79 125 -68 127 5 1 20 0 34 -1 14 0 45 6 70 14 24 9 45 12 47 8 9 -25 83 -132 92 -132 19 0 10 31 -25 86 -25 39 -35 66 -35 95 0 22 -7 54 -16 72 -17 34 -83 107 -96 107 -17 0 -7 -41 27 -116 19 -42 35 -78 35 -79 0 -8 -67 -25 -94 -25 -39 1 -66 16 -101 58 -29 35 -43 40 -51 17 -4 -8 8 -31 28 -54 18 -22 46 -64 61 -95 l29 -55 -23 -33 c-17 -23 -24 -50 -27 -93 l-4 -61 -167 -83 c-91 -46 -203 -105 -249 -132 -45 -28 -87 -47 -92 -44 -17 11 -11 84 11 127 46 91 102 111 163 58 53 -47 54 -19 2 70 -25 44 -46 83 -46 87 0 5 36 8 80 8 l80 0 27 -38 c25 -35 53 -49 53 -27 0 6 -13 28 -29 50 -23 32 -28 48 -25 78 6 43 -19 91 -61 118 -23 15 -28 15 -36 3 -13 -21 -11 -32 19 -93 16 -30 27 -58 24 -61 -10 -9 -103 -5 -125 6 -12 6 -36 27 -53 46 -19 22 -36 33 -43 28 -16 -9 -6 -53 18 -80 18 -21 81 -122 81 -130 0 -3 -11 -5 -25 -5 -43 0 -80 -26 -118 -82 -41 -61 -53 -110 -37 -153 13 -35 -1 -50 -67 -68 -24 -6 -43 -17 -43 -24 0 -19 31 -16 86 8 l48 20 50 -27 c44 -24 61 -27 134 -26 86 1 134 13 260 64 111 46 85 51 -41 7 -132 -46 -240 -59 -301 -37 -22 8 -41 19 -43 25 -2 6 20 19 49 28 29 10 128 46 219 81 199 75 219 81 219 62 0 -25 59 -108 92 -129 52 -32 173 -22 303 26 145 53 165 78 25 30 -96 -33 -231 -58 -267 -49 -15 4 -42 20 -59 36 -33 31 -72 104 -61 114 14 15 453 162 460 155 5 -5 1 -50 -8 -100 -18 -95 -16 -113 9 -92 9 8 16 43 21 101 4 49 12 95 19 103 13 16 62 30 163 48 67 11 75 11 93 -6 11 -10 23 -15 26 -12 7 7 -55 132 -89 181 -20 28 -20 29 -1 43 17 12 22 10 50 -24 31 -37 49 -39 49 -5 0 13 11 18 55 20 30 2 64 -2 77 -9 31 -17 34 -10 18 36 -16 47 -7 54 33 25 40 -30 75 -24 82 13 l5 29 22 -30 22 -29 -125 -54 c-69 -30 -130 -59 -135 -65 -22 -27 12 -21 82 12 102 49 418 170 627 239 159 53 185 66 164 79 -11 7 -506 -164 -562 -194 -23 -13 -41 3 -80 72 l-21 37 33 17 c18 9 33 13 35 8 2 -5 12 -24 23 -42 29 -47 54 -40 60 17 l5 44 31 -26 c33 -28 74 -36 74 -15 0 6 -12 27 -27 46 -20 26 -24 39 -16 51 17 28 41 24 58 -8 9 -19 23 -31 36 -31 30 0 35 28 9 55 -21 22 -22 28 -11 49 13 24 50 46 76 46 8 0 15 5 15 10 0 6 -14 10 -32 10 -24 0 -41 -10 -75 -45 -23 -25 -51 -45 -61 -45 -22 0 -42 -19 -42 -40 0 -9 11 -31 25 -50 14 -18 23 -36 20 -38 -9 -9 -54 40 -57 62 -4 30 -31 31 -75 3 -21 -13 -56 -30 -78 -37 -35 -12 -40 -11 -50 5 -49 84 -87 135 -100 135 -24 0 -18 -20 30 -95 28 -45 41 -73 35 -79 -18 -18 -11 -37 13 -34 19 3 22 -2 25 -39 4 -57 -10 -55 -71 10 -45 48 -49 51 -62 34 -12 -17 -18 -11 -71 62 -32 45 -61 81 -66 81 -16 0 -8 -35 22 -97 28 -60 48 -85 35 -43 -3 11 -4 20 -1 20 6 0 76 -112 76 -122 0 -4 -22 -8 -49 -8 -46 0 -50 2 -53 27 -4 35 -28 43 -28 9 0 -30 -17 -35 -28 -8 -19 45 -105 192 -113 192 -18 0 -8 -38 31 -120 23 -46 39 -89 36 -97 -9 -24 -31 -14 -52 25 -11 20 -53 93 -92 162 -39 69 -78 137 -86 153 -16 28 -36 37 -36 15z m168 -311 c23 -37 42 -69 42 -72 0 -6 -121 -67 -125 -63 -1 2 -5 71 -8 153 l-6 150 27 -50 c16 -27 47 -80 70 -118z m592 103 c0 -35 -14 -39 -30 -10 -12 23 -6 40 16 40 9 0 14 -11 14 -30z m-1055 -51 c9 -17 14 -36 12 -42 -4 -10 -37 51 -37 68 0 13 11 2 25 -26z m557 -218 l38 -68 -111 -27 c-61 -15 -113 -25 -116 -22 -3 3 -2 31 2 63 l7 58 66 32 c37 17 69 32 72 32 3 1 22 -30 42 -68z m-219 -131 c-4 -4 -64 -26 -133 -48 -69 -23 -174 -59 -234 -81 -60 -23 -111 -39 -114 -37 -2 3 -5 19 -5 37 l-2 32 245 107 245 107 3 -55 c2 -30 -1 -58 -5 -62z m-523 -134 c0 -8 3 -21 6 -30 4 -10 -2 -19 -18 -25 -70 -28 -331 -126 -378 -142 -50 -17 -53 -17 -32 -1 32 24 394 211 410 211 6 1 12 -5 12 -13z" />
                  <path d="M1395 1640 c-11 -17 5 -51 23 -48 23 4 23 52 0 56 -9 2 -19 -2 -23 -8z" />
                  <path d="M882 1403 c4 -36 33 -39 33 -3 0 16 -6 26 -18 28 -15 3 -18 -2 -15 -25z" />
                </g>
              </svg>
            </div>
          </div>

          <form action="" className="contact__form grid">
            <div className="contact__inputs grid">
              <div className="contact__content">
                <label htmlFor="name" className="contact__label">
                  Name
                </label>
                <input type="text" className="contact__input"></input>
              </div>
              <div className="contact__content">
                <label htmlFor="email" className="contact__label">
                  Email
                </label>
                <input type="email" className="contact__input"></input>
              </div>
              <div className="contact__content">
                <label htmlFor="phone" className="contact__label">
                  Phone No
                </label>
                <input type="number" className="contact__input"></input>
              </div>
              <div className="contact__content">
                <label htmlFor="budget" className="contact__label">
                  Budget
                </label>
                <input type="text" className="contact__input"></input>
              </div>
            </div>
            <div className="contact__content">
              <label htmlFor="project" className="contact__label">
                Project
              </label>
              <input type="text" className="contact__input"></input>
            </div>
            <div className="contact__content">
              <label htmlFor="message" className="contact__label">
                Message
              </label>
              <textarea rows="7" className="contact__input"></textarea>
            </div>

            <div>
              <a className="button button--flex">
                Send Message
                <i className="uil uil-message button__icon"></i>
              </a>
            </div>
          </form>
        </div>
      </section>
    )
}

export default Contact
