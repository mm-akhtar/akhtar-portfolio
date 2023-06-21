import React, {useState} from 'react'

function Qualification() {
    const [isQfn, setIsQfn] = useState(false);
    const eduHandler = () => {
        setIsQfn(true);
      };
    
      const workHandler = () => {
        setIsQfn(false);
      };

    return (
        
      <section className='qualification section'>
      <h2 className='section__title'>Qualification</h2>
      <span className='section__subtitle'>My personal journey</span>

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div className={`qualification__button button--flex ${isQfn && "qualification__active"}`} onClick={eduHandler}>
            <i className='uil uil-graduation-cap qualification__icon'></i>
            Education
          </div>

          <div className={`qualification__button button--flex ${!isQfn && "qualification__active"}`} onClick={workHandler}>
            <i className='uil uil-briefcase-alt qualification__icon'></i>
            Work
          </div>
        </div>

        <div className='qualification__sections'>
          <div className={`qualification__content ${isQfn && "qualification__active"}`}>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Computer Engineer</h3>
                <span className='qualification__subtitle'>KNSIT</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i>
                  2018 - 2022
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>Web Design</h3>
                <span className='qualification__subtitle'>Udemy</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i>
                  2014 - 2017
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Web Development</h3>
                <span className='qualification__subtitle'>Udemy</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i>
                  2017 - 2019
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                {/* <span className="qualification__line"></span> */}
              </div>

              <div>
                <h3 className='qualification__title'>Design</h3>
                <span className='qualification__subtitle'>KNSIT</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i>
                  2019 - 2022
                </div>
              </div>
            </div>
          </div>

          <div className={`qualification__content ${!isQfn && "qualification__active"}`}>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Software Engineer</h3>
                <span className='qualification__subtitle'>Microsoft - India</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i>
                  2017 - 2021
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>Frontend Developer</h3>
                <span className='qualification__subtitle'>Apple Inc - Spain</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i>
                  2017 - 2019
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Ui Designer</h3>
                <span className='qualification__subtitle'>Figma - India</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i>
                  2019 - 2021
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                {/* <span className="qualification__line"></span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    )
}

export default Qualification
