import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Card(props) {
  const [load, setLoad] = useState(true);
  const [ani, setani] = useState({});
  const apidata = async () => {
    // setLoad(true);
    const api = await axios.get("https://api.jikan.moe/v4/anime/" + props.id);
    const data = await api.data.data;
    setLoad(false);
    setani(data);
    return data;
  };
  useEffect(() => {
    apidata();
  }, []);

  return (
    <>
      {load ? (
        <>
          <h1 className="laoding">Loading...</h1>
        </>
      ) : (
        <>
          <div key={ani.mal_Id} className="card1">
            <div className="blur1"></div>
            <div className="card" style={props.width}>
              <img src={ani.images.jpg.image_url} alt="/" />
              <a href={ani.url} target="blank">
                <h4>{ani.titles[0].title}</h4>
                <div className="details">
                  <h5 style={{ color: "#FF00E5" }}>
                    {ani.genres.map((el) => {
                      return <>{el.name}, </>;
                    })}
                  </h5>
                </div>
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
