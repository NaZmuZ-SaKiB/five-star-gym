import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Logo from '../../Images/logo-white.png';
import './Footer.css';

const Footer = () => {
    const [services, setServices] = useState([]);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    useEffect(() => {
        fetch('./service.data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    // functions

    const onSubmit = data => {
        reset();
    }

    return (
        <div className="footer-container">
            <footer>
                <div className="address">
                    <img src={Logo} alt="Logo" />
                    <p className="address-text">
                        (FOR BOTH LADIES & GENTS) <br />
                        48, Siddheswari Road, (Alipur House), <br />
                        Dhaka-1217, Bangladesh <br />
                        Phone: +88-01726-268827, 01 <br />
                    </p>
                    <div className="social-links">
                        <i className="fab fa-facebook-square fa-2x"></i>
                        <i className="fab fa-twitter-square fa-2x"></i>
                        <i className="fab fa-instagram-square fa-2x"></i>
                        <i className="fab fa-linkedin fa-2x"></i>
                    </div>
                </div>
                <div className="footer-links-container">
                    <div className="title">Services</div>
                    {
                        services.map(service => <Link key={service.id} to={`/service/${service.id}`}>{service.title}</Link>)
                    }
                </div>
                <div className="footer-links-container">
                    <div className="title">Company</div>
                    <a href="#">About us</a>
                    <a href="#">Blog</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy policy</a>
                    <a href="#">Refund policy</a>
                    <a href="#">Join us</a>
                </div>
                <div className="contact-form">
                    <p className="title">Contact</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            placeholder="Name"
                            style={{ borderColor: `${errors.name ? 'red' : ''}` }}
                            {...register(
                                'name',
                                {
                                    pattern: { value: /^[A-Za-z\s]+$/, message: 'Invalid Name' },
                                    required: "Name is required"
                                },
                            )}
                        />
                        <p className="form-container__form__error">{errors.name?.message}&nbsp;</p>

                        <input
                            placeholder="Email"
                            style={{ borderColor: `${errors.email ? 'red' : ''}` }}
                            {...register(
                                'email',
                                {
                                    pattern: { value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Invalid Email' },
                                    required: "Email is required"
                                },
                            )}
                        />
                        <p className="form-container__form__error">{errors.email?.message}&nbsp;</p>

                        <textarea required placeholder="Your Message"></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </footer>
            <div className="copyright">&copy; 2021 Nazmuz Sakib | All Rights Reserved</div>
        </div>
    );
};

export default Footer;