import React from "react";

function Input({ type, name, value, onChange }) {
  return (
    <div className="form-input">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={name}
      />
    </div>
  );
}

export default Input;
