import React from 'react';
import useServices from '../../../Hooks/useServices';
import './Services.css';
import ServicesInfo from './ServicesInfo/ServicesInfo';


const Services = () => {
    const [services, setServices] = useServices();
    return (
        <div className=' container services'>
            <div className='cart-services'>
                {
                    services.map(services => <ServicesInfo
                    key={services._id}
                    services={services}
                    ></ServicesInfo>)
                }
            </div>
           
        </div>
    );
};

export default Services;