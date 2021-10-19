import React from 'react';
import { Link } from 'react-router-dom';

import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <h1>404 Page Not Found</h1>
            <img src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-512x249-ju1c9yxg.png" alt="404 page" />
            <div className="link-container">
                <Link to='/home'>Back to home</Link>
            </div>
        </div>
    );
};

export default PageNotFound;