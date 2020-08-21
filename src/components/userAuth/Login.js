import React, { useState } from "react";
import { toast } from "react-toastify";
import Input from "../../utils/InputNoError";
import { googleAuth } from "../../firebase/firebase";

function Login({ history }) {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const login = { username: "Valentine", password: "Brown@1991" };

  const [error, setError] = useState({ message: "" });

  const onChange = ({ target: input }) => {
    const newData = { ...data };

    newData[input.name] = input.value;
    setError("");
    setData(newData);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const check =
      data.username === login.username && data.password === login.password;
    if (!check) {
      setError({ message: "Incorrect username or password" });
      return;
    }

    setError("");
    signin();
  };

  const signin = () => {
    history.push("/");
    toast.success("Login successful", {
      autoClose: 1500,
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="form-container">
      <header className="form-header">
        <h1>Login</h1>
      </header>

      <Input
        type="text"
        name="username"
        value={data.username}
        onChange={onChange}
      />

      <Input
        type="password"
        name="password"
        value={data.password}
        onChange={onChange}
      />

      <div className="form-input">
        {error && <p className="error">{error.message}</p>}
      </div>

      <div className="form-input">
        <button onClick={onSubmit}>Login</button>
      </div>

      <div className="form-input">
        <p>Or Sign In With:</p>
      </div>

      <div className="form-input">
        <button onClick={googleAuth}>Google</button>
      </div>
    </div>
  );
}

export default Login;
