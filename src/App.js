import React from 'react';
import './App.css';

import Home from './components/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Portofolio from './components/portofolio/Portofolio';
// import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Pricing from './components/pricing/Pricing';
import Blog from './components/blog/Blog';


const App = () => {
  return (
    <>
    <Sidebar />
    <main className='main'>
    <Home />
    <About />
    <Resume />
    <Portofolio/>
    <Contact/>
    </main>
    </>
  );
};

export default App;
