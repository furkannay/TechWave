import React, { useState } from 'react';
import './contactus.css';
import { MdPhone, MdMail, MdLocationOn } from 'react-icons/md';

const ContactUs = () => {
  const [phoneVisible, setPhoneVisible] = useState(false);
  const [mailVisible, setMailVisible] = useState(false);
  const [locationVisible, setLocationVisible] = useState(false);

  const handlePhoneClick = () => {
    setPhoneVisible(!phoneVisible);
  };

  const handleMailClick = () => {
    setMailVisible(!mailVisible);
  };

  const handleLocationClick = () => {
    setLocationVisible(!locationVisible);
  };

  window.addEventListener('resize', function() {
    const iframe = document.querySelector('.contact-info.location iframe');
    if (iframe) {
      const newHeight = iframe.clientWidth * 0.75; // Örnek olarak genişliğinin %75'i kadar yükseklik
      iframe.style.height = `${newHeight}px`;
    }
  });

  return (
    <div className="contact-us-container">
      <div className="contact-card">
        <MdPhone className="contact-icon" />
        <button className="contact-button" onClick={handlePhoneClick}>
          Call
        </button>
        {phoneVisible && (
          <div className="contact-info phone">
            Phone Number: +123456789
          </div>
        )}
      </div>

      <div className="contact-card">
        <MdLocationOn className="contact-icon" />
        <button className="contact-button" onClick={handleLocationClick}>
          Address
        </button>
        {locationVisible && (
          <div className="contact-info location">
            <iframe
              title="Google Map"
              width="100%"
              height="300px"
              frameBorder="0" // Çerçeve sınırlarını kaldırın
              style={{ border: 0 }} // Çerçeve stilini sıfırlayın
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7160.454402484644!2d74.67976685354499!3d42.853968927011536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb6c95311ea6b%3A0x7023946675e4c5a9!2sUluslararas%C4%B1%20Atat%C3%BCrk-Alatoo%20%C3%9Cniversitesi!5e0!3m2!1str!2skg!4v1713086973494!5m2!1str!2skg" 
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
      

      <div className="contact-card">
        <MdMail className="contact-icon" />
        <button className="contact-button" onClick={handleMailClick}>
          Send Mail
        </button>
        {mailVisible && (
          <div className="contact-info mail">
            Email Address: contact@example.com
          </div>
        )}
      </div>

      
    </div>
  );
};

export default ContactUs;
