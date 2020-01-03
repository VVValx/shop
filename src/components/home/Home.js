import React, { useState } from "react";
import "./Home.css";
import HomeGrid from "./HomeGrid";

function Home() {
  const [clothing] = useState([
    {
      id: 1,
      title: "hats",
      img: require("../../images/home/hats.jpg"),
      
    },
    {
      id: 2,
      title: "hoodies",
      img: require("../../images/home/hoodies.jpg"),
     
    },
    {
      id: 3,
      title: "sneakers",
      img: require("../../images/home/sneakers.jpg"),
      
    },
    {
      id: 4,
      title: "womens",
      img: require("../../images/home/womens.jpg"),
      
    },
    {
      id: 5,
      title: "mens",
      img: require("../../images/home/mens.jpg"),
      
    }
  ]);

  return (
    <div className="container">
      <HomeGrid clothing={clothing} />
    </div>
  );
}

export default Home;
