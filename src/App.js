// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import AllCourses from './components/AllCourses';
import FullStackDevelopment from './components/FullStackDevelopment';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/courses/all" element={<AllCourses />} />
          <Route path="/courses/fullstack" element={<FullStackDevelopment />} />
          <Route path="/courses/datascience" element={<DataScience />} />
          <Route path="/courses/cybersecurity" element={<CyberSecurity />} />
          <Route path="/courses/career" element={<Career />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
