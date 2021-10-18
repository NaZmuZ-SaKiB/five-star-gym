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
                <Link to={`/service/${id}`}>Show more <i class="fas fa-angle-double-right"></i></Link>
            </div>
        </div>
    );
};

export default Service;