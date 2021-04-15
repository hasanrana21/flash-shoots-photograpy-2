import React from 'react';
import './TestimonialDetails.css';

const TestimonialDetails = ({reviews}) => {
    return (
        <div className="col-md-4 testimonial-card">
            <div className="testimonial-image d-flex justify-content-center">
                <img src={reviews.image} alt=""/>
            </div>
            <div>
                <p>{reviews.review}</p>
                <h5>{reviews.star}</h5>
                <h6>-{reviews.name}</h6>
            </div>
        </div>
    );
};

export default TestimonialDetails;