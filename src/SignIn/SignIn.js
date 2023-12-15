import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class SignIn extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         password: '',
         confirmationWord: '',
         clientName: '',
         surname: '',

      }
    }
    handleUsernameChange = (event) => {
        this.setState({username: event.target.value});
    }
    handlePasswordChange = (event) =>{
        this.setState({password: event.target.value});
    }
    handleConfirmationWordChange= (event) =>{
        this.setState({confirmationWord: event.target.value});
    }
    handleClientNameChange= (event) =>{
        this.setState({clientName: event.target.value});
    }
    handleSurnameChange= (event) =>{
        this.setState({surname: event.target.value});
    }


  render() {
    return (
    <form className='none'>
        <div>
            <label>Username</label>
            <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/>
        </div>
        <div> 
            <label>Password</label>
            <input type='text' value={this.state.password} onChange={this.handlePasswordChange}/>
        </div>
        <div>    
            <label>Confirm Password</label>
            <input type='text' value={this.state.confirmationWord} onChange={this.handleConfirmationWordChange}/>
        </div>
        <div>
            <label>Name</label>
            <input type='text' value={this.state.name} onChange={this.handleClientNameChange}/>
        </div>
        <div>
            <label>Surname</label>
            <input type='text' value={this.state.surname} onChange={this.handleSurnameChange}/>
        </div>
    </form>
    )
  }
}

export default SignIn