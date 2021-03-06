import React, { useState } from "react";
import ShopData from "../../utils/ShopData";
import ShopItemRender from "../../utils/ShopItemRender";

function Hoodies() {
  const [jackets] = useState(ShopData[2]);
  return <ShopItemRender shopItem={jackets} />;
}
export default Hoodies;
