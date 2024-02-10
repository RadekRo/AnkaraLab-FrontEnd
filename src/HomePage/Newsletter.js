import './Newsletter.css';
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleNewsletter = () => {
    if (!email) {
      alert('Please enter your email');
      return;
    }

    if (!emailValidation(email)) {
      alert('Please enter a valid email address');
      return;
    }

    alert(email);
  };

  const emailValidation = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div className="d-flex align-items-center justify-content-center Newsletter rounded p-2 text-dark">
      Zapisz się do Newslettera: 
      <input 
        className='p-2 rounded border-0 bg-light ms-3 me-3' 
        placeholder='Twój e-mail' 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <button 
        className='btn btn-sm btn-dark' 
        onClick={handleNewsletter}
      >
        Zapisz
      </button>
    </div>
  );
};

export default Newsletter;