import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class SignIn extends Component {
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

    handleSubmit = async event => {
      event.preventDefault();
        try {
          console.log(this.state)
        const response = await fetch('https://localhost:7162/api/client/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.state),
        });
    
        if (response.ok) {
          const data = await response.json();
          
          console.log('Dane przesłane pomyślnie:', data);
        } else {
          console.error('Wystąpił błąd podczas przesyłania danych.');
        }
      } catch (error) {
        console.error('Wystąpił błąd:', error);
      }
    };
    


  render() {
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

export default SignIn;