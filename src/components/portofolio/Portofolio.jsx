import React, { useState } from 'react';
import "./portofolio.css";
import Menu from './menu';

const Portofolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
  }

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Recent Work</h2>
      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>Everything</span>
        <span className="work__item" onClick={() => filterItem("Web")}>Web Development</span>
        <span className="work__item" onClick={() => filterItem("Desain")}>Desain</span>
        <span className="work__item" onClick={() => filterItem("SEO")}>SEO</span>
      </div>

      <div className="work__container grid">
      {items.map((elem) => {
        const{ id, image, title, category} = elem;
        return (
         <div className="work__card" key={id}>
         <div className="work__thumbnail">
          <img src={image} alt="" className="work__img" />
          <div className="work__mask"></div>
         </div>

         <span className="work__category">{category}</span>
         <h3 className="work__title">{title}</h3>
         <a href="#about" className="work__button">
          <i className="icon-link work__button-icon"></i>
         </a>
         </div>
        )
      })}
      </div>
    </section>    
    )
}

export default Portofolio