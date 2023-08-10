import { useEffect, useState } from "react";
import "./css/Body2.css";
import Navbar from "./Navbar";
import LowerNav from "./LowerNav";
import Footer from "./Footer";
import axios from "axios";
export default function Body2() {
  const [state,setstate] = useState([]);
  const [load, setLoad] = useState(true);
  let func = async()=>{
    let api = await axios("https://api.jikan.moe/v4/top/anime?limit=10") 
    let data = await api.data.data
    setstate(data)
    setLoad(false)
    console.log(data)
    return data 
  };
  useEffect(()=>{
    func();
  },[]);
  return (
    <body>
      <Navbar />
      <LowerNav />
      <div className="body2">
        <h1>Top 10 Anime</h1>
        {load?<div className="loading">loading . . . </div>:(state.map((post) => {
        const {mal_Id, titles, images, url} = post;
        const arr = titles[0].title.split(" ",10);
        let a = " "
        for (let i = 0; i < arr.length; i++) {
          a+=arr[i]+" ";
        }  
        return (
          <div key={mal_Id} className="list">
            <div className="blur3"></div>
            <img src={images.jpg.image_url} alt=""/>
            <h3><a href={url}>{a}</a></h3>
          </div>
        );
      }))}
      </div>
      <Footer/>
    </body>
  );
}
