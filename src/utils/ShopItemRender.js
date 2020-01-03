import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import CartContext from "../contexts/CartContext";
function ShopItemRender({ shopItem, match, history }) {
  const cart = useContext(CartContext).setShoppingCart;
  const addToCart = item => {
    cart(item);
  };
  return (
    <div className="shop-container">
      {shopItem.map(item => (
        <div className="shop-item" key={item.id}>
          <img
            src={item.img}
            alt={item.title}
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

          <div className="shop-icons bottom-icons">{item.title}</div>
        </div>
      ))}
    </div>
  );
}
export default withRouter(ShopItemRender);
