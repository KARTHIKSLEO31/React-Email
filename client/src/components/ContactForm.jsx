import React, { useState } from 'react';
import axios from 'axios';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3001/send-email', { name, email, message })
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
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
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