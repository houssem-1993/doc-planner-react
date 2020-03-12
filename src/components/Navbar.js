
import "./Navbar.css";

import React from "react";
const Drop = props => {
  return (
    <ul className="nav-menu">{
      props.data.map(el => <li className="title"><a href="#"> {el.title}</a>
      {!el.sousitem ? null :
        <ul className="sousitems"> {el.sousitem.map(el => <li>{el}</li>)}
        </ul>
      }</li>

      )}
    </ul>
  );
};
const Navbar = props => {
  return (
    <header className="head">
      <div class="headbar">
        <img
          class="logo"
          src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
          alt="Docplanner Group"
          className="image"
        />
        <div class="head_link">
          <Drop data={props.navItem} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

//  syntaxe errors !!!!!!!!!!   return ( <div>{()=> <h1>{}</h1>  } </dv>  )
