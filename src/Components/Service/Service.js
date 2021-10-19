import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useServices from '../../Hooks/useServices';

import './Service.css';

const Service = () => {
    const { id } = useParams();
    const [services] = useServices();
    const [service, setService] = useState({});

    useEffect(() => {
        services.length > 0 && setService(services.find(item => item.id === parseInt(id)))
    }, [services, id])


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