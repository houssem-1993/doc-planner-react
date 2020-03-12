import React from "react";
import "./CountriesCards.css";

function CountriesCards(props) {
  return (
    <section className="offices">
      <div className="top-section">
        <h1>Improve the lives of millions. Change yours forever</h1>
        <p>
          More than 1000 team mates share our same vision, goals and passion.
          With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and
          Curitiba, our search for great talent never stops.
        </p>
      </div>
      <div className="country-cards">
        {props.el.map((el) => (
          <div className="Card">
            <img className="img" src={el.img} />
            <div className="name-btn">
              <h3>{el.title}</h3>
              <button className="bouton">{el.bouton}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default CountriesCards;
