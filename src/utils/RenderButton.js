import React from "react";

function RenderButton({ className, label, props }) {
  return (
    <button className={className} {...props}>
      {label}
    </button>
  );
}

export default RenderButton;
