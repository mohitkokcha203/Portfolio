import React from "react";
import "./Contact.css";
import { MdContacts } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import Social from "../../Components/Social-Mesia/Social";
import { Bounce } from "react-awesome-reveal";

function Contact() {
  return (
    <div className="contact" id="contact">
      <Bounce duration={1000} delay={50}>
        <div className="head">
          <MdContacts className="icon" />
          <h2 className="heading">
            Contact <span className="st2">Me</span>
          </h2>
        </div>
      </Bounce>

      <div className="contact-box">
        <div className="left-part">
          <h2 className="heading">
            Mohit Kumar Kokcha <span className="st06">Portfolio</span>
          </h2>
          <p className="st03">
            Thank you for visiting my portfolio website. Feel Free to Reach Out!
          </p>
        </div>
        <div className="middle-part">
          <Social />
        </div>
        <div className="right-part">
          <div className="email">
            <AiOutlineMail className="icon" />
            <h4 className="heading"><a className="email-a" href='mailto:mohitkokcha203@gmail.com'>: mohitkokcha203@gmail.com </a></h4>
          </div>
          <div className="phone">
            <BsTelephone className="icon" />
            <h4 className="heading">: +91 8058240251</h4>
          </div>
          <div className="location">
            <SlLocationPin className="icon" />
            <h4 className="heading">: Jhunjhunu, (Raj.), India</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
