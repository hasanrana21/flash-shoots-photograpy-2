import React, { useEffect, useState } from 'react';
import ManageServicesDetails from '../ManageServicesDetails/ManageServicesDetails';
import './ManageServices.css';

const ManageServices = () => {
    const [manageServiceList, setManageServiceList] = useState([]);

    useEffect(() => {
        fetch('https://peaceful-mesa-78217.herokuapp.com/getServiceData')
        .then(res => res.json())
        .then(data => setManageServiceList(data));
    }, [])
    return (
        <div className="manage-services">
            <div className="row manage-services-title">
                <div className="col-md-6"><h5>Service Name</h5></div>
                <div className="col-md-3"><h5>Service Price</h5></div>
                <div className="col-md-3"><h5>Action</h5></div>
            </div>
            {
                manageServiceList.map(manageService => <ManageServicesDetails manageService={manageService} key={manageService._id}></ManageServicesDetails>)
            }
        </div>
    );
};

export default ManageServices;