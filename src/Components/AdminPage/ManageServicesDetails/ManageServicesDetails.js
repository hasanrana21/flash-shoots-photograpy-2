import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ManageServicesDetails.css';

const ManageServicesDetails = ({manageService}) => {
    console.log(manageService)
    return (
        <div className="row ps-3 manage-service-list">
            <div className="col-md-6"> <h5>{manageService.serviceName}</h5> </div>
            <div className="col-md-3"> <h5>{manageService.servicePrice}</h5> </div>
            <div className="col-md-3 ps-1 pt-2 action-icon">
                <span style={{color: '#0d6efd'}}> <FontAwesomeIcon icon={faEdit}/> </span>
                <span style={{color: 'red'}}> <FontAwesomeIcon icon={faTrashAlt}/> </span>
            </div>
        </div>
    );
};

export default ManageServicesDetails;