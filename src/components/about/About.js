import AboutCard from '../common/AboutCard';

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        {/* <img src='/img/about_2.png' alt='Akhtar' className='about__img'></img> */}
        <AboutCard />

        <div className="about__data">
          <p className="about__description">
            A highly organized and detail-oriented Software Engineer with a
            proven track record in full stack development. Ready to bring my
            MERN stack expertise and fast learning abilities to drive success.
          </p>
          <div className="about__info">
            <div>
              <span className="about__info-title">03+</span>
              <span className="about__info-name">
                Years <br></br> experience
              </span>
            </div>

            <div>
              <span className="about__info-title">20+</span>
              <span className="about__info-name">
                Completed <br></br> project
              </span>
            </div>

            <div>
              <span className="about__info-title">05+</span>
              <span className="about__info-name">
                Companies <br></br> worked
              </span>
            </div>
          </div>
          <div className="about__buttons">
            <a
              download="mm-akhtar-cv.pdf"
              href="/doc/akhtar-cv.pdf"
              target="_blank"
              className="button button--flex"
            >
              Download CV<i className="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
