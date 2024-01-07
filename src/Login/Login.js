import { useState } from "react";
import './Login.css';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [loginAccepted, setLoginAccepted] = useState(' ');

  const handleChange = event => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(sessionStorage.getItem('User'));
    console.log(storedUser)
    if (storedUser) {
      loginData.email === storedUser.email && 
      loginData.password === storedUser.password ?
      setLoginAccepted(true) : setLoginAccepted(false)
    }
  };

  loginAccepted === true && console.log("Zalogowano pomyślnie");

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
        { (!loginAccepted) && (
        <div className="d-flex align-items-center justify-content-center mt-2">
          <p className="bg-danger text-white ps-4 pe-4 pt-2 pb-2"><span className="text-warning">Błędny email lub hasło.</span><br/>Spróbuj ponownie lub zarejestruj się!</p>
        </div>
        )}
        <button type="submit" className="btn btn-success">Login</button>
      </form>
    </div>
  );
};
export default Login;
