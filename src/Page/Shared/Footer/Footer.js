import React from 'react';
import './Footer.css';
import logo from '../../../image/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='footer container'>
            <div>
                <img src={logo} height='120px' alt='' />
                <p>Copyright&copy;{year}</p>
            </div>
            <div className='footer-link'>
                <h4>Links</h4>
                <Link to='/'>Home</Link>
                <Link to='/services'>Services</Link>
                <Link to='/galleries'>Galleries</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/about'>About</Link>
            </div>
        </div>
    );
};

export default Footer;