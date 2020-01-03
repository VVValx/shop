import React from "react";

function HatsDetail({ match }) {
  return <div>{match.params.itemId}</div>;
}

export default HatsDetail;
