import { useState } from 'react';
import './contact.scss';

const Contact = () => {

  const [message, setMessage] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage("Hello")
  }


  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/post/2.jpeg" alt="" />
      </div>
      <div className="right">
        <h3>Contact</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea  placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks. I'will reply ASAP! :)</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;