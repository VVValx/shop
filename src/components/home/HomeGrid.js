import React from "react";
import { withRouter } from "react-router-dom";

function HomeGrid({ clothing, history, match }) {
  return clothing.map(c => (
    <div
      className={`shop ${c.title}`}
      key={c.id}
      onClick={() => history.push(`${match.url}${c.title}`)}
    >
      <img src={c.img} alt={c.title} />
      <div className="shop-title">
        <h2>{c.title.toUpperCase()}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  ));
}

export default withRouter(HomeGrid);
