import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import logo from '../../Assets/weather-logo.png';

const Navbar = () => (
  <div className="container">
    <img src={logo} alt="logo" />
    <ul className="link-container">
      <li className="link">
        <Link to="/">Home</Link>
      </li>
    </ul>
  </div>

);

export default Navbar;
