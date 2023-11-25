// components/AllCourses.js (example)
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllCourses = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the next page, e.g., "/courses/fullstack"
    navigate('/courses/fullstack');
  };

  return (
    <div>
      <h2>All Courses</h2>
      <button onClick={handleClick}>Go to Full Stack Development</button>
      {/* Add other content */}
    </div>
  );
};

export default AllCourses;
