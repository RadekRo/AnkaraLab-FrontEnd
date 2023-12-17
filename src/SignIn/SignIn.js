import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class SignIn extends Component {
  state = {
    name: "",
    surname: "",
    login: "",
    password: "",
    newsletter: "true"
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  //   alert(`${this.state.username}`);
  //   event.preventDefault();

    handleSubmit = async event => {
      event.preventDefault();
        try {
          console.log(this.state)
        const response = await fetch('https://localhost:7162/api/client/newClient', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // Ustawienie typu zawartości jako JSON
          },
          body: JSON.stringify(this.state), // Przesłanie danych z formularza w formacie JSON
        });
    
        if (response.ok) {
          const data = await response.json();
          // Obsługa odpowiedzi z serwera
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
          <label>Login</label>
          <input type='text' name='login' value={this.state.login} onChange={this.handleChange} />
        </div>
        <div>
          <label>Password</label>
          <input type='password' name='password' value={this.state.confirmationWord} onChange={this.handleChange} />
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