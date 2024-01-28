import React from 'react';
import { Form } from 'react-bootstrap';

const LoginForm = ({ handleChange, handleSubmit, loginAccepted }) => {
    return (
    <div className="Register border rounded shadow bg-light mt-4 p-3">
        <form className='none' onSubmit={handleSubmit}>
            <h3>Logowanie</h3>
            <div>
                <Form.Group controlId="email" className='mb-2'>
                <Form.Label>Login:</Form.Label>
                <Form.Control 
                    type="text"
                    name="email" 
                    placeholder="Podaj swój email" 
                    onChange={handleChange}
                    required />
                </Form.Group>
                <Form.Group controlId="password">
                <Form.Label>Hasło:</Form.Label>
                <Form.Control 
                    type="password"
                    name="password" 
                    placeholder="Podaj swoje hasło" 
                    onChange={handleChange}
                    required />
                </Form.Group>
            </div>
      
    { (!loginAccepted) && (
        <div className="d-flex align-items-center justify-content-center mt-2">
            <p className="bg-danger text-white ps-4 pe-4 pt-2 pb-2"><span className="text-warning">Błędny email lub hasło.</span><br/>Spróbuj ponownie lub zarejestruj się!</p>
        </div>
    )}
        <button type="submit" className="btn btn-success mt-4">Loguj</button>
        </form>
    </div>
    )
};
export default LoginForm;