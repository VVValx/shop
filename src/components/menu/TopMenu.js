import React, { useContext } from "react";
import RenderLink from "./RenderLink";
import RenderIcon from "./RenderIcon";
import CartContext from "../../contexts/CartContext";
import Button from "../../utils/RenderButton";
import "./TopMenu.css";
import CartItem from "../../utils/CartItem";

function TopMenu() {
  const cart = useContext(CartContext).shoppingCart;

  const total = () => {
    return cart.map(c => c.count).reduce((t, a) => t + a, 0);
  };

  return (
    <nav className="topMenu">
      <ul className="topMenu-left">
        <RenderLink to="/">
          <RenderIcon className="fa fa-home" />
        </RenderLink>
        <li className="shop-li">
          <RenderLink label="Shop" to="/shop" />

          <div className="shop-dropdown">
            <RenderLink label="Hats" to="/hats" />
            <RenderLink label="Hoodies" to="/hoodies" />
            <RenderLink label="Sneakers" to="/sneakers" />
            <RenderLink label="Womens" to="/womens" />
            <RenderLink label="Mens" to="/mens" />
          </div>
        </li>
      </ul>

      <ul className="topMenu-right">
        <RenderLink to="/register">
          <Button className="btn btn-round btn-red" label="Register" />
        </RenderLink>

        <RenderLink to="/login">
          <Button className="btn btn-round btn-green" label="Login" />
        </RenderLink>

        <li className="icon">
          <RenderLink to="/favourites">
            <RenderIcon
              label={0}
              className="fa fa-heart"
              spanClass="icon-count"
            />
          </RenderLink>
        </li>

        <li className="icon">
          <RenderLink to="/cart">
            <RenderIcon
              className="fa fa-shopping-cart"
              spanClass="icon-count"
              label={total()}
            />
          </RenderLink>

          <div className="cart-menu">
            <CartItem />
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default TopMenu;
