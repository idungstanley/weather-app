import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Component/Nav/Navbar';
import Details from './Component/Details/Details';

function WeatherApp() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Countries" element={<Details />} />
        </Routes>
      </Router>
    </main>
  );
}

export default WeatherApp;
