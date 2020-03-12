import React from "react";
import Navbar from "./components/Navbar";
import Title from './components/Title'
import "./App.css";
import Grid from "./components/Grid";
import Cards from "./components/Cards";
import Brands from "./components/Brands";
import Stats from "./components/Stats";
import CountriesCards from "./components/CountriesCards";
import Footer from "./components/Footer";

const arr = [
  { title: "About us" },
  { title: "Career" },
  {
    title: "Departements",
    sousitem: [
      "Marketing & PR",
      "Customer Success & Sales",
      "IT, Product, design & UX",
      "Finance & Administration",
      "HR & More"
    ]
  }
];




const ServiceCard = [{
  title: "for patient",
  paragraphe: "Find a doctor, book a visit and solve any health-related doubt",
  list: ["choose country", "TUNISIA", "France", "Brazil"],
  // imagelink:"https://www.docplanner.com/img/screen-marketplace@2x.png",
  cardClass: "patients-card",
  src: "https://www.docplanner.com/img/screen-marketplace@2x.png",
  imageClass: "service-pic"
},
{
  title: "for doctors",
  titleClass: "patients",
  descriptionClass: "find",
  paragraphe: "Save time managing visits and cut no-shows by half",
  src: "https://www.docplanner.com/img/screen-saas@2x.png",
  cardClass: "doctor-card",
  imageClass: "service-pic2"
}]
const StatBox = [
  {
    statsClass: "card-1",
    svg: "https://www.docplanner.com/img/flag.png",
    title: "Leader in 10 countries",
    des: "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"
  },

  {
    statsClass: "card-2",
    svg: "https://www.docplanner.com/img/visits.png",
    title: "1.5 million appointments",
    des: "booked last month"
  },

  {
    statsClass: "card-3",
    svg: "https://www.docplanner.com/img/patients.png",
    title: "30 million unique patients",
    des: "visit us every month"
  },

  {
    statsClass: "card-4",
    svg: "https://www.docplanner.com/img/doctors.png",
    title: "2 million active doctors",
    des: "trust in our solutions"
  }
]
const Countries = [
  { img: "https://www.docplanner.com/images/warsaw.png", title: "Warsaw", bouton: "SEE OPENINGS" },// contry Card 
  { img: "https://www.docplanner.com/images/barcelona.png", title: "Barcelona", bouton: "SEE OPENINGS" },//country card 
  { img: "https://www.docplanner.com/images/istanbul.png", title: "istumbul", bouton: "SEE OPENINGS" },
  { img: "https://www.docplanner.com/images/rome.png", title: "Rome", bouton: "SEE OPENINGS" },
  { img: "https://www.docplanner.com/images/mexico-city.png", title: "Mexico City", bouton: "SEE OPENINGS" },
  { img: "https://www.docplanner.com/images/curitiba.png", title: "Curitiba", bouton: "SEE OPENINGS" },
]


function App() {
  return (
    <div className="App">
      <Navbar navItem={arr} />
      <section>
        <div class="intro-section">

          <Title />
          <Grid />
          <Cards props={ServiceCard} />
        </div>
        <Brands />
      </section>

      <Stats ele={StatBox} />
      <CountriesCards el={Countries} />
      <Footer />
    </div>
  );
}

export default App;
