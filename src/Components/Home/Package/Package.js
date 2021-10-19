import React from 'react';

import './Package.css';

const Package = ({ pack }) => {
    return (
        <div className="package">
            <h2>{pack?.title}</h2>
            <ul>
                <li>Classes:</li>
                {
                    pack?.classes.map(course => <li key={course}>{course}</li>)
                }
            </ul>
            <p className="price">${pack?.price}/<span>month</span></p>
            <button>Enroll</button>
        </div>
    );
};

export default Package;