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

    if (formData.password === formData.confirmPassword) { 
      setErrors({...errors, isPasswordEqual: true});
      const storageUser = JSON.stringify(formData);
      sessionStorage.setItem("User", storageUser);
    }
    else {
      setErrors({...errors, isPasswordEqual: false});
    }
    setErrors({...errors, isEmailOk: emailValidation(formData.email)});

  };
    
  return (
      <div>
        <div className="bg-info p-2 mb-2">Rejestracja użytkownika</div>
        <div className="Register">
          <form className='none' onSubmit={handleSubmit}>
          <div>
          <Form.Group controlId="Name">
                    <Form.Label>Imię:</Form.Label>
                    <Form.Control 
                    type="text"
                    name="name" 
                    placeholder="Podaj swoje imię" 
                    onChange={handleChange}
                    required />
                </Form.Group>
          
          <Form.Group controlId="Surname">
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
         
          <Form.Group controlId="Email">
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
          
          <Form.Group controlId="Password">
                    <Form.Label>Dawaj hasło habibi:</Form.Label>
                    <Form.Control 
                    type="password"
                    name="password" 
                    placeholder="Podaj swoje hasło" 
                    onChange={handleChange}
                    required />
                </Form.Group>
        </div>
        <div>
          
          <Form.Group controlId="ConfirmPassword">
                    <Form.Label>Weźta powtórz hasło:</Form.Label>
                    <Form.Control 
                    type="password"
                    name="confirmPassword" 
                    placeholder="Potwierdź hasło" 
                    onChange={handleChange}
                    required />
                </Form.Group>
        </div>
        { !errors.isPasswordEqual && (
          <div className="bg-warning mt-1 mb-1 p-2 rounded">Błędna powtórka hasła ziomek! Skup się!</div>
        )}
        <div>
          <label>Newsletter</label>
          <select className="form-select" name='newsletter' value={formData.newsletter} onChange={handleChange}>
            <option value="true">Tak</option>
            <option value="false">Nie</option>
          </select>
        </div>
        <button className="btn btn-success mt-2" type="submit">Yalla!</button>
      </form>
      </div>
      </div>
  );
};
export default Register;