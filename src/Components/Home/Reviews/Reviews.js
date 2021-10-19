import React from 'react';
import Rating from 'react-rating';

import './Reviews.css';

const Reviews = ({ review }) => {
    return (
        <div className="review">
            <img src={require(`../../../Images/profiles/${review.photo}`).default} alt="profile pic" />
            <p className="name">{review.name}</p>
            <p className="description">{review.message}</p>
            <Rating
                className="rating"
                initialRating={review.star}
                fullSymbol={<i class="fas fa-star"></i>}
                emptySymbol={<i class="far fa-star"></i>}
            />
        </div>
    );
};

export default Reviews;