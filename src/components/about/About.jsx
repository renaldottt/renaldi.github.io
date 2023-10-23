import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-2.svg";

const About = () => {
  return (
    <section className="about container section" id='about'>
    <h2 className="section__title">About Me</h2>

    <div className="about__container grid">
      <img src={Image} alt="" className="about__img" />
    
    <div className="about__data grid">
      <div className="about__info">
        <p className="about__description">Hallo, saya Renaldi Dwi Nanda P, seorang freelancer dari Tuban, Jawa Timur. Saya memiliki pengalaman di bidang Content Writer, SEO, Web Development, Jasa Joki Adsense dan Digital Marketing.</p>
        <a href="#" className="btn">Download CV</a>
      </div>

    <div className="about__skills grid">
      <div className="skills__data">
        <div className="skills__titles">
          <h3 className="skills__name">Web Development</h3>
          <span className="skills___number">30%</span>
        </div>

        <div className="skills__bar">
           <span className="skills__percentage development"></span>
          </div>
        </div>

      <div className="skills__data">
        <div className="skills__titles">
          <h3 className="skills__name">UI/UX design</h3>
          <span className="skills___number">40%</span>
        </div>

        <div className="skills__bar">
          <span className="skills__percentage ui__design"></span>
        </div>
      </div>

      <div className="skills__data">
        <div className="skills__titles">
          <h3 className="skills__name">SEO Optimaztion</h3>
          <span className="skills___number">60%</span>
        </div>

        <div className="skills__bar">
           <span className="skills__percentage seo"></span>
          </div>
        </div>

    </div>
  </div>
</div>
    </section>
    
    
    )
}

export default About