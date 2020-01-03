import { useState } from "react";
function CartValue() {
  const [shoppingCart, setCart] = useState([]);

  const setShoppingCart = (cart, n) => {
    const shopCart = [...shoppingCart];
    const index = shopCart.indexOf(cart);

    if (n) {
      shopCart[index].count += n;
      setCart(shopCart);
      return;
    }

    if (index !== -1) {
      shopCart[index].count++;
      setCart(shopCart);
      return;
    }
    cart.count = 1;
    shopCart.push(cart);
    setCart(shopCart);
  };

  const removeCart = cart => {
    const shopCart = [...shoppingCart];
    const index = shopCart.indexOf(cart);
    shopCart.splice(index, 1);
    setCart(shopCart);
  };

  const state = {
    shoppingCart: shoppingCart,
    setShoppingCart: setShoppingCart,
    removeCart: removeCart
  };
}

export default CartValue;
