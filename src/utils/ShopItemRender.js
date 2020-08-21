import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import CartContext from "../contexts/CartContext";

function ShopItemRender({ shopItem, match, history }) {
  const cart = useContext(CartContext).setShoppingCart;
  const addToCart = item => {
    cart(item);
    toast(`${item.name} added to cart`, {
      autoClose: 1500,
      position: toast.POSITION.TOP_LEFT
    });
  };
  return (
    <div className="shop-container">
      <header className="shop-header">
        <h1>{shopItem.title}</h1>
      </header>
      <div className="shop-render">
        {shopItem.items.map(item => (
          <div className="shop-item" key={item.id}>
            <img
              src={item.imageUrl}
              alt={item.name}
              onClick={() => {
                history.push(`${match.url}/${item.id}`);
              }}
            />

            <div className="shop-icons top-icons left-icons">
              <i className="fa fa-heart-o"></i>
            </div>
            <div className="shop-icons top-icons right-icons">
              <i
                className="fa fa-shopping-cart"
                onClick={() => addToCart(item)}
              ></i>
            </div>

            <div className="shop-icons bottom-icons">
              <p>{item.price}e</p>
              <p className="bottom-name">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default withRouter(ShopItemRender);
