import React from 'react';
import './Footer.css';
import logo from '../../../image/logo.png';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='footer-bg'>
            <div className='footer container'>
                <div>
                    <img src={logo} height='120px' alt='' />
                    <p>Copyright&copy;{year} Fstoppers</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;