import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Cart from "./components/cart/Cart";
import Hats from "./components/hats/Hats";
import Home from "./components/home/Home";
import TopMenu from "./components/menu/TopMenu";
import NotFound from "./components/NotFound";
import CartContext from "./contexts/CartContext";
import HatsDetail from "./components/hats/HatsDetail";

function App() {
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

  return (
    <CartContext.Provider value={state}>
      <TopMenu />
      <Switch>
        <Route path="/cart" exact component={Cart} />
        <Route path="/hats/:itemId" exact component={HatsDetail} />
        <Route path="/hats" exact component={Hats} />
        <Route path="/" exact component={Home} />
        <Route path="/notFound" component={NotFound} />
        <Redirect to="/notFound" />
      </Switch>
    </CartContext.Provider>
  );
}

export default App;
