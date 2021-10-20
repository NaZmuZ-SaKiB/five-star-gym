import React from 'react';

import BG from '../../../Images/designBG.png';
import './Package.css';

const Package = ({ pack }) => {
    return (
        <div className="package" style={{ backgroundImage: `url(${BG}), linear-gradient(to top,#dca6ac , #615c9f)` }}>
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