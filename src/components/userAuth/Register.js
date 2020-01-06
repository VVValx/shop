import React, { useState } from "react";
import { toast } from "react-toastify";
import Joi from "joi-browser";
import Input from "../../utils/Input";
import "./userAuth.css";

function Register() {
  const [data, setData] = useState({
    name: "",
    username: "",
    address: "",
    password: "",
    email: ""
  });

  const [error, setError] = useState({
    name: "",
    username: "",
    address: "",
    password: "",
    email: ""
  });

  const schema = {
    name: Joi.string().required(),
    username: Joi.string().required(),
    address: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string()
      .email()
      .required()
  };

  const handleInput = ({ name, value }) => {
    const obj = { [name]: value };
    const mySchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, mySchema, { abortEarly: true });

    return error ? error.details[0].message : null;
  };

  const onChange = ({ target: input }) => {
    const newData = { ...data };
    const errorMessage = handleInput(input);
    const error = {};
    if (errorMessage) error[input.name] = errorMessage;
    else delete error[input.name];

    newData[input.name] = input.value;
    setData(newData);
    setError(error);
  };

  const validateForm = () => {
    const { error } = Joi.validate(data, schema, { abortEarly: false });
    const errors = {};

    if (!error) return null;

    for (let items of error.details) {
      errors[items.path[0]] = items.message;
    }

    return errors;
  };

  const onSubmit = e => {
    e.preventDefault();
    const error = validateForm();

    if (error) {
      setError(error);
      return;
    }

    toast.success("Account created successfully", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000
    });
  };

  return (
    <div className="form-container">
      <header className="form-header">
        <h1>Signup</h1>
      </header>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          name="name"
          value={data.name}
          onChange={onChange}
          error={error}
        />

        <Input
          type="text"
          name="username"
          value={data.username}
          onChange={onChange}
          error={error}
        />

        <Input
          type="address"
          name="address"
          value={data.address}
          onChange={onChange}
          error={error}
        />

        <Input
          type="password"
          name="password"
          value={data.password}
          onChange={onChange}
          error={error}
        />

        <Input
          type="text"
          name="email"
          value={data.email}
          onChange={onChange}
          error={error}
        />

        <div className="form-input">
          <button>Create Account</button>
        </div>
      </form>
    </div>
  );
}
export default Register;
