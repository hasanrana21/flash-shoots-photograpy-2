import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-4 col-sm-12 services-card p-4">
            <div className="services-card-title">
                <div className="services-title-image">
                    <img src={service.image} alt=""/>
                </div>
                <h4>{service.name}</h4>
                <h5>TK.{service.price}/=</h5>
            </div>
            <div className="service-card-package">
                <p>{service.packageInfo1}</p>
                <p>{service.packageInfo2}</p>
                <p>{service.packageInfo3}</p>
                <p>{service.packageInfo4}</p>
                <p>{service.packageInfo5}</p>

                <Link to={`/placedOrder/${service.price}`}>
                    <button className="btn primary-button">Book</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;