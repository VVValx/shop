import React, { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import "./Cart.css";

function Cart() {
  const cart = useContext(CartContext).shoppingCart;
  const setShoppingCart = useContext(CartContext).setShoppingCart;
  const removeCart = useContext(CartContext).removeCart;

  return (
    <div className="cart-container">
      {cart.length < 1 ? (
        <header className="shop-header">
          <h1>You have no items in your cart</h1>
        </header>
      ) : (
        cart.map(c => (
          <div className="cart-item" key={c.id}>
            <div className="cart-list img">
              <img src={c.imageUrl} alt={c.name} />
            </div>

            <div className="cart-list price">{c.price}</div>

            <div className="cart-list count">
              <button
                disabled={c.count < 2 ? true : false}
                style={{
                  opacity: c.count < 2 ? 0.5 : 1,
                  cursor: c.count < 2 ? "not-allowed" : "pointer"
                }}
                onClick={() => setShoppingCart(c, -1)}
              >
                -
              </button>{" "}
              <span>{c.count}</span>{" "}
              <button onClick={() => setShoppingCart(c, 1)}>+</button>
            </div>

            <div className="cart-list price">
              {(c.price * c.count).toFixed(2)}
            </div>

            <button className="cartRemove" onClick={() => removeCart(c)}>
              x
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
