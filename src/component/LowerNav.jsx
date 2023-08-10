import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../component/css/LowerNav.css";
import { ArrowDropDown } from "@mui/icons-material";
export default function LowerNav() {
  const [Show, setShow] = useState("none");
  const [Show2, setShow2] = useState("none");
  function dropanime() {
    setShow("");
  }
  const [Show1, setShow1] = useState("none");
  function dropanime1() {
    setShow1("");
  }

  var animeList = [
    "Fullmetal Alchemist",
    "	Death Note",
    "Code Geass: Lelouch of the Rebellion",
    "Hunter x Hunter",
    "Steins;Gate",
    "Attack on Titan",
    "One Piece",
    "Dragon Ball Z",
    "My Hero Academia",
    "Chainsaw Man",
    "Tokyo Revengers",
    "Demon Slayer",
    "Blue Lock",
    "Summer Time Rendering",
  ];
  var a = Math.round(Math.random() * animeList.length);
  const [anime, setanime] = useState("");
  return (
    <>
      <div className="LowerNav1">
        <span
          onClick={() => {
            Show2 === "none" ? setShow2("grid") : setShow2("none");
          }}
        >
          <ArrowDropDown fontSize="large" className="arrow" />
        </span>
      </div>
      <div className="LowerNav" style={{ display: Show2 }}>
        <div className="col">
          <span>
            <Link to="/Body1">Top 10 anime now</Link>
          </span>
        </div>
        <div className="col">
          <span>
            <Link to="/Body2">Top 10 anime of all time</Link>
          </span>
        </div>
        <div className="col">
          <span>
            <Link to="/Airing">Upcoming</Link>
          </span>
        </div>
        <div className="col">
          <span>
            <Link to="/Wallpaper">Schedule</Link>
          </span>
        </div>
        <div className="fle">
          <div
            className="col"
            onMouseOver={dropanime1}
            onMouseOut={() => {
              setShow1("none");
            }}
          >
            <span className="title2">Random anime chooser</span>
          </div>
          <div
            style={{ display: Show1 }}
            onMouseOver={dropanime1}
            onMouseOut={() => {
              setShow1("none");
            }}
            className="Drop2"
          >
            <div className="btn1">
              <button
                onClick={() => {
                  setanime(animeList[a]);
                }}
              >
                Get Your Anime
              </button>
            </div>
            <div className="show">{anime}</div>
          </div>
          <div
            className="col"
            onMouseOver={dropanime}
            onMouseOut={() => {
              setShow("none");
            }}
          >
            <span>Sites to watch anime </span>
          </div>
          <div
            style={{ display: Show }}
            onMouseOver={dropanime}
            onMouseOut={() => {
              setShow("none");
            }}
            className="Drop1"
          >
            <ol>
              <li>
                <a href="https://9animetv.to/" target="blank">
                  9anime
                </a>
              </li>
              <li>
                <a href="https://aniwatch.to/" target="blank">
                  Ani Watch
                </a>
              </li>
              <li>
                <a href="https://animixplay.sc/homepage/" target="blank">
                  Animixplay
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="LowerNav LowerNav2">
        <div className="col">
          <span>
            <Link to="/Body1">Top 10 anime now</Link>
          </span>
        </div>
        <div className="col">
          <span>
            <Link to="/Body2">Top 10 anime of all time</Link>
          </span>
        </div>
        <div className="col">
          <span>
            <Link to="/Airing">Upcoming</Link>
          </span>
        </div>
        <div className="col">
          <span>
            <Link to="/Wallpaper">Schedule</Link>
          </span>
        </div>
        <div
          className="col"
          onMouseOver={dropanime1}
          onMouseOut={() => {
            setShow1("none");
          }}
        >
          <span>Random anime chooser</span>
        </div>
        <div
          style={{ display: Show1 }}
          onMouseOver={dropanime1}
          onMouseOut={() => {
            setShow1("none");
          }}
          className="Drop2"
        >
          <div className="btn1">
            <button
              onClick={() => {
                setanime(animeList[a]);
              }}
            >
              Get Your Anime
            </button>
          </div>
          <div className="show">{anime}</div>
        </div>
        <div
          className="col"
          onMouseOver={dropanime}
          onMouseOut={() => {
            setShow("none");
          }}
        >
          <span>Sites to watch anime </span>
        </div>
      </div>
      <div
        style={{ display: Show }}
        onMouseOver={dropanime}
        onMouseOut={() => {
          setShow("none");
        }}
        className="Drop1"
      >
        <ol>
          <li>
            <a href="https://9animetv.to/" target="blank">
              9anime
            </a>
          </li>
          <li>
            <a href="https://aniwatch.to/" target="blank">
              Ani Watch
            </a>
          </li>
          <li>
            <a href="https://animixplay.sc/homepage/" target="blank">
              Animixplay
            </a>
          </li>
        </ol>
      </div>
    </>
  );
}
