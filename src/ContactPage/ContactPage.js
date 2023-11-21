import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Dane formularza:', e.target.name.value, e.target.email.value, e.target.message.value);
    };
  
    return (
      <div className="contact-page">
        <h1>Kontakt</h1>
        <div className="contact-info">
          <p>Grupa Ankara.pl</p>
          <p>ul. Partyzantów 49</p>
          <p>80-254 Gdańsk</p>
          <p>tel.: 58 341 35 16</p>
          <p>tel.: 505 364 723</p>
          <p>biuro@ankara.pl</p>
        </div>
        <div className="contact-hours">
          <p>Czynne:</p>
          <p>PN-PT: 9.00-18.00</p>
          <p>SOB: 9.00-12.00</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Imię:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <br />
          <label>
            Wiadomość:
            <textarea name="message" />
          </label>
          <br />
          <button type="submit">Skontaktuj się z nami!!!</button>
        </form>
      </div>
    );
  };
  
  export default ContactPage;