import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import ServiceCard from './ServiceCard/ServiceCard';

import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./service.data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
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