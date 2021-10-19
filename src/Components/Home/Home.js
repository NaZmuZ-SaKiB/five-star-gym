import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import ServiceCard from './ServiceCard/ServiceCard';

import './Home.css';
import Reviews from './Reviews/Reviews';
import Package from './Package/Package';

const Home = () => {
    const [services, setServices] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('./service.data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    useEffect(() => {
        fetch('./review.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    useEffect(() => {
        fetch('./packages.json')
            .then(res => res.json())
            .then(data => setPackages(data));
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
            <h2 className="home-h2">Popular Packages</h2>
            <div className="package-container">
                {
                    packages.map(pack => <Package key={pack.title} pack={pack} />)
                }
            </div>
            <h2 className="home-h2">Reviews</h2>
            <div className="reviews-container">
                {
                    reviews.map(review => <Reviews key={review.name} review={review} />)
                }
            </div>
        </>
    );
};

export default Home;