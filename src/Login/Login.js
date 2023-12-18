import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {
  state = {
    login: "",
    password: "",
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

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
          <label>Login</label>
          <input type='text' name='login' value={this.state.login} onChange={this.handleChange} />
        </div>
        <div>
          <label>Password</label>
          <input type='password' name='password' value={this.state.confirmationWord} onChange={this.handleChange} />
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default Login;