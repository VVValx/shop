import React from "react";
import { Link } from "react-router-dom";

function RenderLink({ label, to, children }) {
  return (
    <Link className="link menu" to={to}>
      {label ? label : children}
    </Link>
  );
}

export default RenderLink;
