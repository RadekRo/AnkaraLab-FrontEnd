import { useState } from "react";
import users from "../TempData/LoginData";

const Login = () => {
  const getUserById = (id) => {
    return users.find((user) => user.id === id);
  };
  const currentUser = getUserById(1);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === currentUser.login && password === currentUser.password) {
      console.log("Zalogowałeś się!");
    } else {
      console.log("Nie zalogowałeś się!");
    }
  };
  const changeUsername = (event) => {
    setUsername(event.target.value);
    console.log(event.target.value);
  };
  const changePassword = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <h2>Login</h2>
      <form id="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          onChange={changeUsername}
          type="text"
          id="username"
          name="username"
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          onChange={changePassword}
          type="password"
          id="password"
          name="password"
          required
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
export default Login;
