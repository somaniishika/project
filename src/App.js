import React from 'react';
import './App.css';
import image from './images/speaker-image.jpg'

function Content() {
  return (
    <div className="container">
    <h1>Deep Dive In To</h1>
    <h1>Azure AI Studio</h1>

    <div className="info-section">
      <h2>1st August, 2024 | 7:30 PM - 8:30 PM</h2>
      <p>Online</p>
    </div>

    <div className="speaker-section">
      <img src={image} alt="Speaker" className="speaker-image"/>
      <div className="speaker-details">
        <h4>SARAVANAN GANESAN</h4>
        <p>Assistant Consultant - Ilot</p>
        <h6>Tata Consultancy Services</h6>

      </div>
    </div>

    <a href="https://reskilll.com/event/aiistudio" class="registration-link">Registration Link:https://reskilll.com/event/aiistudio</a>
  </div>
  );
}
export default Content;