import React, { useContext } from "react";
import { toast } from "react-toastify";
import CartContext from "../contexts/CartContext";

function CartItem() {
  const cart = useContext(CartContext).shoppingCart;
  const setShoppingCart = useContext(CartContext).setShoppingCart;
  const removeCart = useContext(CartContext).removeCart;

  const cartRemove = c => {
    removeCart(c);
    toast(`${c.name} removed from cart`, {
      autoClose: 1500,
      position: toast.POSITION.TOP_LEFT
    });
  };
  return cart.map(c => (
    <div className="cart-item" key={c.id}>
      <div className="cart-list img">
        <img src={c.imageUrl} alt={c.name} />
      </div>

      <div className="cart-list price">{`${c.price}/pc`}</div>

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

      <div className="cart-list price">{(c.price * c.count).toFixed(2)}</div>

      <button className="cartRemove" onClick={() => cartRemove(c)}>
        x
      </button>
    </div>
  ));
}

export default CartItem;
