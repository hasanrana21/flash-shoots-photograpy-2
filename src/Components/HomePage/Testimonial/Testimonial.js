import React from 'react';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';
import bishal from '../../../images/Ellipse 91.png';
import fahmida from '../../../images/Ellipse 90.png';
import imdadul from '../../../images/Ellipse 92.png';

const clientReviews = [
    {
        image: bishal,
        name: 'Bishal Sharma',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione porro adipisci blanditiis amet deserunt mollitia?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aspernatur quasi, asperiores eaque adipisci molestiae.',
        star: '* * * * *',
    },
    {
        image: fahmida,
        name: 'Fahmida Maruf',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione porro adipisci blanditiis amet deserunt mollitia?',
        star: '* * * * *',
    },
    {
        image: imdadul,
        name: 'Imdadul Ibne Kair',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione porro adipisci blanditiis amet deserunt mollitia?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas ullam dolores error, voluptatem numquam.',
        star: '* * * * *',
    },
]
const Testimonial = () => {
    return (
        <div className="row justify-content-center mb-5">
            <h3 className="text-center">Our Client Says</h3>
            {
                clientReviews.map(reviews => <TestimonialDetails reviews={reviews}></TestimonialDetails>)
            }
        </div>
    );
};

export default Testimonial;