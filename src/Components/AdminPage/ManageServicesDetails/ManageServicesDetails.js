import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ManageServicesDetails.css';

const ManageServicesDetails = ({manageService}) => {
    // console.log(manageService)

    const handleDeleteService = deleteId => {
        console.log(deleteId)

        fetch('https://peaceful-mesa-78217.herokuapp.com/delete/' + deleteId, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(res => console.log(res))
    }
    return (
        <div className="row ps-3 manage-service-list">
            <div className="col-md-6"> <h5>{manageService.name}</h5> </div>
            <div className="col-md-3"> <h5>{manageService.price}</h5> </div>
            <div className="col-md-3 ps-1 pt-2 action-icon">
                <span style={{color: '#0d6efd'}}> <FontAwesomeIcon icon={faEdit}/> </span>
                <span onClick={() => handleDeleteService(manageService._id)} style={{color: 'red'}}> <FontAwesomeIcon icon={faTrashAlt}/> </span>
            </div>
        </div>
    );
};

export default ManageServicesDetails;