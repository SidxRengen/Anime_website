import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import LowerNav from "./LowerNav";
import Footer from "./Footer";
import "./css/Airing.css";
import axios from "axios";
export default function Airing() {
  const [load, setLoad] = useState(true);
  const [state, setstate] = useState([]);
  const fetchData = async () => {
    let api = await axios.get(
      "https://api.jikan.moe/v4/seasons/upcoming?filter=tv&limit=10"
    );
    let data = await api.data.data;
    setstate(data);
    setLoad(false);
    return data;
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <LowerNav />
      <h1 className="title5">Anime Airing</h1>
      <div className="airing">
        {load ? (
          <div className="loading">loading . . . </div>
        ) : (
          state.map((post) => {
            const { mal_Id, titles, images, url,episodes,score  } = post;
            const arr = titles[0].title.split(" ", 10);
            let a = " ";
            for (let i = 0; i < arr.length; i++) {
              a += arr[i] + " ";
            }
            return (
              <div key={mal_Id} className="list ad">
                <div className="blur2"></div>
                <img src={images.jpg.image_url} alt="" />
                <div className="info">
                  <h3>
                    <a href={url}>{a}</a>
                  </h3>
                  <div className="details">
                    <h5 style={{ color: "pink" }}>
                      {post.genres.map((el) => {
                        return <>{el.name} </>;
                      })}
                    </h5>
                    <h4>From: {post.aired.prop.from.day}{post.aired.prop.from.day?(<>/</>):(<>N.A.</>)}{post.aired.prop.from.month}{post.aired.prop.from.day&&(<>/</>)}{post.aired.prop.from.year} </h4>
                    <h4>Total Episodes confirmed : {episodes==null?"11":episodes} </h4>
                    <h4>Score : {score==null?(<>N.A.</>):(score)} </h4>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      <Footer />
    </div>
  );
}
