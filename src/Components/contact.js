import "./contact.css";
import react, { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'

function ContactForm() {
    useEffect(() => {
        Aos.init ({duration: 1000});
      }, [])
    return(
        <div>
            <div className="contact-box" data-aos = "fade-up">
                <div><h2 className="contact-header">CONTACT</h2></div>
                <div className="contact-body">Feel free to contact me by submitting the form below and I will get back to you as soon as possible.</div>

                <div className="details">
                    <h3>Name</h3>
                    <input type="text-box" placeholder="Enter Your Name " size={60} className="custom-input"/>
                </div>

                <div className="details">
                    <h3>Email</h3>
                    <input type="email" placeholder="Enter Your Email" size={60} className="custom-input"/>
                </div>

                <div className="details">
                    <h3>Message</h3>
                    <input type="text-box" placeholder="Enter Your Message Here" size={60} className="custom-input"/>
                </div>

                <button className="send-button">Send</button>
                <img src="./send.png" className="send-icon"></img>

            </div>
        </div>
    )
    
};

export default ContactForm;