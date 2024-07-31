import React from 'react';
import '../Styles/Contact.css';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("mjkbypgq"); // visit Formspree and put your key here
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
