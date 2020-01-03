import React, { useState } from "react";
import ShopItemRender from "../../utils/ShopItemRender";

function Hats() {
  const [hats] = useState([
    {
      id: 1,
      title: "summer hat",
      img: require("../../images/home/hats.jpg"),
      price: 10.5
    },
    {
      id: 2,
      title: "face cap",
      img: require("../../images/home/hoodies.jpg"),
      price: 9.8
    },
    {
      id: 3,
      title: "sun hat",
      img: require("../../images/home/sneakers.jpg"),
      price: 20.99
    },
    {
      id: 4,
      title: "winter hat",
      img: require("../../images/home/womens.jpg"),
      price: 5.99
    },
    {
      id: 5,
      title: "autumn hat",
      img: require("../../images/home/mens.jpg"),
      price: 10.99
    }
  ]);

  return <ShopItemRender shopItem={hats} />;
}
export default Hats;
