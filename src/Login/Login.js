import {  useState } from "react";
import UserDiscount from "../UserDiscount/UserDiscount";
import './Login.css';
import LoginForm from "./LoginForm";

const API_URL = 'https://localhost:7162/api/client/login';

const Login = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [userData, setUserData] = useState({ userId: "", userName: ""});
  const [loginAccepted, setLoginAccepted] = useState(true);
  const [isUserLogged, setIsUserLogged] = useState(false);

  const decodeJWT = (jwt) => {
    const [, payload] = jwt.split('.');
    const decodedPayload = JSON.parse(atob(payload));
    const userId = decodedPayload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
    const userName = decodedPayload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    return { userId, userName };
  }

  const handleChange = event => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(API_URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
})
    .then(response => {
        if (response.ok) {
            setIsUserLogged(true);
            return response.text();
        } else {
            setLoginAccepted(false);
            throw new Error('Login failed');
        }
    })

    .then(data => {
      const { userId, userName } = decodeJWT(data);
      setUserData({ userId, userName})
    })

    .catch(error => {
      setLoginAccepted(false);
      console.error('Wystąpił błąd:', error);
      console.clear(); // wspaniałe rozwiązanie!
    });
  };

  const renderUserInfo = () => {
    localStorage.setItem("User", JSON.stringify(userData));
    (
    <div className="Register border rounded shadow bg-success text-white mt-4 p-3">
        <h4>Zalogowano!</h4>
        {userData.userName} - witaj!
    </div>
  )};

  return (
    <div>
      { isUserLogged ? (
        <>
          { renderUserInfo() }
          <UserDiscount userId={userData.userId} userName={userData.userName} isUserLogged={userData.isUserLogged}/>
        </>
      ) : (
          <LoginForm handleChange={handleChange} handleSubmit={handleSubmit} loginAccepted={loginAccepted} />
      )}
    </div>
  );
};
export default Login;
