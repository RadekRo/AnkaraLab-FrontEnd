import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

const Register = () => {

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email:"",
    password: "",
    confirmPassword: "",
    newsletter: true
  });

  // to be used by Gregory acc to corrected backEnd send
  // use formDataToSend for fetch insetad of formData
  // const { confirmPassword, ...formDataToSend } = formData;

  const [errors, setErrors] = useState({
    isPasswordEqual: true,
    isEmailOk: true,
    isRegistrationSuccess: true
  });

  const [isUserRegistered, setIsUserRegistered] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setFormData({...formData, [name]: value });
  };

  const emailValidation = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    return emailPattern.test(email);
  }

  const handleSubmit = (event) => {
    
    event.preventDefault();
    console.log(formData)

    const passwordEqual = formData.password === formData.confirmPassword;
    const emailOk = emailValidation(formData.email);

    setErrors({
      ...errors,
      isPasswordEqual: passwordEqual,
      isEmailOk: emailOk
    });

    if (passwordEqual && emailOk) {
      const storageUser = JSON.stringify(formData);
      sessionStorage.setItem("User", storageUser);

      fetch('https://localhost:7162/api/client/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(response => {
        if (response.ok) {
          setIsUserRegistered(true);
         // return response.json();
        } else {
          setErrors({
            ...errors,
            isRegistrationSuccess: false
          });
        }})
      .catch(error => {
        setErrors({
          ...errors,
          isRegistrationSuccess: false
        });
        console.error('Wystąpił błąd:', error);
      });
    };
  };
    
  const renderRegisteredUserInfo = () => (
    <div className="Register border rounded shadow bg-success text-white mt-4 p-3">
      <h4>Zarejestrowano!</h4>
      <div>Możesz się teraz <Link to="/login" className='text-warning text-decoration-none'><strong>zalogować</strong></Link>.</div>
    </div>
  );

  const renderRegistrationForm = () => (
    <div className="Register border rounded shadow bg-light mt-4 p-3">
        <form className='none' onSubmit={handleSubmit}>
          <h3>Rejstracja użytkownika</h3>
          { !errors.isRegistrationSuccess && (
            <div className="bg-danger text-white mt-1 mb-1 p-2 rounded">Błąd transferu danych!<br/>Spróbuj ponownie później...<br/>Przepraszamy!</div>
          )}
          <div>
            <Form.Group controlId="Name" className='mb-2'>
              <Form.Label>Imię:</Form.Label>
              <Form.Control 
                type="text"
                name="name" 
                placeholder="Podaj swoje imię" 
                onChange={handleChange}
                required />
            </Form.Group>
            <Form.Group controlId="Surname" className='mb-2'>
              <Form.Label>Nazwisko:</Form.Label>
              <Form.Control 
                type="text"
                name="surname" 
                placeholder="Podaj swoje Nazwisko" 
                onChange={handleChange}
                required />
            </Form.Group>
          </div>
          <div>
            <Form.Group controlId="Email" className='mb-2'>
              <Form.Label>Email:</Form.Label>
              <Form.Control 
                type="text"
                name="email" 
                placeholder="Podaj email" 
                onChange={handleChange}
                required />
              </Form.Group>
          </div>
        { !errors.isEmailOk && (
          <div className="bg-warning mt-1 mb-1 p-2 rounded">Błędny adres email!</div>
        )}
          <div>
            <Form.Group controlId="Password" className='mb-2'>
              <Form.Label>Hasło:</Form.Label>
              <Form.Control 
                type="password"
                name="password" 
                placeholder="Podaj swoje hasło" 
                onChange={handleChange}
                required />
              </Form.Group>
          </div>
          <div>
            <Form.Group controlId="ConfirmPassword" className='mb-2'>
              <Form.Label>Powtórz hasło:</Form.Label>
              <Form.Control 
                type="password"
                name="confirmPassword" 
                placeholder="Potwierdź hasło" 
                onChange={handleChange}
                required />
              </Form.Group>
          </div>
        { !errors.isPasswordEqual && (
          <div className="bg-warning mt-1 mb-1 p-2 rounded">Błędnie powtórzone hasło!</div>
        )}
          <div className="d-flex flex-column align-items-center">
            <label>Newsletter</label>
            <select className="form-select option-select mt-2" name='newsletter' value={formData.newsletter} onChange={handleChange}>
              <option value={true}>Tak</option>
              <option value={false}>Nie</option>
            </select>
          </div>
          <button className="btn btn-success mt-4" type="submit">Rejestruj</button>
        </form>
    </div>
  );

  return (
      <div>
        { isUserRegistered ? renderRegisteredUserInfo() : renderRegistrationForm() }
      </div>
  );
};

export default Register;