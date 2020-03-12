import React from 'react'
import "./Stats.css"

 function Stats(props) {
    return (
        <section class="stats">


              <div className="container"> 
                <h2>The world's biggest healthcare platform</h2>
                <p className="paragraphe">We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
                <img src="https://www.docplanner.com/img/logo.png" alt="logo" className="etoile"></img>
            </div>
            
            <div className="container-2" >
            { props.ele.map(ele=> 
            <div className={ele.statsClass} >
                <img src={ele.svg }/>
                <h3> {ele.title} </h3>
                <p> {ele.des} </p>
             
            </div>
              )}
              </div>
        
        </section>
    )
}
export default Stats