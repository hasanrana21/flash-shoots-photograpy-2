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
            <h2 className="text-center py-3 mt-3">Services We Provide</h2>
            {
                servicesData.map(service => <ServiceDetails service={service} key={service._id}></ServiceDetails>)
            }
        </div>
    );
};

export default Services;