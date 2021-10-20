import React, { useEffect, useState } from 'react';

import './Trainer.css';

const Trainer = () => {
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        fetch('../trainers.json')
            .then(res => res.json())
            .then(data => setTrainers(data))
    }, [])

    return (
        <div className="trainers-container">
            <h1>Your Trainers</h1>
            {
                trainers.map(trainer => (
                    <div key={trainer.id} className="trainer">
                        <div className="photo">
                            <img src={trainer.photo} alt="trainer" />
                        </div>
                        <div className="info">
                            <p className="name">{trainer.name}</p>
                            <p className="students">Students taught :{trainer.students}</p>
                            <button className="follow">Follow <i className="fab fa-facebook"></i></button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Trainer;