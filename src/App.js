import React from 'react';
import './app.css';

function AzureAIStudioDeepDive() {
  return (
    <div className="container">
      <h1>Deep Dive In To</h1>
      <h1>Azure AI Studio</h1>

      <div className="info-section">
        <h2>1st August, 2024 | 7:30 PM - 8:30 PM</h2>
        <p>Online</p>
      </div>

      <div className="speaker-section">
        <img src="speaker-image.jpg" alt="Speaker" className="speaker-image" />
        <div className="speaker-details">
          <h3>Saravanan Ganesan</h3>
          <p>Assistant Consultant - Ilot, Tata Consultancy Services</p>
        </div>
      </div>

      <a href="https://reskilll.com/event/aiistudio" className="registration-link">Registration Link</a>
    </div>
  );
}

export default AzureAIStudioDeepDive;