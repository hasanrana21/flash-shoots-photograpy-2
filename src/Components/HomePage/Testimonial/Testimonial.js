import React, { useEffect, useState } from 'react';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';


const Testimonial = () => {
    const [clientReviews, setClientReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8050/getReview')
        .then(res => res.json())
        .then(result => setClientReviews(result));
    }, [])
    return (
        <div className="row justify-content-center mb-5">
            <h3 className="text-center">Our Client Says</h3>
            {
                clientReviews.map(reviews => <TestimonialDetails reviews={reviews} key={reviews._id}></TestimonialDetails>)
            }
        </div>
    );
};

export default Testimonial;