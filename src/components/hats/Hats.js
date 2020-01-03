import React, { useState } from "react";
import ShopItemRender from "../../utils/ShopItemRender";
import ShopData from "../../utils/ShopData";

function Hats() {
  const [hats] = useState(ShopData[0]);

  return <ShopItemRender shopItem={hats} />;
}
export default Hats;
