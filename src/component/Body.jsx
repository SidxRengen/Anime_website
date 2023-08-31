import React from "react";
import "./css/Body.css";
import Car1 from "./images/car-1.jpg";
import Car2 from "./images/car-2.png";
import Car3 from "./images/car-3.jpg";
import Navbar from "./Navbar";
import LowerNav from "./LowerNav";
import Footer from "./Footer";
import Card from "./Card";
export default function Body() {
  const color = 255;
  return (
    <div className="body">
      <Navbar />
      <LowerNav />
      <div className="main">
        <div
          className="blur"
          style={{ background: `rgba(${color}, 214, 0, 0.59)` }}
        ></div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade car1"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner" style={{ borderRadius: "10px" }}>
            <div className="carousel-item active">
              <img src={Car1} className="w-100 car-img" alt="1" />
            </div>
            <div className="carousel-item">
              <img src={Car2} className="d-block w-100 car-img" alt="2" />
            </div>
            <div className="carousel-item">
              <img src={Car3} className="d-block w-100 car-img" alt="3" />
            </div>
          </div>
          <button
            className="carousel-control-prev pre"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next nex"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <h1 className="title">Popular Animes</h1>
        <div className="cards1">
          <a href="https://myanimelist.net/anime/16498/Shingeki_no_Kyojin">
            <Card id="16498" width={{ height: "50vh" }}/>
          </a>
          <a href="https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba">
            <Card id="38000"width={{ height: "50vh" }}/>
          </a>
          <a href="https://myanimelist.net/anime/1535/Death_Note">
            <Card id="1535" width={{ height: "50vh" }}/>
          </a>
          <a href="https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011">
            <Card id="11061" width={{ height: "50vh" }}/>
          </a>
        </div>
        <h1 className="title">Popular Movies</h1>
        <div className="cards2">
          <a href="https://myanimelist.net/anime/32281/Kimi_no_Na_wa">
            <Card
              width={{ width: "46%", height: "45vh" }}
              id="32281"
              className="card2"
            />
          </a>
          <a href="https://myanimelist.net/anime/28851/Koe_no_Katachi">
            <Card
              width={{ width: "46%", height: "45vh" }}
              id="28851"
              className="card2"
            />
          </a>
          <a href="https://myanimelist.net/anime/50594/Suzume_no_Tojimari">
            <Card
              width={{ width: "46%", height: "45vh" }}
              id="50594"
              className="card2"
            />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
