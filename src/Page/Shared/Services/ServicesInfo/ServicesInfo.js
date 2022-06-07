import React from 'react';
import { useNavigate } from 'react-router';
import './ServicesInfo.css';
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const ServicesInfo = (props) => {
    const { _id, name, image, description, price } = props.services;
    const navigate = useNavigate();

    const navigateToServicesDetail = id => {
        navigate(`/services/${_id}`);
    }
    return (
        <div className='mb-5'>
            <div className='single-cart '>
                <img src={image} width='298' height='290' alt='' />
                <div class="cartbody">
                    <h3><strong>{name}</strong></h3>
                    <p className='cart-price'><strong>Price: {price}</strong></p>
                    <p><strong>Description:</strong> {description}</p>
                </div>
                <div className='cart-button'>
                    <button
                        onClick={() => navigateToServicesDetail(_id)}
                        className='cart-btn'
                    >
                        Booking
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServicesInfo;