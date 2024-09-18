import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="Contact1">
      <h1>Contact Us</h1>
      <form onSubmit={(e) => { e.preventDefault(); navigate('/notfound'); }}>
        <div className='Name1'>
          <label>Name:</label>
          <input type="text" />
        </div>
        <div className='Email1'>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div className='Message1'>
          <label>Message:</label>
          <textarea />
        </div>
        <div className='SubmitContainer'>
          <button type="submit" className='Submit'>SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;