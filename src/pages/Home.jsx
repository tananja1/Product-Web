import React from 'react';
import { Link } from 'react-router-dom';
import HomeImage from '../assets/home.jpg';
import '../Styles/Home.css';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${HomeImage})`}}>
    <div className="headerContainer">
    <h1>Rich's Farms</h1> 
    <p>Good products of your choice</p> 
    <Link to='/menu'>
    <button>ORDER NOW</button>
    </Link>
    </div>
      
    </div>
  );
}

export default Home;
