import React, { useState } from 'react';
import axios from 'axios';
import "./ContactForm.css";
const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:5000/send_email', { email, subject, message })
      .then(response => {
        console.log(response.data);
        alert('Email sent successfully');
      })
      .catch(error => {
        console.log(error);
        alert('Error sending email');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label class="form-label">
        Email:
        <input type="email" class="form-input" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label class="form-label">
        Subject:
        <input type="text" class="form-input" value={subject} onChange={e => setSubject(e.target.value)} />
      </label>
      <div class="form-message">
        <label class="message-label">
          Message:
        </label>
        <textarea class="message-input" value={message} onChange={e => setMessage(e.target.value)} />
      </div>      
      <button class="form-button" type="submit">Submit</button>
    </form>
  );
}
export default ContactForm;