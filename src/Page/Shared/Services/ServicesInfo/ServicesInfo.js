import React from 'react';
import './ServicesInfo.css';

const ServicesInfo = (props) => {
    const { name, image, description, price } = props.services;
    return (
        <div className=''>
            <div className='single-cart'>
                <img src={image} width='298' height='290' alt='' />
                <div class="card-body">
                    <h3><strong>{name}</strong></h3>
                    <p><strong>Price: {price}</strong></p>
                    <p><strong>Description:</strong> {description}</p>
                </div>
                <div className=''>
                    <button className=''>Booking</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesInfo;