import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext";
import "./TopMenu.css";

function TopMenu() {
  const cart = useContext(CartContext).shoppingCart;
  const removeCart = useContext(CartContext).removeCart;
  return (
    <nav className="topMenu">
      <ul className="topMenu-left">
        <li>
          <Link className="link menu" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link menu" to="/order">
            Shop
          </Link>
        </li>
      </ul>

      <ul className="topMenu-right">
        <li>
          <Link className="link menu" to="/register">
            <i className="fa fa-user-plus"></i>Signup
          </Link>
        </li>
        <li className="icon">
          <Link className="link menu" to="/favourites">
            <i className="fa fa-heart"></i>
            <span className="icon-count">0</span>
          </Link>
        </li>
        <li className="icon">
          <Link className="link menu" to="/cart">
            <i className="fa fa-shopping-cart"></i>
            <span className="icon-count">
              {cart.map(c => c.count).reduce((t, a) => t + a, 0)}
            </span>
          </Link>

          <div className="cart-menu">
            {cart.map(c => (
              <div className=" cart-menu-item" key={c.id}>
                <div className=" img">
                  <img src={c.imageUrl} alt={c.name} />
                </div>

                <div className=" price">{c.price}</div>

                <div className=" price">{(c.price * c.count).toFixed(2)}</div>
                <button
                  className="cart-menu-remove"
                  onClick={() => removeCart(c)}
                >
                  x
                </button>
              </div>
            ))}
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default TopMenu;
