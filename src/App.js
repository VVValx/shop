import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Cart from "./components/cart/Cart";
import Hats from "./components/hats/Hats";
import Home from "./components/home/Home";
import TopMenu from "./components/menu/TopMenu";
import NotFound from "./components/NotFound";
import CartContext from "./contexts/CartContext";
import HatsDetail from "./components/hats/HatsDetail";
import Hoodies from "./components/hoodies/Hoodies";
import Sneakers from "./components/sneakers/Sneakers";
import Womens from "./components/womens/Womens";
import Mens from "./components/mens/Mens";
import Register from "./components/userAuth/Register";
import "./App.css";

function App() {
  const myCart = JSON.parse(localStorage.getItem("myCart"));
  const [shoppingCart, setCart] = useState(myCart || []);

  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

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
      <ToastContainer />
      <TopMenu />
      <Switch>
        <Route path="/cart" exact component={Cart} />
        <Route path="/register" exact component={Register} />
        <Route path="/mens" exact component={Mens} />
        <Route path="/womens" exact component={Womens} />
        <Route path="/sneakers" exact component={Sneakers} />
        <Route path="/hoodies" exact component={Hoodies} />
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
