import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import LowerNav from "./LowerNav";
import Footer from "./Footer";
import "./css/Wallpaper.css";
import axios from "axios";
export default function Wallpaper() {
  const [load, setLoad] = useState(true);
  const [id, setid] = useState("monday");
  const [state, setstate] = useState([]);
  const fetchData = async () => {
    let api = await axios.get(
      `https://api.jikan.moe/v4/schedules?page=1&filter=${id}&limit=10`
    );
    let data = await api.data.data;
    var filterMap = {};
    data.forEach(function (item) {
      if (
        !filterMap[item.mal_id] ||
        filterMap[item.mal_id].score < item.score
      ) {
        filterMap[item.mal_id] = item;
      }
    });

    var result = [];

    for (var mal_id in filterMap) {
      result.push(filterMap[mal_id]);
    }

    result.sort(function (a, b) {
      return b.score - a.score;
    });
    setstate(result);
    console.log(result);
    setLoad(false);
    return data;
  };
  const days = [
    {
      day: "monday",
    },
    {
      day: "tuesday",
    },
    {
      day: "wednesday",
    },
    {
      day: "thursday",
    },
    {
      day: "friday",
    },
    {
      day: "saturday",
    },
    {
      day: "sunday",
    },
  ];
  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <div>
      <Navbar />
      <LowerNav />
      <div className="bar">
        {days.map((el) => {
          const { day } = el;
          return (
            <div
              className="item"
              onClick={() => {
                setid(day);
              }}
            >
              {day}
            </div>
          );
        })}
      </div>
      <div className="airing">
        {load ? (
          <div className="loading">loading . . . </div>
        ) : (
          state.map((post) => {
            const { mal_Id, titles, images, url, episodes, score } = post;
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
                    <h4>
                      From: {post.aired.prop.from.day}/
                      {post.aired.prop.from.month}/{post.aired.prop.from.year}{" "}
                    </h4>
                    <h4>
                      Total Episodes Aired :{" "}
                      {episodes == null ? "11" : episodes}{" "}
                    </h4>
                    <h4>Score : {score == null ? <>N.A.</> : score} </h4>
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
