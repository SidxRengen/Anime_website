import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import LowerNav from "./LowerNav";
import Footer from "./Footer";
import "./css/Body2.css";
import "./css/Body1.css";
import axios from "axios";
export default function Body1() {
  const [load, setLoad] = useState(false);
  const [state, setstate] = useState([]);
  const fetchData = async () => {
    setLoad(true);
    let api = await axios.get("https://api.jikan.moe/v4/seasons/now?limit=10");
    let data = await api.data.data;
    setstate(data);
    setLoad(false);
    return data;
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <body>
      <Navbar />
      <LowerNav />
      <div className="body1">
        <h1>Top 10 Anime</h1>
        {load ? (
          <div className="loading">loading . . . </div>
        ) : (
          state.map((post) => {
            const { mal_Id, titles, images, url } = post;
            const arr = titles[0].title.split(" ", 10);
            let a = " ";
            for (let i = 0; i < arr.length; i++) {
              a += arr[i] + " ";
            }
            return (
              <div key={mal_Id} className="list">
                <div className="blur2"></div>
                <img src={images.jpg.image_url} alt="" />
                <h3>
                  <a href={url}>{a}</a>
                </h3>
              </div>
            );
          })
        )}
      </div>
      <Footer />
    </body>
  );
}
