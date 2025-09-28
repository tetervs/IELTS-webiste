import React from 'react'
import './Footer.css'
import mail from '../Assets/email-envelope.svg'
import call from '../Assets/phone-svgrepo-com.svg'
import location from '../Assets/location-sign.svg'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-content">
        <div className="footer-section">
          <h3>IELTS Excellence</h3>
          <p>Your trusted partner in IELTS preparation. Achieve your dream band score with our expert guidance and AI-powered platform.</p>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="contact-item">
            <img src={call} alt="Phone" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="contact-item">
            <img src={mail} alt="Email" />
            <span>hello@ieltsexcellence.com</span>
          </div>
          <div className="contact-item">
            <img src={location} alt="Location" />
            <span>123 Education Street, Learning City</span>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#mock-tests">Mock Tests</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#refund">Refund Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 IELTS Excellence. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer