import React from "react";
import "./userAuth.css";

function Register() {
  return (
    <div className="form-container">
      <header className="form-header">
        <h1>Signup</h1>
      </header>
      <form>
        <div className="form-input">
          <input type="text" name="name" placeholder="name" />
        </div>

        <div className="form-input">
          <input type="text" name="username" placeholder="username" />
        </div>

        <div className="form-input">
          <input type="text" name="address" placeholder="address" />
        </div>

        <div className="form-input">
          <input type="password" name="password" placeholder="password" />
        </div>

        <div className="form-input">
          <input type="text" name="email" placeholder="email" />
        </div>

        <div className="form-input">
          <button>Create Account</button>
        </div>
      </form>
    </div>
  );
}
export default Register;
