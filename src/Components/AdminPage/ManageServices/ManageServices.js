import React from 'react';
import ManageServicesDetails from '../ManageServicesDetails/ManageServicesDetails';
import './ManageServices.css';

const ManageServices = ({allOrderedList}) => {
    return (
        <div className="manage-services">
            <div className="row manage-services-title">
                <div className="col-md-6"><h5>Service Name</h5></div>
                <div className="col-md-3"><h5>Service Price</h5></div>
                <div className="col-md-3"><h5>Action</h5></div>
            </div>
            {
                allOrderedList.map(manageService => <ManageServicesDetails manageService={manageService} key={manageService._id}></ManageServicesDetails>)
            }
        </div>
    );
};

export default ManageServices;