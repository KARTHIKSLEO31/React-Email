import React, { useState } from 'react';
import axios from 'axios';
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
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        Subject:
        <input type="text" value={subject} onChange={e => setSubject(e.target.value)} />
      </label>
      <label>
        Message:
        <textarea value={message} onChange={e => setMessage(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
export default ContactForm;