import React from 'react';
import { useParams } from 'react-router';

const ServicesDetail = () => {
    const {servicesId} = useParams();
    return (
        <div>
            <h2>Welcome to my booking page</h2>
            <h4>This is your service id: {servicesId}</h4>
        </div>
    );
};

export default ServicesDetail;