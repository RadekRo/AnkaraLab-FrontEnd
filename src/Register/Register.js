import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



class Register extends Component {

  state = {
    name: "",
    surname: "",
    email:"",
    password: "",
    confirmPassword: "",
    newsletter: "true"
  };


handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

handleSubmit = () => {
    const storageUser = JSON.stringify(this.state);
    sessionStorage.setItem("User", storageUser);
    console.log(storageUser);
};
    
render () {
        return (
      <form className='none' onSubmit={this.handleSubmit}>
        <div>
          <label>Name</label>
          <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
        </div>
        <div>
          <label>Surname</label>
          <input type='text' name='surname' value={this.state.surname} onChange={this.handleChange} />
        </div>
        <div>
          <label>Email</label>
          <input type='text' name='email' value={this.state.email} onChange={this.handleChange} />
        </div>
        <div>
          <label>Password</label>
          <input type='password' name='password' value={this.state.password} onChange={this.handleChange} />
        </div>
        <div>
          <label>Confirm password</label>
          <input type='password' name='confirmPassword' value={this.state.confirmPassword} onChange={this.handleChange} />
        </div>
        <div>
          <label>Newsletter</label>
          <select name='newsletter' value={this.state.newsletter} onChange={this.handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
  );
    }
}

console.log(JSON.parse(sessionStorage.getItem("User")));

export default Register;