import React, { useState, useEffect } from "react";
import "./css/Navbar.css";
import { Link } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import axios from "axios";
import Logo from "./Logo";
// eslint-disable-next-line
export default function Navbar() {
  const [search, setsearch] = useState("");
  const [state, setstate] = useState([]);
  const SearchData = async () => {
    let api1 = await axios.get("https://api.jikan.moe/v4/anime?q="+search);
    let data1 = api1.data.data;
    console.log(data1)
    setstate(data1);
  } 
  useEffect(() => {
    if (search!=="") { 
      SearchData();
    }
  }, [search]);
  return (
    <div className="nav">
      <div className="col logo">
        <Link to="/"><Logo /></Link>
      </div>
      <div className="col search">
        <input
        style={{"boxShadow": "0px 0px 10px 1px yellow"}}
          type="search"
          value={search}
          // onKeyDown={handleKeyPress}
          onChange={(event) => {
            setsearch(event.target.value);
          }}
          placeholder="Search your favourite anime"
          name="search"
          id="searchbar"
        />
      </div>
      <div className="searches" style={(search===""?{"visibility":"hidden"}:{"visibility":"visible"})}>
      {
        state.map((post) => {
        const {mal_Id, titles, url} = post;
        return (
          <div key={mal_Id} className="list1" >
            <h3 ><a onClick={()=>{setsearch("")}} target="_blank" href={url}>{titles[0].title}</a></h3>
          </div>
        );
      })}
      </div>
      <div className="col social">
        <FacebookIcon fontSize="-webkit-xxx-large" className="facebook" />
        <TwitterIcon fontSize="-webkit-xxx-large;" className="twitter" />
        <InstagramIcon fontSize="-webkit-xxx-large" className="insta" />
      </div>
    </div>
  );
};
