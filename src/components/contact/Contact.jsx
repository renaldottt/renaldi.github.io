import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Contact Me</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Lets talk about everything me</h3>
          <p className="contact__details">Dont like forms? contact me in email</p>
        </div>
     

      <form action="" className="contact__from">
        <div className="contact__from-group">
          <div className="contact__from-div">
            <input type="text" className="contact__from-input" placeholder='Inser your name'/>
          </div>

        <div className="contact__from-div">
        <input type="text" className="contact__from-input" placeholder='insert your email'/>
        </div>
        </div>


        <div className="contact__from-div">
          <input type="text" className="contact__from-input" placeholder='insert your subject'/>
        </div>

        <div className="contact__from-div contact-form-area">
          <textarea name="" id="" cols="30" rows="10" className='contact__from-input' placeholder='write yoour message'></textarea>
        </div>
        <button className="btn">Send Message</button>
      </form>
      </div>
    </section>
    )
}

export default Contact