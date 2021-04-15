import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <div className="container-fluid px-5">
                <Services></Services>
                <About></About>
                <Testimonial></Testimonial>
                <Contact></Contact>
            </div>
        </section>
    );
};

export default Home;