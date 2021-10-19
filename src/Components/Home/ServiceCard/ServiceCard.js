import React from 'react';
import { Link } from 'react-router-dom';

import './ServiceCard.css';

const Service = ({ service }) => {
    const { id, image, title, description, price } = service;

    return (
        <div className="service-card">
            <img src={require(`../../../Images/services/${image}`).default} alt={title} />
            <div className="info">
                <div className="title">{title}</div>
                <div className="description">{description.substr(0, 100)}...</div>
                <p className="price">${price}/<span>month</span></p>
                <Link to={`/service/${id}`}>Show more <i className="fas fa-angle-double-right"></i></Link>
            </div>
        </div>
    );
};

export default Service;