// Navigation.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/courses/all" activeClassName="active">All</NavLink></li>
        <li><NavLink to="/courses/fullstack" activeClassName="active">Full Stack Development</NavLink></li>
        <li><NavLink to="/courses/datascience" activeClassName="active">Data Science</NavLink></li>
        <li><NavLink to="/courses/cybersecurity" activeClassName="active">Cyber Security</NavLink></li>
        <li><NavLink to="/courses/career" activeClassName="active">Career</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
