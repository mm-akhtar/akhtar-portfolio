import React from 'react'

function Contact() {
    return (

        <section className="contact section" id="contact">
        <h2 className="section__title">Conatact Me</h2>
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
          
              <a href="mailto:contact.mmakhtar@gmail.com"  target="_blank">
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
          </div>

          <form action="" className="contact__form grid">
            <div className="contact__inputs grid">
              <div className="contact__content">
                <label htmlFor="name" className="contact__label">Name</label>
                <input type="text" className="contact__input"></input>
              </div>
              <div className="contact__content">
                <label htmlFor="email" className="contact__label">Email</label>
                <input type="email" className="contact__input"></input>
              </div>
              <div className="contact__content">
                <label htmlFor="phone" className="contact__label">Phone No</label>
                <input type="number" className="contact__input"></input>
              </div>
              <div className="contact__content">
                <label htmlFor="budget" className="contact__label">Budget</label>
                <input type="text" className="contact__input"></input>
              </div>
            </div>
            <div className="contact__content">
                <label htmlFor="project" className="contact__label">Project</label>
                <input type="text" className="contact__input"></input>
            </div>
            <div className="contact__content">
                <label htmlFor="message" className="contact__label">Message</label>
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
