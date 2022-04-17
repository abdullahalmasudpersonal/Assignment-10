import React from 'react';
import { Link } from 'react-router-dom';
import useServices from '../../../Hooks/useServices';
import ServicesInfo from '../../Shared/Services/ServicesInfo/ServicesInfo';
import Banner from '../Banner/Banner';
import './Home.css';

const Home = () => {
    const [services, setServices] = useServices();
    return (
        <div>
            <Banner />
            <h1 className='serviec-h1'>Services(<span>{services.length}</span>)</h1>

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
        </div>
    );
};

export default Home;