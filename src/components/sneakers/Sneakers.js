import React, { useState } from "react";
import ShopData from "../../utils/ShopData";
import ShopItemRender from "../../utils/ShopItemRender";

function Sneakers() {
  const [sneakers] = useState(ShopData[1]);
  return <ShopItemRender shopItem={sneakers} />;
}
export default Sneakers;
