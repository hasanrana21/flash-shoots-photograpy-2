import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './TestimonialDetails.css';

const TestimonialDetails = ({reviews}) => {
    return (
        <div className="col-md-4 testimonial-card">
            <div className="testimonial-image img-fluid d-flex justify-content-center">
                <img src={reviews.image} alt=""/>
            </div>
            <div>
                <p>{reviews.review}</p>
                <h5 style={{color: 'goldenrod'}}>
                     <FontAwesomeIcon icon={faStar}/>
                     <FontAwesomeIcon icon={faStar}/>
                     <FontAwesomeIcon icon={faStar}/>
                     <FontAwesomeIcon icon={faStar}/>
                     <FontAwesomeIcon icon={faStar}/>
                 </h5>
                <h6>-{reviews.name}</h6>
            </div>
        </div>
    );
};

export default TestimonialDetails;