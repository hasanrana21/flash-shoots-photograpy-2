import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8050/getServiceData')
        .then(res => res.json())
        .then(data => setServicesData(data))
    }, [])
    return (
        <div className="row my-5 container-fluid">
            {
                servicesData.map(service => <ServiceDetails service={service}></ServiceDetails>)
            }
        </div>
    );
};

export default Services;