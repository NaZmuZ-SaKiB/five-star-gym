import React from 'react';
import Header from './Header/Header';
import ServiceCard from './ServiceCard/ServiceCard';

import useServices from '../../Hooks/useServices';
import './Home.css';

const Home = () => {
    const [services] = useServices();

    return (
        <>
            <Header />
            <h2 className="home-h2">Our Services</h2>
            <div className="services-container">
                {
                    services.map(service => <ServiceCard key={service.id} service={service} />)
                }
            </div>
        </>
    );
};

export default Home;