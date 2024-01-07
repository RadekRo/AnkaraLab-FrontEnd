import 'bootstrap/dist/css/bootstrap.min.css';
import { saveAs } from 'file-saver';
import { useState } from 'react';

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
          <label>Name</label>
          <input type='text' name='name' value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Surname</label>
          <input type='text' name='surname' value={formData.surname} onChange={handleChange} />
        </div>
        <div>
          <label>Email</label>
          <input type='text' name='email' value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Password</label>
          <input type='password' name='password' value={formData.password} onChange={handleChange} />
        </div>
        <div>
          <label>Confirm password</label>
          <input type='password' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} />
        </div>
        <div>
          <label>Newsletter</label>
          <select name='newsletter' value={formData.newsletter} onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
  );
};
export default Register;