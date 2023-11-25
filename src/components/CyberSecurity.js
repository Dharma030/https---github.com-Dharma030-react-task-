// components/CyberSecurity.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const careerImage = require('../images/cyper security.jpg'); // Use require for the image


const CyberSecurity = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the next page, e.g., "/courses/career"
    navigate('/courses/career');
  };

  return (
    <div>
     <img src={careerImage} alt="People working in a cyper-related environment" style={{ maxWidth: '100%', height: 'auto' }} />
      <h2>Cyber Security</h2>
      <button onClick={handleClick}>Go to Career</button>
      {/* Add other content */}
    </div>
  );
};

export default CyberSecurity;
