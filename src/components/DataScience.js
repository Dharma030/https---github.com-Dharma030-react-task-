// components/DataScience.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
const careerImage = require('../images/data science.jpg');

const DataScience = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the next page, e.g., "/courses/cybersecurity"
    navigate('/courses/cybersecurity');
  };

  return (
    <div>
     <img src={careerImage} alt="Career Image" style={{ maxWidth: '100%', height: 'auto' }} />
      <h2>Data Science</h2>
      <button onClick={handleClick}>Go to Cyber Security</button>
      {/* Add other content */}
    </div>
  );
};

export default DataScience;
