import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        < Link to='https://instagram.com'>
        <InstagramIcon />
        </Link>
        < Link to='https://twitter.com'>
        <TwitterIcon />
        </Link>
        < Link to='https://facebook.com'>
        <FacebookIcon />
        </Link>
        < Link to='https://linkedin.com'>
        <LinkedInIcon />
        </Link> 
      </div>
      <p> &copy; 2024 richproducts.com</p>
    </div>
  );
}

export default Footer;
