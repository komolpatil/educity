import React from 'react'
import './Contact.css'
import Msg_icon from '../../assets/msg-icon.png'
import Mail_icon from '../../assets/mail-icon.png'
import Phone_icon from '../../assets/phone-icon.png'
import Location_icon from '../../assets/location-icon.png'
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "f6ad0841-13d7-44fb-9233-1faa5d3ff93e");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={Msg_icon} alt=''/></h3>
            <p>Feel free to reach out through contact from or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li><img src={Mail_icon} alt=''/>kpatil426@gmail.com</li>
                <li><img src={Phone_icon} alt=''/>+912356782419</li>
                <li><img src={Location_icon} alt=''/>Sangli,Maharashtra</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
                <label>Enter your message here</label>
                <textarea name="message" rows='6' placeholder='Enter your message' required></textarea>
                <button type='submit' className='button dark-button'>Submit</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact