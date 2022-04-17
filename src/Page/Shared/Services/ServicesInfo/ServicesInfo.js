import React from 'react';
import './ServicesInfo.css';

const ServicesInfo = (props) => {
    const { name, image, description, price } = props.services;
    return (
        <div className=''>
            <div className='single-cart '>
                <img src={image} width='298' height='290' alt='' />
                <div class="cartbody">
                    <h3><strong>{name}</strong></h3>
                    <p className='cart-price'><strong>Price: {price}</strong></p>
                    <p><strong>Description:</strong> {description}</p>
                </div>
                <div className=''>
                    <button className='cart-btn'>Booking</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesInfo;