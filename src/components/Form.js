import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './FormStyles.css';

const Form = () => {
  const form = useRef();
  const [alertMessage, setAlertMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_shoi6wk', 'template_s9qzyfe', form.current, 'Lo-AprMgfwVVp1FkF')
      .then((result) => {
        console.log(result.text);
        setAlertMessage("Message sent successfully!");
      })
      .catch((error) => {
        console.error(error);
        setAlertMessage("Message sending failed. Please try again.");
      });
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" className="btn" />
      </form>

      {/* Display the alert message */}
      {alertMessage && (
        <div className={`alert ${alertMessage.includes("failed") ? 'error' : ''}`}>
          {alertMessage}
        </div>
      )}
    </div>
  );
};

export default Form;

