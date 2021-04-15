import React from 'react';
import './About.css';
import aboutPic from '../../../images/aboutUsPhoto.jpg';

const About = () => {
    return (
        <div className="row my-5 py-5 align-items-center">
            <h2 className="text-center py-5">ABOUT US</h2>
            <div className="col-md-6 about-image">
                <img src={aboutPic} alt=""/>
            </div>
            <div className="col-md-6">
                <h3 className="py-2">WHO WE ARE</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, repellendus iste rem aliquid eligendi officiis? In, molestias recusandae? Temporibus laboriosam dolorum accusamus officiis minima iure ab repudiandae deserunt est voluptatibus!</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sint nesciunt facere ad. Accusantium eos maxime esse natus numquam repellendus sed delectus provident voluptatem harum!</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium non ducimus inventore illo minus cum officiis exercitationem quibusdam et aliquid maiores dolorum consequatur, vel odio dolorem minima dolore repudiandae assumenda! Quisquam voluptates optio temporibus a, placeat impedit provident aliquam?</p>
            </div>
        </div>
    );
};

export default About;