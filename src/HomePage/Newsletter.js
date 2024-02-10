import './Newsletter.css';
import React, { useState } from 'react';

const API_URL = 'https://localhost:7162/api/newsletter';

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

    console.log(JSON.stringify(email));

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email})
    })
        .then(response => {
            if (response.ok) {
                alert('You have been added to the newsletter');
            } else {
                alert('Error occured. Email not added to the newsletter');
            }
        })
        .catch(error => {
          console.error('Wystąpił błąd:', error);
        });
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