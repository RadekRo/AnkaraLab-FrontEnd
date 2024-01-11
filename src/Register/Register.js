import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import './Register.css';

const Register = () => {

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email:"",
    password: "",
    confirmPassword: "",
    newsletter: "true"
  });
  const [errors, setErrors] = useState({
    isPasswordEqual: ' ',
    isEmailOk:' '
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value });
  };

  const emailValidation = (mail) => {return (/^[^\s@]+@[^\s@]+.[^\s@]+$/).test(mail)}

  const handleSubmit = (event) => {
    
    event.preventDefault();

  let passwordEqual = false;
  if (formData.password === formData.confirmPassword) {
    passwordEqual = true;
  }

  const emailOk = emailValidation(formData.email);

  setErrors({
    isPasswordEqual: passwordEqual,
    isEmailOk: emailOk
  });

  if (passwordEqual && emailOk) {
    const storageUser = JSON.stringify(formData);
    sessionStorage.setItem("User", storageUser);
  }

  console.log(errors.isPasswordEqual);
  console.log(errors);

  };
    
  return (
      <div>
        <div className="Register border rounded shadow bg-light mt-4 p-3">
          <form className='none' onSubmit={handleSubmit}>
          <h3>Rejstracja użytkownika</h3>
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
          <div className="bg-warning mt-1 mb-1 p-2 rounded">Co ty masz za adres mailowy??? Z Kambodży?</div>
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
            <option value="true">Tak</option>
            <option value="false">Nie</option>
          </select>
        </div>
        <button className="btn btn-success mt-4" type="submit">Rejestruj</button>
      </form>
      </div>
      </div>
  );
};
export default Register;