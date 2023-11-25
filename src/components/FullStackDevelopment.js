// FullStackDevelopment.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
const careerImage = require('../images/full stack developer.jpg');

const FullStackDevelopment = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the next page, e.g., "/courses/datascience"
    navigate('/courses/datascience');
  };

  return (
    <div>
     <img src={careerImage} alt="People working in a career-related environment" style={{ maxWidth: '300px', height: 'auto' }} />
      <h2>Full Stack Development</h2>
      <button onClick={handleClick}>Go to Data Science</button>
      {/* Add other content */}
    </div>
  );
};

export default FullStackDevelopment;
