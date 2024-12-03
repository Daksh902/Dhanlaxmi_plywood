import React from 'react';
import background from '../assets/background.jpg';
// import './Home.css'; // Add CSS file for styles

const Home = () => (
  <div className="home">
    <img src={background} alt="Furniture Background" className="background-image" />
    <div className="home-text">
      <h1>Welcome to Dhanlaxmi Furniture & Plywood</h1>
      <p>Your perfect furniture solution.</p>
    </div>
  </div>
);

export default Home;
