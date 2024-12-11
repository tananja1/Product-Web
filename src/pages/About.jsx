import React from 'react';
import AboutImage from '../assets/about.jpg';

import '../Styles/About.css';

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${AboutImage})`}}></div>

      <div className='aboutBottom'>
        <div>ABOUT US</div>
        <p>Welcome to <b>RICH FARMS</b>, where passion meets agriculture!

At our farm, we specialize in growing fresh and high-quality crops, including yam, maize, rice, pepper, and sweet potato. Located in <b>Kajamasu Parembo Bono East Ghana</b>, our mission is to provide nutritious and sustainably-grown produce to families and businesses.

With a dedication to modern farming techniques and traditional values, we take pride in every step of the process, from planting to harvest. Whether you're looking for fresh ingredients or supporting local agriculture, you can count on us to deliver.

Thank you for supporting our journey towards a healthier and more sustainable future!</p>
      </div>
    </div>
  );
}

export default About;
