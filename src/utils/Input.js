import React from "react";

function Input({ type, name, value, onChange, error }) {
  return (
    <div className="form-input">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={name}
      />

      {error[name] && <p className="error">{error[name]}</p>}
    </div>
  );
}

export default Input;
