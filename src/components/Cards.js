import React from "react";
import "./Cards.css"

function Cards({ props }) {
  return (
    <div className="services-card">
      {props.map((el, i) => (
        <div className={el.cardClass}>
          <h5 >{el.title}</h5>
          <p >{el.paragraphe}</p>
          <div>
            
            {el.list ? (
              <select className="selection">
                {el.list.map(ele => (
                  <option>{ele}</option>
                ))}
              </select>
            ) : null}
          </div>
          
             
          <img className={el.imageClass} src={el.src}/>   
          
        </div>
      ))}
    </div>
  );
}

export default Cards;
