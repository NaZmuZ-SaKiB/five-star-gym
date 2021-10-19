import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import './Service.css';

const Service = () => {
    const { id } = useParams();
    const [services, setServices] = useState([]);
    const [service, setService] = useState({});

    useEffect(() => {
        fetch('../service.data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    useEffect(() => {
        services.length > 0 && setService(services.find(item => item.id === parseInt(id)))
    }, [id, services])

    console.log(services)


    return (
        <>
            {
                Object.keys(service).length > 0 && <div className="service">
                    <h1 className="title">{service?.title}</h1>
                    <div className="image">
                        <img src={require(`../../Images/services/${service?.banner}`).default} alt={service?.title} />
                        <div className="price-class">
                            <div className="price">Price: ${service?.price}/<span>month</span></div>
                            <div className="class">{service?.classes} classes per week</div>
                        </div>
                    </div>
                    <p className="description">
                        {service?.description}
                    </p>
                </div>
            }
        </>
    );
};

export default Service;