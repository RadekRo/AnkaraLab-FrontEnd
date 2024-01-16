import { useEffect, useState } from "react";
import './Login.css';
import { Form } from "react-bootstrap";
import UserDiscount from "../UserDiscount/UserDiscount";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [loginAccepted, setLoginAccepted] = useState(true);
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [userName, setUserName] = useState();
  const [userId, setUserId] = useState();
  const [passedData, setPassedData] = useState({
    userId: "",
    userName: "",
    isUserLogged: false

  })

  const handleChange = event => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://localhost:7162/api/client/login', {
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
      const [, payload] = data.split('.');
      const decodedPayload = JSON.parse(atob(payload));
      const userId = decodedPayload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
      const userName = decodedPayload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
      setUserName(userName);
      setUserId(userId);
      setPassedData({ userId: userId,
      userName: userName,
      isUserLogged: isUserLogged})
      console.log(passedData)
    })
    
    .catch(error => {
      setLoginAccepted(false);
      //console.error('Wystąpił błąd:', error);
      // console.clear(); // wspaniałe rozwiązanie!
    });
  };

  const renderLoginForm = () => (
    <div className="Register border rounded shadow bg-light mt-4 p-3">
      <form className='none' onSubmit={handleSubmit}>
        <h3>Logowanie</h3>
        <div>
          <Form.Group controlId="email" className='mb-2'>
            <Form.Label>Login:</Form.Label>
            <Form.Control 
              type="text"
              name="email" 
              placeholder="Podaj swój email" 
              onChange={handleChange}
              required />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Hasło:</Form.Label>
            <Form.Control 
              type="password"
              name="password" 
              placeholder="Podaj swoje hasło" 
              onChange={handleChange}
              required />
          </Form.Group>
        </div>
        
        { (!loginAccepted) && (
        <div className="d-flex align-items-center justify-content-center mt-2">
          <p className="bg-danger text-white ps-4 pe-4 pt-2 pb-2"><span className="text-warning">Błędny email lub hasło.</span><br/>Spróbuj ponownie lub zarejestruj się!</p>
        </div>
        )}
        <button type="submit" className="btn btn-success mt-4">Loguj</button>
      </form>
    </div>
  );

  const renderUserInfo = () => (
    <div className="Register border rounded shadow bg-success text-white mt-4 p-3">
        <h4>Zalogowano!</h4>
        {userName} - witaj!
    </div>
  )

  return (
    <div>
      { isUserLogged ? renderUserInfo() : renderLoginForm() }
      <UserDiscount userId={passedData.userId} userName={passedData.userName} isUserLogged={passedData.isUserLogged}/>
    </div>
  );
};
export default Login;
