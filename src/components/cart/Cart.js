import React, { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import "./Cart.css";
import CartItem from "../../utils/CartItem";

function Cart() {
  const cart = useContext(CartContext).shoppingCart;

  return (
    <div className="cart-container">
      {cart.length < 1 ? (
        <header className="shop-header">
          <h1>You have no items in your cart</h1>
        </header>
      ) : (
        <CartItem />
      )}
    </div>
  );
}

export default Cart;
