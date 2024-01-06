import { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = () => {
    const storedUser = sessionStorage.getItem('User');
    if (storedUser) {
      const userData = JSON.parse(storedUser);

      if (
        loginData.email === userData.email &&
        loginData.password === userData.password
      ) {
        alert('Login successful!');
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } else {
      alert('User not found. Please register first.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form id="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={loginData.email}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
