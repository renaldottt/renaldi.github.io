import React from 'react';
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from "./HeaderSocial";
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  return (
<section className="home container" id="home">
  <div className="intro">
    <img src={Me} alt="" className="home__img"/>
    <h1 className="home__name">Renaldi Dwi Nanda P</h1>
    <span className="home__education">Hanya orang biasa dari Tuban</span> <br></br> 
   <span>yang mencoba keberuntungan di dunia digital.</span>
    
    <HeaderSocials />
  
  <a href="#contact" className="btn">Hubungi Saya</a>
  
  <ScrollDown />
  </div>

  
  <Shapes />
</section>
    );
};

export default Home;