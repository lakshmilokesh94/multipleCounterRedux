import React from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  const onSubmit = e => {
    e.preventDefault();
    history.push("/home");
  };

  return (
    <form onSubmit={onSubmit}>
      <p>Name </p>
      <input type="text" />
      <p> Password </p>
      <input type="password" />
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
