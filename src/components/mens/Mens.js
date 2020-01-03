import React, { useState } from "react";
import ShopData from "../../utils/ShopData";
import ShopItemRender from "../../utils/ShopItemRender";

function Mens() {
  const [mens] = useState(ShopData[4]);
  return <ShopItemRender shopItem={mens} />;
}
export default Mens;
