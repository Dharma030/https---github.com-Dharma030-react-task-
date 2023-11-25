// components/Career.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const careerImage = require('../images/careers.jpg');
const Career = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the next page, e.g., "/courses/all" (looping back to the beginning)
    navigate('/courses/all');
  };

  return (
    <div>
      <h2>Career</h2>
      <img src={careerImage} alt="Career Image" style={{ maxWidth: '100%', height: 'auto' }} />
      <p>Welcome to Careers</p>
      <button onClick={handleClick}>Go to All Courses</button>
    </div>
  );
};

export default Career;
