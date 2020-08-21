import React from "react";

function RenderIcon({ className, spanClass = null, label = null }) {
  return (
    <React.Fragment>
      <i className={className}></i>
      <span className={spanClass}>{label}</span>
    </React.Fragment>
  );
}

export default RenderIcon;
