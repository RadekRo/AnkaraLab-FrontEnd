import 'bootstrap/dist/css/bootstrap.min.css';
import { saveAs } from 'file-saver';
import { useState } from 'react';
import { Form } from 'react-bootstrap';

const Register = () => {

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email:"",
    password: "",
    confirmPassword: "",
    newsletter: "true"
  });

  console.log(formData);

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value });
  };

  const handleSubmit = () => {
    const storageUser = JSON.stringify(formData);
    sessionStorage.setItem("User", storageUser);
    const blob = new Blob([storageUser], { type: 'application/json' });
    saveAs(blob, 'user_data.json');
  };
    
  return (
      <form className='none' onSubmit={handleSubmit}>
        
        <div>
        <div className="bg-info p-2 mb-2">Register</div>

        <Form.Group controlId="Name">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control 
                    type="text"
                    name="name" 
                    placeholder="Podaj swoje imię" 
                    onChange={handleChange}
                    required />
                </Form.Group>
          
          <Form.Group controlId="Surname">
                    <Form.Label>Surname:</Form.Label>
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
        <div>
          
          <Form.Group controlId="Password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control 
                    type="text"
                    name="password" 
                    placeholder="Podaj swoje hasło" 
                    onChange={handleChange}
                    required />
                </Form.Group>
        </div>
        <div>
          
          <Form.Group controlId="Password">
                    <Form.Label>Confirm Password:</Form.Label>
                    <Form.Control 
                    type="text"
                    name="confirmPassword" 
                    placeholder="Potwierdź hasło" 
                    onChange={handleChange}
                    required />
                </Form.Group>
        </div>
        <div>
          <label>Newsletter</label>
          <select className="form-select" name='newsletter' value={formData.newsletter} onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button className="btn btn-success mt-2" type="submit">Register</button>
      </form>
  );
};
export default Register;