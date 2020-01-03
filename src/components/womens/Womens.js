import React, { useState } from "react";
import ShopData from "../../utils/ShopData";
import ShopItemRender from "../../utils/ShopItemRender";

function Womens() {
  const [womens] = useState(ShopData[3]);
  return <ShopItemRender shopItem={womens} />;
}
export default Womens;
