import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

import Logo from '../../Images/logo-black.png';
import { Context } from '../ContextProvider/ContextProvider';

const Enroll = () => {
    const [context] = useContext(Context);

    const [services, setServices] = useState([]);

    const { register, formState: { errors }, reset } = useForm();

    const [course, setCourse] = useState('');
    const [message, setMessage] = useState('');

    const history = useHistory();

    const handleChange = e => {
        setCourse(e.target.value);
    }

    useEffect(() => {
        fetch('./service.data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(course)
        if (course === 'select' || !course) { setMessage("please select your course") }
        else {
            setMessage(`Enrolment complete for ${context?.displayName} in ${course}`);
            setTimeout(() => {
                history.push('/home')
            }, 3000);
        }
    }

    return (
        <div className="form-container" >
            <img src={Logo} alt="logo" className="form-container__logo" />
            <h1>Enroll</h1>
            <form onSubmit={handleSubmit} className="form-container__form">
                <input
                    value={context?.displayName && context?.displayName}
                    readOnly
                />
                <p className="form-container__form__error">&nbsp;</p>

                <input
                    value={context?.email && context?.email}
                    readOnly
                />
                <p className="form-container__form__error">&nbsp;</p>

                <select
                    onChange={handleChange}
                >
                    <option selected value="select"> Select Course</option>
                    {
                        services.map(service => <option value={service.title} key={service.id}>{service.title}</option>)
                    }
                </select>
                <p className="form-container__form__error">{errors.course?.message && errors.course?.message}&nbsp;</p>

                <button type="submit">
                    Enroll
                </button>

                <p style={{ marginTop: '20px' }}>{message && message}&nbsp;</p>
            </form>

        </div >
    );
};

export default Enroll;