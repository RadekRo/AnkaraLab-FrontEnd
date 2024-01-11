import { useState } from "react";
import './Login.css';
import { Form } from "react-bootstrap";

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
    if (storedUser) {
      loginData.email === storedUser.email && 
      loginData.password === storedUser.password ?
      setLoginAccepted(true) : setLoginAccepted(false);
    }
    else {
      setLoginAccepted(false);
    }
  };

  loginAccepted === true && console.log("Zalogowano pomyślnie");

  return (
    <div>
      <div className="bg-info p-2 mb-2"> Login</div>
      <div className="Login">
      <form id="loginForm" onSubmit={handleSubmit}>
       
        <Form.Group controlId="login">
                    <Form.Label>Login:</Form.Label>
                    <Form.Control 
                    type="text"
                    name="login" 
                    placeholder="Podaj swój email" 
                    onChange={handleChange}
                    required />
                </Form.Group>
        <br />
       
        <Form.Group controlId="password">
                    <Form.Label>Hasło:</Form.Label>
                    <Form.Control 
                    type="password"
                    name="password" 
                    placeholder="Podaj swoje hasło" 
                    onChange={handleChange}
                    required />
                </Form.Group>
        <br />
        <br />
        { (!loginAccepted) && (
        <div className="d-flex align-items-center justify-content-center mt-2">
          <p className="bg-danger text-white ps-4 pe-4 pt-2 pb-2"><span className="text-warning">Błędny email lub hasło.</span><br/>Spróbuj ponownie lub zarejestruj się!</p>
        </div>
        )}
        <button type="submit" className="btn btn-success">Szalom</button>
      </form>
      </div>
    </div>
  );
};
export default Login;
