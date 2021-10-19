import React, { useContext, useState } from 'react';

import Logo from '../../Images/logo-black.png';
import { Context } from '../ContextProvider/ContextProvider';
import './Appoinment.css';

const Appoinment = () => {

    const [context] = useContext(Context);

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        setMessage(`Appointment set for ${context.user.displayName} on ${date} at ${time}`);
        setDate('');
        setTime('');
    }

    return (
        <div className="form-container appoinment" >
            <img src={Logo} alt="logo" className="form-container__logo" />
            <h1>Appoinment</h1>
            <form onSubmit={handleSubmit} className="form-container__form">

                <input
                    value={context.user?.displayName}
                    readOnly
                    style={{ marginBottom: '15px' }}
                />

                <input
                    value={date}
                    type="date"
                    style={{ marginBottom: '15px' }}
                    required
                    onChange={e => setDate(e.target.value)}
                />

                <input
                    value={time}
                    type="time"
                    style={{ marginBottom: '15px' }}
                    required
                    onChange={e => setTime(e.target.value)}
                />

                <button type="submit">
                    Submit
                </button>
            </form>
            {message && <p className="message">{message}</p>}
        </div >
    );
};

export default Appoinment;