import React from 'react';
import './Banner.css';
import banner1 from '../../../images/banner16.jpg';
import banner2 from '../../../images/banner14.jpg';
import banner3 from '../../../images/banner10.jpg';

;const Banner = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="slider-image">
                        <img src={banner1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-caption banner-text d-none d-md-block">
                        <h3 style={{marginTop: '-30%'}}>Ready to take your Beyond your Imagination</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sint officiis tenetur culpa odit praesentium laboriosam magnam nulla, corporis maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, iure. </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="slider-image">
                        <img src={banner2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-caption banner-text d-none d-md-block">
                        <h3 style={{marginTop: '-30%'}}>A Picture is worth a Thousands word</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sint officiis tenetur culpa odit praesentium laboriosam magnam nulla, corporis maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, iure. </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="slider-image">
                        <img src={banner3} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-caption banner-text d-none d-md-block">
                        <h3 style={{marginTop: '-30%'}}>Every Moment of your life is Beautiful</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sint officiis tenetur culpa odit praesentium laboriosam magnam nulla, corporis maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, iure. </p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;