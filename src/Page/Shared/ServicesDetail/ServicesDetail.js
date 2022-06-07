import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServicesDetail.css';

const ServicesDetail = () => {
    const {servicesId} = useParams();
    return (
        <div className= 'container servicesDetail'>
            <div>
            <h2>Welcome to our booking page</h2>
            <h4>This is your service id: {servicesId}</h4>
            <Link to='/checkout'>
                <button>Proced Booking</button>
            </Link>
            </div>
        </div>
    );
};

export default ServicesDetail;