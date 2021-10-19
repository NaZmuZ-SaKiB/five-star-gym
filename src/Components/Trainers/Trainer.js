import React, { useEffect, useState } from 'react';

const Trainer = () => {
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        fetch('../trainers.json')
            .then(res => res.json())
            .then(data => setTrainers(data))
    }, [])

    console.log(trainers)

    return (
        <div className="trainers-container">
            <h1>Your Trainers</h1>
            {
                trainers.map(trainer => (
                    <div className="trainer">
                        <img src={trainer.photo} alt="" />
                    </div>
                ))
            }
        </div>
    );
};

export default Trainer;